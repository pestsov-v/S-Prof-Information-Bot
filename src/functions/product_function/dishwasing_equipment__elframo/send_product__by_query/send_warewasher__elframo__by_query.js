const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {warewasher__elframo} = require('../../../../models/dishwashing_equipment__elframo/index')

function send_warewasher__elframo_by_query(chat_id, query) {
    warewasher__elframo.find(query).then(warewasher__elframo => {
        bot.sendSticker(chat_id, stickers.hot_cherry__presents)
        bot.sendMessage(chat_id, text_send_product__query)
        const html = warewasher__elframo.map((eptm, i) => {
            return `<strong>Назва: </strong> ${eptm.name} 
<strong>Деталі: </strong> /eptm${eptm.uuid}
\n`}).join('\n')

    send_html(chat_id, html, 'products')
    })
}

module.exports = send_warewasher__elframo_by_query