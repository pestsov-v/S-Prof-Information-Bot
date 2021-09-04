const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {grill_rm_gastro} = require('../../../../models/heating_equipment__rm_gastro/index')

function send_grill__rm_gastro(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    grill_rm_gastro.find(query).then(grill_rm_gastro => {
        const html = grill_rm_gastro.map((gr, i) => {
            return `<strong>Назва: </strong> ${gr.name} 
<strong>Деталі: </strong> /gr${gr.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_grill__rm_gastro