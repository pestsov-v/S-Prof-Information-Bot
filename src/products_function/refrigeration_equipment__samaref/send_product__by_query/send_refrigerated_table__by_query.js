const stickers = require('../../../helpers/stickers')
const send_html = require('../../../functions/function__send_html')
const bot = require('../../../init')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {refrigerated_table_samaref} = require('../../../models/refrigeration_equipment__samaref/index')

function send_refrigerated_table__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    refrigerated_table_samaref.find(query).then(refrigerated_table_samaref => {
        bot.sendMessage(chat_id, text_sendProduct__query)
        const html = refrigerated_table_samaref.map((rtsm, i) => {
            return `Назва: <strong>${rtsm.name}</strong>
Деталі: <strong>/rtsm${rtsm.uuid}</strong>
\n`}).join('\n')

    send_html(chat_id, html, 'products')
    })
}

module.exports = send_refrigerated_table__by_query