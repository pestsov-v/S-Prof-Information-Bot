const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {grill_rm_gastro} = require('../../../models/heating_equipment__rm_gastro/index')

function send_grill__rm_gastro__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    grill_rm_gastro.find(query).then(grill_rm_gastro => {
        const html = grill_rm_gastro.map((gr, i) => {
            return `<strong>Назва: </strong> ${gr.name} 
<strong>Деталі: </strong> /gr${gr.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_grill__rm_gastro__by_query