const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {refrigeratior_cabinet__samaref} = require('../../../../models/refrigeration_equipment__samaref/index')

function send_refrigeratior_cabinet(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    refrigeratior_cabinet__samaref.find(query).then(refrigeratior_cabinet__samaref => {
        const html = refrigeratior_cabinet__samaref.map((rf, i) => {
            return `Назва: <strong>${rf.name} </strong>
Cерія: <strong>${rf.series}</strong>
Деталі: <strong>/rf${rf.uuid}</strong>
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_refrigeratior_cabinet