const { Telegraf } = require("telegraf");
const TOKEN = "7414027722:AAG8xdMf_wIrQFoFVh1588AmvRlHeB8dUYA";
const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.launch();
