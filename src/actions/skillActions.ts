"use server";
import SkillModel, { Skill } from "@/model/skill.model";
import S3, { r2_bucket_name } from "@/lib/cloudflareR2Connect";
import { ChangeEvent, FormEvent } from "react";
import { randomUUID } from "crypto";
import axios from "axios";

export async function addSkill(
  formData: FormData,
  Key: string
) {
  const skillName = formData.get("skill-name");
  const profLevel = formData.get("prof-level");

  const newSkill = new SkillModel({
    name: skillName,
    img_url: `${process.env.R2_PUBLIC_URI}${Key}`,
    level: Number(profLevel),
  });

  await newSkill.save();
}
