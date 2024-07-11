import S3Client from "aws-sdk/clients/s3";

const account_id = process.env.CLOUDFLARE_ACCOUNT_ID;
const access_id = process.env.CLOUDFLARE_ACCESS_ID;
const access_key = process.env.CLOUDFLARE_ACCESS_KEY;
export const r2_bucket_name = process.env.CLOUDFLARE_R2_BUCKET_NAME;

const S3 = new S3Client({
  endpoint: `https://${account_id}.r2.cloudflarestorage.com`,
  accessKeyId: access_id,
  secretAccessKey: access_key,
  signatureVersion: "v4",
});

export default S3
