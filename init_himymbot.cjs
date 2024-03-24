const path = require("path");
require("dotenv").config({ path: path.join(process.cwd(), ".env") });
const { Telegraf } = require("telegraf");

const himym_bot = new Telegraf(process.env.HIMYM_BOT_TOKEN);

module.exports = himym_bot;
