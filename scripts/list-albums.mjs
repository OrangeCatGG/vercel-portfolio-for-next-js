import fs from "fs";

// Load .env.local
try {
  const envConfig = fs.readFileSync('.env.local', 'utf-8');
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      process.env[key] = value;
    }
  });
} catch (e) {}

import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const region = process.env.AWS_REGION || "ap-southeast-1";
const bucketName = process.env.AWS_S3_BUCKET || "angeloramos.com";

const s3Client = new S3Client({ region });

async function listFolders() {
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    Delimiter: "/",
  });
  const { CommonPrefixes } = await s3Client.send(command);
  if (CommonPrefixes) {
    console.log("Albums found in S3:");
    CommonPrefixes.forEach(p => console.log(`  - ${p.Prefix}`));
    console.log(`\nTotal: ${CommonPrefixes.length} albums`);
  }
}

listFolders();
