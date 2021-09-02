const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {cooter__robot_coupe} = require('../../../models/electromechanical_equipment__robot_coupe/index')

function send_cooter__robot__coupe__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    cooter__robot_coupe.find(query).then(cooter__robot_coupe => {
        const html = cooter__robot_coupe.map((ctr, i) => {
            return `<strong>Назва: </strong> ${ctr.name}
<strong>Деталі: </strong> /ctr${ctr.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_cooter__robot__coupe__by_query










