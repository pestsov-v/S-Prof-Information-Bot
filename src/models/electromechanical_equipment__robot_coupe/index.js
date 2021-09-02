const mongoose = require('mongoose')

require('./blixter_robot_coupe__model')
const blixter__robot_coupe = mongoose.model('blixter__robot_coupe')
require('./cooter_robot_coupe__model')
const cooter__robot_coupe = mongoose.model('cooter__robot_coupe')
require('./food_combine_robot_coupe__model')
const food_combine__robot_coupe = mongoose.model('food_combine__robot_coupe')
require('./mixer_robot_coupe__model')
const mixer__robot_coupe = mongoose.model('mixer__robot_coupe')
require('./vegetable_cutter_robot_coupe__model')
const vegetable_cutter__robot_coupe = mongoose.model('vegetable_cutter__robot_coupe')
require('./robot_cook_robot_coupe__model')
const robot_cook__robot_coupe = mongoose.model('robot_cook__robot_coupe')

module.exports = {
    blixter__robot_coupe,
    cooter__robot_coupe,
    food_combine__robot_coupe,
    mixer__robot_coupe,
    vegetable_cutter__robot_coupe,
    robot_cook__robot_coupe
}