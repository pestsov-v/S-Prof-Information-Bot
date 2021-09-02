process.env["NTBA_FIX_319"] = 1
process.env["NTBA_FIX_350"] = 1

const mongoose = require('mongoose')
const TelegramBot = require("node-telegram-bot-api")
const config = require('./config')

const bot = new TelegramBot(config.TOKEN, {
    polling: true
})

const connect = mongoose.connect(config.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

module.exports = bot, connect