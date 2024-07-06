import dbConnect from "@/lib/dbConnect";
import ImageModel from "@/model/image.model";

export async function POST(request: Request) {
  await dbConnect();
  try {
    
  } catch (error) {
    console.error("Error while uploading image.",error);
  }
}
