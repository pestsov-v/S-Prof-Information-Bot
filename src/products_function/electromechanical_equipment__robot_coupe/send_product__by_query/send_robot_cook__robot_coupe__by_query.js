const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {robot_cook__robot_coupe} = require('../../../models/electromechanical_equipment__robot_coupe/index')

function send_robot_cook__robot_coupe__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    robot_cook__robot_coupe.find(query).then(robot_cook__robot_coupe => {
        const html = robot_cook__robot_coupe.map((rck, i) => {
            return `<strong>Назва: </strong> ${rck.name} 
<strong>Деталі: </strong> /rck${rck.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_robot_cook__robot_coupe__by_query










