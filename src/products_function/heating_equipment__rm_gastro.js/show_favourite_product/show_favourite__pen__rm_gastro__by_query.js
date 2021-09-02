const mongoose = require('mongoose')
const {pen__rm_gastro} = require('../../../models/heating_equipment__rm_gastro/index')
const send_html = require('../../../functions/function__send_html')
require('../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__pen__rm_gastro(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            pen__rm_gastro.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((pen, i) => {
                        return `${pen.form} ${pen.manufacturer} ${pen.name}  
Деталі: /pen${pen.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__pen__rm_gastro
