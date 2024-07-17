import { Telegraf } from "telegraf";
const TOKEN = "7414027722:AAG8xdMf_wIrQFoFVh1588AmvRlHeB8dUYA";
const bot = new Telegraf(TOKEN);
bot.start((ctx) =>
  ctx.reply("Welcome to food-app")
);
bot.launch();
