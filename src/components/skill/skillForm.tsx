"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StepSlider from "../step-slider";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { DialogTrigger } from "../ui/dialog";
import { Skill } from "@/model/skill.model";

async function getPreSignedData(
  e: ChangeEvent<HTMLInputElement>,
  existingKey?: string
) {
  const logo = e.target.files?.[0];
  if (!logo) return;
  const type = encodeURIComponent(logo.type as string);
  const { data } = await axios.get(
    `/api/image/get-presigned-data?action=put&fileType=${type}${
      existingKey ? `&key=${existingKey}` : ""
    }`
  );
  const { Key, signedUrl } = data;
  return { Key, signedUrl };
}

function SkillForm({
  skill,
  type,
  addSkill,
  updateSkill,
}: {
  skill?: Skill;
  type?: "edit" | "add";
  addSkill: (formData: FormData, Key: string) => Promise<unknown>;
  updateSkill?: (
    formData: FormData,
    id: string,
    Key?: string
  ) => Promise<unknown>;
}) {
  const [preSignedData, setPreSignedData] = useState<{
    Key: string;
    signedUrl: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const logo = formData.get("skill-logo");
    if (type == "add") {
      if (preSignedData == null || !logo) return;

      axios
        .put(preSignedData.signedUrl, logo)
        .then(async () => {
          const res = addSkill(formData, preSignedData.Key);
          if (res) console.error(res);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      if (!updateSkill) return;
      if (preSignedData == null) {
        const res = updateSkill(formData, skill?._id as string);
        if (res) console.error(res);
      } else {
        await axios.put(preSignedData.signedUrl, logo).then(async () => {
          const res = updateSkill(
            formData,
            skill?._id as string,
            preSignedData.Key
          );
          if (res) console.error(res);
        });
      }
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <label htmlFor="skill-name">Name</label>
      <Input
        type="text"
        id="skill-name"
        name="skill-name"
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
        placeholder="Skill Name"
        defaultValue={skill ? skill.name : ""}
        required
      />
      <div className="flex gap-4 items-baseline">
        <label htmlFor="skill-logo">Logo</label>
        {skill && <div className="italic font-light text-sm">(unchanged)</div>}
      </div>
      <Input
        type="file"
        id="skill-logo"
        name="skill-logo"
        accept="image/jpeg, image/png"
        className="focus-visible:ring-0 focus-visible:ring-offset-0"
        onChange={async (e) => {
          const data = await getPreSignedData(e);
          if (!data) return;
          setPreSignedData(data);
        }}
      />
      <label htmlFor="skill-level">Proficiency Level</label>
      <StepSlider
        defaultValue={[skill ? Number(skill.level) : 1]}
        min={1}
        max={10}
        name="prof-level"
        id="skill-level"
        className="max-w-[20rem]"
      />
      <DialogTrigger asChild>
        <Button className="mt-4" type="submit">
          Save
        </Button>
      </DialogTrigger>
    </form>
  );
}

export default SkillForm;
