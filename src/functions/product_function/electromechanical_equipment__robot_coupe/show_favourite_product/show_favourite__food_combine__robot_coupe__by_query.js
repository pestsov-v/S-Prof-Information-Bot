const send_html = require('../../../function__send_html')

const mongoose = require('mongoose')
const {food_combine__robot_coupe} = require('../../../../models/electromechanical_equipment__robot_coupe/index')
require('../../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__food_combine__robot_coupe(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            food_combine__robot_coupe.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((fce, i) => {
                        return `${fce.form} ${fce.manufacturer} ${fce.name}  
Деталі: /fce${fce.uuid}`
                    }).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__food_combine__robot_coupe
