const stickers = require('../../../helpers/stickers')
const {shock_freezer__samaref} = require('../../../models/refrigeration_equipment__samaref/index')
const send_html = require('../../../functions/function__send_html')
const bot = require('../../../init')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')

function send_shock_freezer__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    shock_freezer__samaref.find(query).then(shock_freezer__samaref => {
        const html = shock_freezer__samaref.map((sf, i) => {
            return `Назва: <strong>${sf.name}</strong>
Cерія: <strong>${sf.series}</strong>
Деталі: <strong>/sf${sf.uuid}</strong>
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_shock_freezer__by_query