"use server";
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

  await newSkill.save();
  revalidatePath("/edit/skills");
  return;
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
    return;
  }
  skill.name = skillName as string;
  skill.level = Number(profLevel);
  if (Key) {
    skill.img_url = `${process.env.R2_PUBLIC_URI}${Key}`;
    skill.img = Key;
  }
  await skill.save();
  revalidatePath("/edit/skills");
  return;
}

export async function deleteSkill(id: string) {
  try {
    console.log(id)
    await SkillModel.findByIdAndDelete(id);
    revalidatePath("/edit/skills");
    return;
  } catch (err) {
    console.error("Error Deleteing Skill", err);
    return;
  }
}
