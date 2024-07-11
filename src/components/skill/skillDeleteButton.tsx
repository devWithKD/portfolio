"use client";

import { Skill } from "@/model/skill.model";
import { Button } from "../ui/button";
import { MdDelete } from "react-icons/md";
import axios from "axios";

function SkillDeleteButton({
  skill,
  deleteSkill,
}: {
  skill: Skill;
  deleteSkill: (id: string) => void;
}) {
  async function handleDelete(skill: Skill) {
    const key = skill.img;
    if (key) {
      axios
        .get(`/api/image/get-presigned-data?action=delete&key=${key}`)
        .then(async ({ data }) => {
          // console.log(data);
          await axios.delete(data.signedUrl);
        });
    }
    await deleteSkill(skill._id as string);
    return;
  }
  return (
    <Button
      variant="ghost"
      className="rounded-full"
      size="icon"
      onClick={async () => handleDelete(skill)}
    >
      <MdDelete size={24} />
    </Button>
  );
}

export default SkillDeleteButton;
