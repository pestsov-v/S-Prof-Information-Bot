const stickers = require('../helpers/stickers')
const bot = require('../init')
const text_project_by_type__query = require('../message_text/text_project_by_type__query')
const mongoose = require('mongoose')
require('../models/project.model')
const Project = mongoose.model('project')

function send_project(chat_id, query) {
    Project.find(query).then(projects => {
        bot.sendSticker(chat_id, stickers.hot_cherry__presents)
        bot.sendMessage(chat_id, text_project_by_type__query)

        const html = projects.map((k, i) => {
            return `<strong>Назва:</strong> ${k.object_name}.
<strong>Локація:</strong> ${k.city}.
<strong>Штамп:</strong> ${k.stamp}.
<strong>Деталі:</strong> /k${k.uuid}. \n`}).join('\n')

        bot.sendMessage(chat_id, html, {
            parse_mode: 'HTML'
        })
    })
}

module.exports = send_project