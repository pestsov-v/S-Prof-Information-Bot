const bot = require('../init')
const keyboard = require('../keyboards/keyboards') 

function send_html(chat_id, html, kbName = null) {
    const options = { parse_mode: 'HTML'}

    if (kbName) {
        options['reply_markup'] = {
            keyboard: keyboard[kbName]
        }
    }

    bot.sendMessage(chat_id, html, options)
}

module.exports = send_html