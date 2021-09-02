const mongoose = require('mongoose')

require('./grill_rm_gastro__model')
const grill_rm_gastro = mongoose.model('grill__rm_gastro')
require('./bain_marie_rm_gastro__model')
const bain_marie__rm_gastro = mongoose.model('bain_marie__rm_gastro')
require('./deep_fryer_rm_gastro__model')
const deep_fryer__rm_gastro = mongoose.model('deep_fryer__rm_gastro')
require('./food_boiler_rm_gastro__model')
const food_boiler__rm_gastro = mongoose.model('food_boiler__rm_gastro')
require('./pasta_cooker_rm_gastro__model')
const pasta_cooker__rm_gastro = mongoose.model('pasta_cooker__rm_gastro')
require('./pen_rm_gastro__model')
const pen__rm_gastro = mongoose.model('pen__rm_gastro')
require('./plate_rm_gastro__model')
const plate__rm_gastro = mongoose.model('plate__rm_gastro')

module.exports = {
    grill_rm_gastro,
    bain_marie__rm_gastro,
    deep_fryer__rm_gastro,
    food_boiler__rm_gastro,
    pasta_cooker__rm_gastro,
    pen__rm_gastro,
    plate__rm_gastro
}