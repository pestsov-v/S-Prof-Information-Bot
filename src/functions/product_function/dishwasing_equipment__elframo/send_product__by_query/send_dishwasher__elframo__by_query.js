const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {dishwasher__elframo} = require('../../../../models/dishwashing_equipment__elframo/index')

function send_dishwasher__elframo(chat_id, query) {
    dishwasher__elframo.find(query).then(dishwasher__elframo => {
        bot.sendSticker(chat_id, stickers.hot_cherry__presents)
        bot.sendMessage(chat_id, text_send_product__query)
        const html = dishwasher__elframo.map((edsw, i) => {
            return `<strong>Серія: </strong> ${edsw.series}
<strong>Назва моделі: </strong> ${edsw.name} 
<strong>Деталі: </strong> /edsw${edsw.uuid}\n`}).join('\n')

    send_html(chat_id, html, 'products')
    })
}

module.exports = send_dishwasher__elframo