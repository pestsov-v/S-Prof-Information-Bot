const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {glasswasher__elframo} = require('../../../models/dishwashing_equipment__elframo/index')

function send_glasswasher__elframo_by_query(chat_id, query) {
    glasswasher__elframo.find(query).then(glasswasher__elframo => {
        bot.sendSticker(chat_id, stickers.HotCherryPresents)
        bot.sendMessage(chat_id, text_sendProduct__query)
        const html = glasswasher__elframo.map((egw, i) => {
            return `<strong>Назва: </strong> ${egw.name} 
<strong>Деталі: </strong> /egw${egw.uuid}
\n`}).join('\n')

send_html(chat_id, html, 'products')
    })
}

module.exports = send_glasswasher__elframo_by_query

