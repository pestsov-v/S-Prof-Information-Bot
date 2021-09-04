const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {bain_marie__rm_gastro} = require('../../../../models/heating_equipment__rm_gastro/index')

function send_bain_marie__rm_gastro(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    bain_marie__rm_gastro.find(query).then(bain_marie__rm_gastro => {
        const html = bain_marie__rm_gastro.map((bmr, i) => {
            return `<strong>Назва: </strong> ${bmr.name} 
<strong>Деталі: </strong> /bmr${bmr.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_bain_marie__rm_gastro
