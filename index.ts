import schedule from 'node-schedule';
import moment from 'moment-timezone';
import { postImage } from "./scripts/post";

// Schedule task to run at 12AM JST every day
const rule = new schedule.RecurrenceRule();
rule.hour = moment().tz("Asia/Tokyo").hour(0).minute(0).second(0).toDate().getHours();
rule.minute = 0;
rule.tz = 'Asia/Tokyo';

schedule.scheduleJob(rule, postImage);