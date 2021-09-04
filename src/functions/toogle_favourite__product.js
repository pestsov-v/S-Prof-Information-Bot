const bot = require('../init')
const mongoose = require('mongoose')
require('../models/user.model')
const User = mongoose.model('users')

function toogle_favourite_product(user_id, queryId, {product_uuid, is_fav}) {

    User.findOne({telegram_id: user_id})
    .then(user => {
        if (user) {
            if (is_fav) {
                user.products = user.products.filter(pUuid => pUuid !== product_uuid)
            } else {
                user.products.push(product_uuid)
            }
            userPromise = user
        } else {
            userPromise = new User({
                telegram_id: user_id,
                products: [product_uuid]
            })
        }

        const answerText = is_fav ? 'Видалено' : 'Додано'
        userPromise.save().then(_ => {
            bot.answerCallbackQuery(queryId, {
                callback_query_id: queryId,
                text: answerText
            })
        }).catch(e => console.log(e))
    }).catch(e => console.log(e))
}

module.exports = toogle_favourite_product