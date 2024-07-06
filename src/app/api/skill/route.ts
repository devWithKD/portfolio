import dbConnect from "@/lib/dbConnect";
import SkillModel from "@/model/skill.model";
import { ApiResponse } from "@/types/ApiResponse";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  await dbConnect();
  const res: ApiResponse = {
    success: false,
    message: "Error Loading Skills",
  };
  try {
    const skills = await SkillModel.find();
    if (skills.length<=0) {
      console.log("No skills")
      res.success=false;
      res.message="No skills"
      return NextResponse.json(res,{status:400})
    } else {
      res.success = true;
      res.message = "OK";
      res.skills = skills;
      return NextResponse.json(res,{status:200});
    }
  } catch (error) {
    console.error("Error Loading Skills.", error);
    return NextResponse.json(res,{status:500});
  }
}
