const mongoose = require('mongoose')
const {combi_streamer__rational} = require('../../models/heating_equipment__rational/index')
const send_html = require('../../functions/function__send_html')
require('../../models/user.model')
const User = mongoose.model('users')

function show_favourite__combi_streamer__rational(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            combi_streamer__rational.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((p, i) => {
                        return `${p.form} ${p.manufacturer} ${p.name}  
Деталі: /p${p.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__combi_streamer__rational
