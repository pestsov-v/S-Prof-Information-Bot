const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {food_combine__robot_coupe} = require('../../../models/electromechanical_equipment__robot_coupe/index')

function send_food_combine__robot_coupe__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    food_combine__robot_coupe.find(query).then(food_combine__robot_coupe => {
        const html = food_combine__robot_coupe.map((fce, i) => {
            return `<strong>Назва: </strong> ${fce.name} 
<strong>Деталі: </strong> /fce${fce.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_food_combine__robot_coupe__by_query










