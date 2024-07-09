import S3, { r2_bucket_name } from "@/lib/cloudflareR2Connect";
import { ApiResponse } from "@/types/ApiResponse";
import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const fileType = req.nextUrl.searchParams.get("fileType") as string;
  const ext = fileType.split("/")[1];
  const Key = `${randomUUID()}.${ext}`;
  const params = {
    Bucket: r2_bucket_name,
    Key,
    ContentType: fileType,
  };
  const signedUrl = await S3.getSignedUrl("putObject", params);
  const res: ApiResponse = {
    success: true,
    message: "OK",
    signedUrl,
    Key,
  };
  return NextResponse.json(res);
};
