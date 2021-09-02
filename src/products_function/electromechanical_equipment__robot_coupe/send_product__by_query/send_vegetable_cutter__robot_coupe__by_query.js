const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {vegetable_cutter__robot_coupe} = require('../../../models/electromechanical_equipment__robot_coupe/index')

function send_vegetable_cutter__robot_coupe__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    vegetable_cutter__robot_coupe.find(query).then(vegetable_cutter__robot_coupe => {
        const html = vegetable_cutter__robot_coupe.map((vcr, i) => {
            return `<strong>Назва: </strong> ${vcr.name} 
<strong>Деталі: </strong> /vcr${vcr.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_vegetable_cutter__robot_coupe__by_query










