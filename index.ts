import cron from "node-cron";
import { postImage } from "./scripts/post";

console.log(`Current system time: ${new Date().toLocaleString()}`);

// Schedule task to run at 12AM midnight every day
cron.schedule("0 0 * * *", postImage);
