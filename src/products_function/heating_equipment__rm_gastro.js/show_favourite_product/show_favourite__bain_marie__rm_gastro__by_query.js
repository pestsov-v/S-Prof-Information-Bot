const mongoose = require('mongoose')
const {bain_marie__rm_gastro} = require('../../../models/heating_equipment__rm_gastro/index')
const send_html = require('../../../functions/function__send_html')
require('../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__bain_marie__rm_gastro(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            bain_marie__rm_gastro.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((bmr, i) => {
                        return `${bmr.form} ${bmr.manufacturer} ${bmr.name}  
Деталі: /bmr${bmr.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__bain_marie__rm_gastro
