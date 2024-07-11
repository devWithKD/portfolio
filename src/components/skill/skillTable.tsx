import SkillModel, { Skill } from "@/model/skill.model";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import SkillDialog from "./skillDialog";
import { deleteSkill } from "@/actions/skillActions";
import SkillDeleteButton from "./skillDeleteButton";


async function SkillTable() {
  let skills: Skill[] = await SkillModel.find();
  skills = skills.map((skill) => skill.toObject());
  return (
    <div className="max-w-[50rem] h-auto overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[6rem] text-center">Index</TableHead>
            <TableHead className="w-[15rem]">Name</TableHead>
            <TableHead className="text-center w-fit">
              Proficiency Level
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skills.map((skill, idx) => (
            <TableRow key={skill._id}>
              <TableCell className="w-[6rem] text-center">{idx + 1}</TableCell>
              <TableCell className="w-[15rem]">
                <div className="flex items-center gap-3">
                  <Image
                    src={skill.img_url as string}
                    width={24}
                    height={24}
                    alt={`${skill.name} logo`}
                    className="w-auto h-auto"
                    priority
                  />
                  <span className="font-medium">{skill.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">{`${skill.level}/10`}</TableCell>
              <TableCell className="w-[10rem]">
                <div className="flex gap-4 items-center">
                  <SkillDialog type="edit" skill={skill as Skill} />
                  <SkillDeleteButton
                    skill={skill as Skill}
                    deleteSkill={deleteSkill}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default SkillTable;
