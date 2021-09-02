const stickers = require('../../../helpers/stickers')
const {refrigeratior_cabinet__samaref} = require('../../../models/refrigeration_equipment__samaref/index')
const send_html = require('../../../functions/function__send_html')
const bot = require('../../../init')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')

function send_refrigeratior_cabinet__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    refrigeratior_cabinet__samaref.find(query).then(refrigeratior_cabinet__samaref => {
        const html = refrigeratior_cabinet__samaref.map((rf, i) => {
            return `Назва: <strong>${rf.name} </strong>
Cерія: <strong>${rf.series}</strong>
Деталі: <strong>/rf${rf.uuid}</strong>
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_refrigeratior_cabinet__by_query