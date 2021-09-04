const send_html = require('../../function__send_html')

const {combi_streamer__rational} = require('../../../models/heating_equipment__rational/index')

function send_combi_streamer(chat_id, query) {
    combi_streamer__rational.find(query).then(combi_streamers__rational => {
        const html = combi_streamers__rational.map((p, i) => {
            return `<strong>Серія: </strong> ${p.series}
<strong>Назва товара: </strong> ${p.name}
<strong>Деталі: </strong> /p${p.uuid}
`}).join('\n')

    send_html(chat_id, html, 'products')

    })
}

module.exports = send_combi_streamer