const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {bain_marie__rm_gastro} = require('../../../models/heating_equipment__rm_gastro/index')

function send_bain_marie__rm_gastro__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    bain_marie__rm_gastro.find(query).then(bain_marie__rm_gastro => {
        const html = bain_marie__rm_gastro.map((bmr, i) => {
            return `<strong>Назва: </strong> ${bmr.name} 
<strong>Деталі: </strong> /bmr${bmr.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_bain_marie__rm_gastro__by_query