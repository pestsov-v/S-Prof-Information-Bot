const send_html = require('../../../function__send_html')

const mongoose = require('mongoose')
const {plate__rm_gastro} = require('../../../../models/heating_equipment__rm_gastro/index')
require('../../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__plate__rm_gastro(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            plate__rm_gastro.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((plt, i) => {
                        return `${plt.form} ${plt.manufacturer} ${plt.name}  
Деталі: /plt${plt.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__plate__rm_gastro
