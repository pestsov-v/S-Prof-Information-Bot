const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {robot_cook__robot_coupe} = require('../../../../models/electromechanical_equipment__robot_coupe/index')

function send_robot_cook__robot_coupe__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    robot_cook__robot_coupe.find(query).then(robot_cook__robot_coupe => {
        const html = robot_cook__robot_coupe.map((rck, i) => {
            return `<strong>Назва: </strong> ${rck.name} 
<strong>Деталі: </strong> /rck${rck.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_robot_cook__robot_coupe__by_query










