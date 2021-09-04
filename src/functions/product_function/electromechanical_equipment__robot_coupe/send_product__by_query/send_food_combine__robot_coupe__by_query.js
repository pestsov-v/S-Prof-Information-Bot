const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {food_combine__robot_coupe} = require('../../../../models/electromechanical_equipment__robot_coupe/index')

function send_food_combine__robot_coupe__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    food_combine__robot_coupe.find(query).then(food_combine__robot_coupe => {
        const html = food_combine__robot_coupe.map((fce, i) => {
            return `<strong>Назва: </strong> ${fce.name} 
<strong>Деталі: </strong> /fce${fce.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_food_combine__robot_coupe__by_query










