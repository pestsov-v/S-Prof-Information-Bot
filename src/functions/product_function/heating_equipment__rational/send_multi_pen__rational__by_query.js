const send_html = require('../../function__send_html')

const {multi_pen__rational} = require('../../../models/heating_equipment__rational/index')

function send_multi_pen__rational(chat_id, query) {
    multi_pen__rational.find(query).then(multi_pen__rational => {
        const html = multi_pen__rational.map((mp, i) => {
            return `<strong>Серія: </strong> ${mp.series} 
<strong>Назва товара: </strong> ${mp.name}
<strong>Деталі: </strong> /mp${mp.uuid}
\n`}).join('\n')

send_html(chat_id, html, 'products')

    })
}

module.exports = send_multi_pen__rational