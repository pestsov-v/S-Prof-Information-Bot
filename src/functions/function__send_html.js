const bot = require('../init')
const keyboard = require('../keyboards/keyboards') 

function send_html(chat_id, html, kb_name = null) {
    const options = { parse_mode: 'HTML'}

    if (kb_name) {
        options['reply_markup'] = {
            keyboard: keyboard[kb_name]
        }
    }

    bot.sendMessage(chat_id, html, options)
}

module.exports = send_html