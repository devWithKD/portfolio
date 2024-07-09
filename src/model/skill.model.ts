import mongoose, { Schema, Document } from "mongoose";

export interface Skill extends Document {
  name: string;
  img_url?: string;
  level: Number;
}

const SkillSchema: Schema<Skill> = new Schema({
  name: { type: String, required: true },
  img_url: { type: String, required: false },
  level: { type: Number, required: true, max: 10, min: 1 },
});

const SkillModel =
  (mongoose.models.skill as mongoose.Model<Skill>) ||
  mongoose.model("skill", SkillSchema);

export default SkillModel;