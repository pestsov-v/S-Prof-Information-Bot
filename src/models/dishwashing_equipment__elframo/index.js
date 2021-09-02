const mongoose = require('mongoose')

require('./dishwasher_elframo__model')
const dishwasher__elframo = mongoose.model('dishwasher__elframo')
require('./glasswasher_elframo__model')
const glasswasher__elframo = mongoose.model('glasswasher__elframo')
require('./warewashers_elframo__model')
const warewasher__elframo = mongoose.model('warewasher__elframo')

module.exports = {
    dishwasher__elframo,
    glasswasher__elframo,
    warewasher__elframo
}