const mongoose = require('mongoose')
const {refrigeratior_cabinet__samaref} = require('../../../models/refrigeration_equipment__samaref/index')
const send_html = require('../../../functions/function__send_html')
require('../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__refrigeratior_cabinet__samaref(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            refrigeratior_cabinet__samaref.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((rf, i) => {
                        return `${rf.form} ${rf.manufacturer} ${rf.name}  
Деталі: /rf${rf.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__refrigeratior_cabinet__samaref
