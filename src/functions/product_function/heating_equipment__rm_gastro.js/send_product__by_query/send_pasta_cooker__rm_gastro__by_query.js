const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {pasta_cooker__rm_gastro} = require('../../../../models/heating_equipment__rm_gastro/index')

function send_pasta_cooker__rm_gastro(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    pasta_cooker__rm_gastro.find(query).then(pasta_cooker__rm_gastro => {
        const html = pasta_cooker__rm_gastro.map((pcs, i) => {
            return `<strong>Назва: </strong> ${pcs.name} 
<strong>Деталі: </strong> /pcs${pcs.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}


module.exports = send_pasta_cooker__rm_gastro