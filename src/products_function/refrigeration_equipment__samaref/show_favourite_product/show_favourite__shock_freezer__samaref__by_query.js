const mongoose = require('mongoose')
const {shock_freezer__samaref} = require('../../../models/refrigeration_equipment__samaref/index')
const send_html = require('../../../functions/function__send_html')
require('../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__shock_freezer__samaref(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            shock_freezer__samaref.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((sf, i) => {
                        return `${sf.form} ${sf.manufacturer} ${sf.name}  
Деталі: /sf${sf.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__shock_freezer__samaref
