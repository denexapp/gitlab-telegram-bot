const Koa = require('koa');
const TelegramBot = require('node-telegram-bot-api');
const bodyParser = require('koa-bodyparser');

const { gitlabToken, telegramToken, chatId, PORT } = process.env;

const bot = new TelegramBot(telegramToken, { polling: true });

bot.on('message', msg => {
  bot.sendMessage(msg.chat.id, 'https://vk.cc/a0QFhW');
});

const app = new Koa();
app.use(bodyParser({ enableTypes: ['json'] }));

app.use(async ctx => {
  ctx.body = '';

  if (ctx.headers['x-gitlab-token'] === gitlabToken) {
    const { body } = ctx.request;
    text = JSON.stringify(body);
    await bot.sendMessage(chatId, text);
  }
});

app.listen(PORT);
