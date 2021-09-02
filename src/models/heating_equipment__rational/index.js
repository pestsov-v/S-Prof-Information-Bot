const mongoose = require('mongoose')

require('./combi_streamer_rational__model')
const combi_streamer__rational = mongoose.model('combi_streamer__rational')
require('./multi_pen_rational__model')
const multi_pen__rational = mongoose.model('multi_pen__rational')

module.exports = {
    combi_streamer__rational,
    multi_pen__rational
}