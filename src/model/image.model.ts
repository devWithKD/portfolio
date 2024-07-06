import mongoose, { Schema, Document } from "mongoose";

export interface UploadedImage extends Document {
  data: Buffer;
  contentType: String;
  title: String;
}

const ImageSchema: Schema<UploadedImage> = new Schema({
  data: {
    type: Buffer,
    required: true,
  },
  contentType: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const ImageModel = mongoose.models.Image as mongoose.Model<UploadedImage> || mongoose.model("image",ImageSchema);

export default ImageModel;