const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {warewasher__elframo} = require('../../../models/dishwashing_equipment__elframo/index')

function send_warewasher__elframo_by_query(chat_id, query) {
    warewasher__elframo.find(query).then(warewasher__elframo => {
        bot.sendSticker(chat_id, stickers.HotCherryPresents)
        bot.sendMessage(chat_id, text_sendProduct__query)
        const html = warewasher__elframo.map((eptm, i) => {
            return `<strong>Название: </strong> ${eptm.name} 
<strong>Подробнее: </strong> /eptm${eptm.uuid}
\n`}).join('\n')

    send_html(chat_id, html, 'products')
    })
}
module.exports = send_warewasher__elframo_by_query