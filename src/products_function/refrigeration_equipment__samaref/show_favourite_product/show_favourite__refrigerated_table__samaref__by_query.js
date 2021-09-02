const mongoose = require('mongoose')
const {refrigerated_table_samaref} = require('../../../models/refrigeration_equipment__samaref/index')
const send_html = require('../../../functions/function__send_html')
require('../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__refrigerated_table__samaref(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            refrigerated_table_samaref.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((rtsm, i) => {
                        return `${rtsm.form} ${rtsm.manufacturer} ${rtsm.name}  
Деталі: /rtsm${rtsm.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__refrigerated_table__samaref
