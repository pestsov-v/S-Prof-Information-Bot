const mongoose = require('mongoose')
const {food_boiler__rm_gastro} = require('../../../models/heating_equipment__rm_gastro/index')
const send_html = require('../../../functions/function__send_html')
require('../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__food_boiler__rm_gastro(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            food_boiler__rm_gastro.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((fbs, i) => {
                        return `${fbs.form} ${fbs.manufacturer} ${fbs.name}  
Деталі: /fbs${fbs.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__food_boiler__rm_gastro
