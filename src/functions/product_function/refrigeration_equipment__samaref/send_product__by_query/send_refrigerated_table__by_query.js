const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {refrigerated_table_samaref} = require('../../../../models/refrigeration_equipment__samaref/index')

function send_refrigerated_table(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    refrigerated_table_samaref.find(query).then(refrigerated_table_samaref => {
        bot.sendMessage(chat_id, text_send_product__query)
        const html = refrigerated_table_samaref.map((rtsm, i) => {
            return `Назва: <strong>${rtsm.name}</strong>
Деталі: <strong>/rtsm${rtsm.uuid}</strong>
\n`}).join('\n')

    send_html(chat_id, html, 'products')
    })
}

module.exports = send_refrigerated_table