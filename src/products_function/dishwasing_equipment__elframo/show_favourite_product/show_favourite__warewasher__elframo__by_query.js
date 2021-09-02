const mongoose = require('mongoose')
const {warewasher__elframo} = require('../../../models/dishwashing_equipment__elframo/index')
const send_html = require('../../../functions/function__send_html')
require('../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__warewasher_elframo(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            warewasher__elframo.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((eptm, i) => {
                        return `${eptm.form} ${eptm.manufacturer} ${eptm.name}  
Деталі: /eptm${eptm.uuid}`
                    }).join('\n')
                    send_html(chat_id, html, 'home')
                }
            })
        } 
    })
}

module.exports = show_favourite__warewasher_elframo
