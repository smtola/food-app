import { Telegraf } from "telegraf";
const TOKEN = "7414027722:AAG8xdMf_wIrQFoFVh1588AmvRlHeB8dUYA";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());
import express from "express";
const bot = new Telegraf(TOKEN);

bot.start((ctx) =>
  ctx.reply("Welcome! Use /book to make a booking.")
);
bot.command("book", (ctx) => {
  ctx.reply(
    "Please enter your booking details in the following format:\n\nName, Date, Time"
  );
});

bot.on("text", (ctx) => {
  // const chatId = ctx.chat.id;
  // ctx.reply(`This chat's ID is: ${chatId}`);
  const details = ctx.message.text.split(",").map((item) => item.trim());
  if (details.length === 3) {
    const [name, date, time] = details;
    ctx.reply(`Booking Details:\nName: ${name}\nDate: ${date}\nTime: ${time}`);
  } else {
    ctx.reply(
      "Invalid format. Please enter your booking details in the following format:\n\nName, Date, Time"
    );
  }
});

app.post("/sendBooking", (req, res) => {
  const { chatId, name, date, time } = req.body;
  bot.telegram
    .sendMessage(
      chatId,
      `Booking Details:\nName: ${name}\nDate: ${date}\nTime: ${time}`
    )
    .then((response) => res.status(200).json({ success: true, response }))
    .catch((error) =>
      res.status(500).json({ success: false, error: error.message })
    );
});

bot.launch();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
