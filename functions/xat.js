let TOKEN = process.env.TELEGRAM_BOT_TOKEN

exports.handler = function(event, context, callback) {
    console.log(TOKEN);
    callback(null, {
        statusCode: 200,
        body: "HelloBOT"
    })
}