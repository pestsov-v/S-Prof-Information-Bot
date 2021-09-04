const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {mixer__robot_coupe} = require('../../../../models/electromechanical_equipment__robot_coupe/index')

function send_mixer__robot_coupe__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    mixer__robot_coupe.find(query).then(mixer__robot_coupe => {
        const html = mixer__robot_coupe.map((mxr, i) => {
            return `<strong>Назва: </strong>${mxr.name} 
<strong>Деталі: </strong> /mxr${mxr.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_mixer__robot_coupe__by_query










