const mongoose = require('mongoose')
const Schema = mongoose.Schema

const user_schema = new Schema({
    telegram_id: {
        type: Number,
        required: true
    },
    products: {
        type: [String],
        default: []
    }
})

mongoose.model('users', user_schema)