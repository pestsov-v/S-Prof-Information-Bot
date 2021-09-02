const stickers = require('../../../helpers/stickers')
const bot = require('../../../init')
const send_html = require('../../../functions/function__send_html')
const text_sendProduct__query = require('../../../messageText/text_sendProduct__query')
const {food_boiler__rm_gastro} = require('../../../models/heating_equipment__rm_gastro/index')

function send_food_boiler__rm_gastro__by_query(chat_id, query) {
    bot.sendSticker(chat_id, stickers.HotCherryPresents)
    bot.sendMessage(chat_id, text_sendProduct__query)
    food_boiler__rm_gastro.find(query).then(food_boiler__rm_gastro => {
        const html = food_boiler__rm_gastro.map((fbs, i) => {
            return `<strong>Назва: </strong> ${fbs.name} 
<strong>Деталі: </strong> /fbs${fbs.uuid}
\n`}).join('\n')

        send_html(chat_id, html, 'products')
    })
}

module.exports = send_food_boiler__rm_gastro__by_query