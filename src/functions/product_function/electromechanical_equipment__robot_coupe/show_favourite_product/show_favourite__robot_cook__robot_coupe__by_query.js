const send_html = require('../../../function__send_html')

const mongoose = require('mongoose')
const {robot_cook__robot_coupe} = require('../../../../models/electromechanical_equipment__robot_coupe/index')
require('../../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__robot_cook__robot_coupe(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            robot_cook__robot_coupe.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((rck, i) => {
                        return `${rck.form} ${rck.manufacturer} ${rck.name}  
Деталі: /rck${rck.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__robot_cook__robot_coupe
