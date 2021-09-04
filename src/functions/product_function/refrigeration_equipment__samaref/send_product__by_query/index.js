const send_refrigerated_table = require('./send_refrigerated_table__by_query')
const send_refrigeratior_cabinet = require('./send_refrigeratior_cabinet__by_query')
const send_shock_freezer = require('./send_shock_freezer__by_query')

module.exports = {
    send_refrigerated_table,
    send_refrigeratior_cabinet,
    send_shock_freezer
}