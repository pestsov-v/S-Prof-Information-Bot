const mongoose = require('mongoose')

require('./refrigerated_table_samaref__model')
const refrigerated_table_samaref = mongoose.model('refrigerated_table_samaref')
require('./refrigeratior_cabinet_samaref__model')
const refrigeratior_cabinet__samaref = mongoose.model('refrigeratior_cabinet__samaref')
require('./shock_freezer__samaref__model')
const shock_freezer__samaref = mongoose.model('shock_freezer__samaref')

module.exports = {
    refrigerated_table_samaref,
    refrigeratior_cabinet__samaref,
    shock_freezer__samaref
}