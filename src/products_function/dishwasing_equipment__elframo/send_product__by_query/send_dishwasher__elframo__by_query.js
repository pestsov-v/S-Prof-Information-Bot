const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {dishwasher__elframo} = require('../../../models/dishwashing_equipment__elframo/index')

function send_dishwasher__elframo_by_query(chat_id, query) {
    dishwasher__elframo.find(query).then(dishwasher__elframo => {
        console.log(dishwasher__elframo)
        bot.sendSticker(chat_id, stickers.HotCherryPresents)
        bot.sendMessage(chat_id, text_sendProduct__query)
        const html = dishwasher__elframo.map((edsw, i) => {
            return `<strong>Серія: </strong> ${edsw.series}
<strong>Назва моделі: </strong> ${edsw.name} 
<strong>Деталі: </strong> /edsw${edsw.uuid}\n`}).join('\n')

    send_html(chat_id, html, 'products')
    })
}

module.exports = send_dishwasher__elframo_by_query