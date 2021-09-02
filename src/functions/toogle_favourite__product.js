const bot = require('../init')
const mongoose = require('mongoose')
require('../models/user.model')
const User = mongoose.model('users')

function toogle_favourite_product(user_id, queryId, {productUuid, isFav}) {

    User.findOne({telegram_id: user_id})
    .then(user => {
        if (user) {
            if (isFav) {
                user.products = user.products.filter(pUuid => pUuid !== productUuid)
            } else {
                user.products.push(productUuid)
            }
            userPromise = user
        } else {
            userPromise = new User({
                telegram_id: user_id,
                products: [productUuid]
            })
        }

        const answerText = isFav ? 'Видалено' : 'Додано'
        userPromise.save().then(_ => {
            bot.answerCallbackQuery(queryId, {
                callback_query_id: queryId,
                text: answerText
            })
        }).catch(e => console.log(e))
    }).catch(e => console.log(e))
}

module.exports = toogle_favourite_product