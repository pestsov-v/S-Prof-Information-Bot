const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {food_boiler__rm_gastro} = require('../../../../models/heating_equipment__rm_gastro/index')

function send_food_boiler__rm_gastro(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    food_boiler__rm_gastro.find(query).then(food_boiler__rm_gastro => {
        const html = food_boiler__rm_gastro.map((fbs, i) => {
            return `<strong>Назва: </strong> ${fbs.name} 
<strong>Деталі: </strong> /fbs${fbs.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_food_boiler__rm_gastro