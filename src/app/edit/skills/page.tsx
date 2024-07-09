import SkillDialog from "@/components/skill/skillDialog";
import SkillTable from "@/components/skill/skillTable";
import dbConnect from "@/lib/dbConnect";
import SkillModel, { Skill } from "@/model/skill.model";
import React from "react";

async function EditSkill() {
  await dbConnect();
  const skills: Skill[] = await SkillModel.find();
  if (skills.length <= 0)
    return (
      <div className="my-0 md:my-4 mx-2 flex flex-col gap-1 ">
        <h1 className="font-bold text-2xl">No skills added yet</h1>
        <h2 className="font-medium text-xl">Start by adding one</h2>
        <SkillDialog type="add" />
      </div>
    );

  return (
    <div className="my-0 md:my-4 flex flex-col gap-6 w-full">
      <SkillDialog type="add" />
      <SkillTable/>
    </div>
  );
}

export default EditSkill;
