import { TwitterApi } from "twitter-api-v2";
import fs from "node:fs";
import path from "node:path";
import "dotenv/config";

const v1Client = new TwitterApi({
  appKey: process.env.CONSUMER_KEY || "",
  appSecret: process.env.CONSUMER_SECRET || "",
  accessToken: process.env.TOKEN || "",
  accessSecret: process.env.TOKEN_SECRET || "",
});

const rwClient = v1Client.readWrite;

export const postImage = async () => {
  const imagesDir = path.join("./images");
  const files = fs.readdirSync(imagesDir);
  const imgFile = files[Math.floor(Math.random() * files.length)];
  const imgPath = path.join(imagesDir, imgFile);

  // Upload media using rwClient
  const mediaId = await rwClient.v1.uploadMedia(imgPath);
  
  // Post tweet with media
  const { data: createdTweet } = await rwClient.v2.tweet({
    text: "",
    media: {
      media_ids: [mediaId],
    },
  });

  console.log(createdTweet);
};
