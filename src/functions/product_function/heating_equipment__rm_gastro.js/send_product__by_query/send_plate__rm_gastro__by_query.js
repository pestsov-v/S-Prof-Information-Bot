const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {plate__rm_gastro} = require('../../../../models/heating_equipment__rm_gastro/index')

function send_plate__rm_gastro(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    plate__rm_gastro.find(query).then(plate__rm_gastro => {
        const html = plate__rm_gastro.map((plt, i) => {
            return `<strong>Назва: </strong> ${plt.name} 
<strong>Деталі: </strong> /plt${plt.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_plate__rm_gastro