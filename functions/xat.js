const Telegraf = require('telegraf')

exports.handler = function(event, context, callback) {
    const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN)
    const tmp = JSON.parse(event.body);
    bot.start((ctx) => ctx.reply('Welcome'))
    callback(null, {
        statusCode: 200,
        body: "HelloBOT"
    })
}