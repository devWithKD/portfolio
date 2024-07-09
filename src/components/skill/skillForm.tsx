"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import StepSlider from "../step-slider";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import axios from "axios";
import { addSkill } from "@/actions/skillActions";
import { DialogTrigger } from "../ui/dialog";
import { revalidatePath } from "next/cache";
import { Skill } from "@/model/skill.model";

async function getPreSignedData(e: ChangeEvent<HTMLInputElement>) {
  const logo = e.target.files?.[0];
  if (!logo) return;
  const type = encodeURIComponent(logo.type as string);
  const { data } = await axios.get(
    `/api/image/get-presigned-data?fileType=${type}`
  );
  const { Key, signedUrl } = data;
  return { Key, signedUrl };
}

function SkillForm({ skill, type }: { skill?: Skill; type?: "edit" | "add" }) {
  const [preSignedData, setPreSignedData] = useState<{
    Key: string;
    signedUrl: string;
  } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const logo = formData.get("skill-logo");
    console.log(logo);
    if (preSignedData == null || !logo) return;

    axios
      .put(preSignedData.signedUrl, logo)
      .then(async (res) => {
        await addSkill(formData, preSignedData.Key);
        // revalidatePath("/");
      })
      .catch((error) => {
        console.log(error);
      });
    revalidatePath("/edit/skills");
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
        accept="image/jpeg, image/png, image/webp"
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
