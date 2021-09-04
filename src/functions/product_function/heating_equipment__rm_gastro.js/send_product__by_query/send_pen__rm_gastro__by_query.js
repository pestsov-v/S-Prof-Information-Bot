const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {pen__rm_gastro} = require('../../../../models/heating_equipment__rm_gastro/index')

function send_pen__rm_gastro(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    pen__rm_gastro.find(query).then(pen__rm_gastro => {
        const html = pen__rm_gastro.map((pen, i) => {
            return `<strong>Назва: </strong> ${pen.name} 
<strong>Деталі: </strong> /pen${pen.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_pen__rm_gastro