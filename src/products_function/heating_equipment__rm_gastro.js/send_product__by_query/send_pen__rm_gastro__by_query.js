const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {pen__rm_gastro} = require('../../../models/heating_equipment__rm_gastro/index')

function send_pen__rm_gastro__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    pen__rm_gastro.find(query).then(pen__rm_gastro => {
        const html = pen__rm_gastro.map((pen, i) => {
            return `<strong>Назва: </strong> ${pen.name} 
<strong>Деталі: </strong> /pen${pen.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_pen__rm_gastro__by_query