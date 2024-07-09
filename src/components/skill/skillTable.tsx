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

async function SkillTable() {
  const skills: Skill[] = await SkillModel.find();
  return (
    <div className="max-w-[50rem]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[6rem] text-center">Index</TableHead>
            <TableHead className="w-[10rem]">Name</TableHead>
            <TableHead className="text-center w-fit">
              Proficiency Level
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {skills.map((skill, idx) => (
            <TableRow>
              <TableCell className="w-[6rem] text-center">{idx + 1}</TableCell>
              <TableCell className="w-[10rem]">
                <div className="flex items-center gap-3">
                  <Image
                    src={skill.img_url as string}
                    width={24}
                    height={24}
                    alt={`${skill.name} logo`}
                  />
                  <span className="font-medium">{skill.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">{`${skill.level}/10`}</TableCell>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <SkillDialog type="edit" skill={skill} />
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
