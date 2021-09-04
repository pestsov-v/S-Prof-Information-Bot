const send_html = require('../../function__send_html')

const mongoose = require('mongoose')
const {multi_pen__rational} = require('../../../models/heating_equipment__rational/index')
require('../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__multi_pen__rational(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            multi_pen__rational.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((mp, i) => {
                        return `${mp.form} ${mp.manufacturer} ${mp.name}  
Деталі: /p${mp.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                }
            })
        } 
    })
}

module.exports = show_favourite__multi_pen__rational
