import { auth } from "@/auth";
import dbConnect from "@/lib/dbConnect";
import SkillModel from "@/model/skill.model";
import { ApiResponse } from "@/types/ApiResponse";
import { NextRequest, NextResponse } from "next/server";

export const POST = auth(async (req: Request) => {
  await dbConnect();
  try {
    const { skillName, level } = await req.json();
    const existingSkillByName = await SkillModel.findOne({
      name: skillName,
    });

    if (existingSkillByName) {
      const res: ApiResponse = {
        success: false,
        message: "Skill Alredy Exist.",
      };
      return NextResponse.json(res);
    } else {
      const newSkill = new SkillModel({
        name: skillName,
        level,
      });
      await newSkill.save();
    }
  } catch (error) {
    console.error("Error adding Skill.", error);
    const res: ApiResponse = {
      success: false,
      message: "Error Adding Skill.",
    };
    return NextResponse.json(res, { status: 500 });
  }
});
