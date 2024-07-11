import { Skill } from "@/model/skill.model";
import { NextResponse } from "next/server";

export interface ApiResponse {
  success: boolean;
  message: string; 
  skills?: Array<Skill>;
  projects?: Array<string>;
  experiances?: Array<string>;
  Key?: string;
  signedUrl? : string;
}