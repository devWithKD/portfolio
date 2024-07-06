import mongoose, { Schema, Document } from "mongoose";

export interface Skill extends Document {
  name: string;
  // image: string;
  level: Number;
}

const SkillSchema: Schema<Skill> = new Schema({
  name: { type: String, required: true },
  // image: { type: String, required: true },
  level: { type: Number, required: true, max: 10, min: 1 },
});

const SkillModel =
  (mongoose.models.skill as mongoose.Model<Skill>) ||
  mongoose.model("skill", SkillSchema);

export default SkillModel;