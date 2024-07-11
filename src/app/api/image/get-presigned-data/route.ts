import { auth } from "@/auth";
import S3, { r2_bucket_name } from "@/lib/cloudflareR2Connect";
import { ApiResponse } from "@/types/ApiResponse";
import { randomUUID } from "crypto";
import { Session } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export const GET = auth(async (req: NextRequest & { auth: Session | null }) => {
  const res: ApiResponse = {
    success: false,
    message: "",
  };
  if (req.auth) {
    const fileType = req.nextUrl.searchParams.get("fileType") as string;
    const existingKey = req.nextUrl.searchParams.get("key") as string;
    const action = req.nextUrl.searchParams.get("action") as string;
    switch (action) {
      case "put":
        try {
          const ext = fileType.split("/")[1];
          if (!ext) {
            res.message = "Invalid File Type";
            throw new Error("Invalid File Type");
          }
          const Key = existingKey ? existingKey : `${randomUUID()}.${ext}`;
          const params = {
            Bucket: r2_bucket_name,
            Key,
            ContentType: fileType,
          };
          const signedUrl = await S3.getSignedUrl("putObject", params);
          res.success = true;
          res.message = "OK";
          res.signedUrl = signedUrl;
          res.Key = Key;
          return NextResponse.json(res, { status: 200 });
        } catch (error) {
          res.success = false;
          console.error("PresignedURL Error", error);
          res.message =
            res.message == ""
              ? "Something Went Wrong, Check Server Logs for More Details"
              : res.message;
          return NextResponse.json(res, { status: 500 });
        }
      case "delete":
        try {
          if (!existingKey) {
            res.message = "Invalid Key";
            throw new Error("Invalid Key");
          }
          const params = {
            Bucket: r2_bucket_name,
            Key: existingKey,
          };
          const signedUrl = await S3.getSignedUrl("deleteObject", params);
          res.success = true;
          res.message = "OK";
          res.signedUrl = signedUrl;
          return NextResponse.json(res, { status: 200 });
        } catch (error) {
          res.success = false;
          console.error("PresignedURL Error", error);
          res.message =
            res.message == ""
              ? "Something Went Wrong, Check Server Logs for More Details"
              : res.message;
          return NextResponse.json(res, { status: 500 });
        }
      default:
        res.success = false;
        res.message = res.message == "" ? "Invalid Request" : res.message;
        return NextResponse.json(res, { status: 500 });
    }
  } else {
    res.success = false;
    res.message = " Unauthorized";
    return NextResponse.json(res, { status: 401 });
  }
});
