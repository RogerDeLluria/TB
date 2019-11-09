const Telegraf = require('telegraf')
const app = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);


exports.handler = function(event, context, callback) {
    app.hears('hi', ctx => ctx.reply('Hey there!'));
    const tmp = JSON.parse(event.body); // get data passed to us
    app.handleUpdate(tmp); // make Telegraf process that data
    return callback(null, { // return something for webhook, so it doesn't try to send same stuff again
      statusCode: 200,
      body: process.env.TELEGRAM_BOT_TOKEN,
    });
}
