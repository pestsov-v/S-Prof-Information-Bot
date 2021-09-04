const bot = require('../../../../init')
const stickers = require('../../../../helpers/stickers')
const send_html = require('../../../function__send_html')
const text_send_product__query = require('../../../../message_text/text_send_product__query')

const {shock_freezer__samaref} = require('../../../../models/refrigeration_equipment__samaref/index')

function send_shock_freezer(chat_id, query) {
    bot.sendSticker(chat_id, stickers.hot_cherry__presents)
    bot.sendMessage(chat_id, text_send_product__query)
    shock_freezer__samaref.find(query).then(shock_freezer__samaref => {
        const html = shock_freezer__samaref.map((sf, i) => {
            return `Назва: <strong>${sf.name}</strong>
Cерія: <strong>${sf.series}</strong>
Деталі: <strong>/sf${sf.uuid}</strong>
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_shock_freezer