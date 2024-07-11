"use server";
import S3, { r2_bucket_name } from "@/lib/cloudflareR2Connect";
import SkillModel from "@/model/skill.model";
import { revalidatePath } from "next/cache";

export async function addSkill(formData: FormData, Key: string) {
  const skillName = formData.get("skill-name");
  const profLevel = formData.get("prof-level");
  const img = Key;
  const newSkill = new SkillModel({
    name: skillName,
    img_url: `${process.env.R2_PUBLIC_URI}${img}`,
    level: Number(profLevel),
    img: `${img}`,
  });

  console.log(newSkill);

  try {
    await newSkill.save();
    revalidatePath("/edit/skills");
    return null;
  } catch (error) {
    console.error("Something went wrong while saving document", error);
    const params = {
      Bucket: r2_bucket_name as string,
      Key,
    };
    S3.deleteObject(params);
    return error;
  }
}

export async function updateSkill(
  formData: FormData,
  id: string,
  Key?: string
) {
  const skillName = formData.get("skill-name");
  const profLevel = formData.get("prof-level");

  const skill = await SkillModel.findById(id);
  if (!skill) {
    // console.log("error", id);
    return null;
  }
  skill.name = skillName as string;
  skill.level = Number(profLevel);
  if (Key) {
    skill.img_url = `${process.env.R2_PUBLIC_URI}${Key}`;
    skill.img = Key;
  }
  try {
    await skill.save();
    revalidatePath("/edit/skills");
    return null;
  } catch (error) {
    console.error("Something went wrong while saving document", error);
    const params = {
      Bucket: r2_bucket_name as string,
      Key:skill.img as string,
    };
    S3.deleteObject(params);
    return error;
  }
}

export async function deleteSkill(id: string) {
  try {
    // console.log(id)
    await SkillModel.findByIdAndDelete(id);
    revalidatePath("/edit/skills");
    return;
  } catch (err) {
    console.error("Error Deleteing Skill", err);
    return;
  }
}
