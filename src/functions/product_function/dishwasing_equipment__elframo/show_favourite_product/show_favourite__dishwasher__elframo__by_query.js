const send_html = require('../../../../functions/function__send_html')

const mongoose = require('mongoose')
const {dishwasher__elframo} = require('../../../../models/dishwashing_equipment__elframo/index')
require('../../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__dishwasher_elframo(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            dishwasher__elframo.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((edsw, i) => {
                        return `${edsw.form} ${edsw.manufacturer} ${edsw.name}  
Деталі: /edsw${edsw.uuid}`
                    }).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__dishwasher_elframo
