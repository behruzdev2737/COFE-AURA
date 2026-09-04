const { Telegraf, Markup } = require("telegraf");

const token = "8887750641:AAGFsDloUwmsISmKKEhbRRktnMjTNPRjG-c";
const webAppUrl = "https://cofe-aura.vercel.app/";

const bot = new Telegraf(token);

bot.start((ctx) => {
  // Matn ichida Premium Emoji (Custom Emoji) ishlatish
  const welcomeText = `
<tg-emoji emoji-id="5436071292581195950">🔥</tg-emoji> <b>Aura Cofe'ga xush kelibsiz!</b>

<tg-emoji emoji-id="5436266163837351085">☕️</tg-emoji> Eng shirin qahvalar va <tg-emoji emoji-id="5280641391121161373">🍰</tg-emoji> mazzali shirinliklar aynan shu yerda.

Buyurtma berish uchun pastdagi tugmani bosing <tg-emoji emoji-id="5767392598872297368">👇</tg-emoji>
  `;

  ctx.reply(welcomeText, {
    parse_mode: "HTML",
    ...Markup.inlineKeyboard([
      Markup.button.webApp("🌟 Menuni ochish", webAppUrl),
    ]),
  });
});

// O'zingiz xohlagan premium emojining ID sini topish uchun
// Botingizga premium emojini xabar qilib yuboring, u sizga ID sini aytadi:
bot.on("message", (ctx) => {
  if (ctx.message.entities && ctx.message.entities[0].type === "custom_emoji") {
    const emojiId = ctx.message.entities[0].custom_emoji_id;
    ctx.reply("Bu Premium Emojining ID raqami:\n\n`" + emojiId + "`", {
      parse_mode: "Markdown",
    });
  }
});

bot.launch().then(() => {
  console.log("Bot ishga tushdi... Telegramda /start ni bosing.");
});

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
