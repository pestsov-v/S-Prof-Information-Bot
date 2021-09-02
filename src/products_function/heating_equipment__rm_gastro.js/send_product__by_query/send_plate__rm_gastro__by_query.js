const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {plate__rm_gastro} = require('../../../models/heating_equipment__rm_gastro/index')

function send_plate__rm_gastro__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    plate__rm_gastro.find(query).then(plate__rm_gastro => {
        const html = plate__rm_gastro.map((plt, i) => {
            return `<strong>Назва: </strong> ${plt.name} 
<strong>Деталі: </strong> /plt${plt.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_plate__rm_gastro__by_query