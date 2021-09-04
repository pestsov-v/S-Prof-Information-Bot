const db_blixer__robot_coupe = require('./db/db_product/db_electromechanical_equipment/db_electromechanical__robot_coupe/db_blixer__robot_coupe.json')
const db_cooter__robot_coupe = require('./db/db_product/db_electromechanical_equipment/db_electromechanical__robot_coupe/db_cooter__robot_coupe.json')
const db_food_combine__robot_coupe = require('./db/db_product/db_electromechanical_equipment/db_electromechanical__robot_coupe/db_food_combine__robot_coupe.json')
const db_mixer__robot_coupe = require('./db/db_product/db_electromechanical_equipment/db_electromechanical__robot_coupe/db_mixer__robot_coupe.json')
const db_robot_cook__robot_coupe = require('./db/db_product/db_electromechanical_equipment/db_electromechanical__robot_coupe/db_robot_cook__robot_coupe.json')
const db_vegetable_cutter__robot_coupe = require('./db/db_product/db_electromechanical_equipment/db_electromechanical__robot_coupe/db_vegetable_cutter__robot_coupe.json')

db_blixer__robot_coupe.db_blixers__robot_coupe.forEach(brc => new blixter__robot_coupe(brc).save().catch(e => console.log(e)))
db_cooter__robot_coupe.db_cooters__robot_coupe.forEach(crc => new cooter__robot_coupe(crc).save().catch(e => console.log(e)))
db_food_combine__robot_coupe.db_food_combines__robot_coupe.forEach(fcrc => new food_combine__robot_coupe(fcrc).save().catch(e => console.log(e)))
db_mixer__robot_coupe.db_mixers__robot_coupe.forEach(mrc => new mixer__robot_coupe(mrc).save().catch(e => console.log(e)))
db_robot_cook__robot_coupe.db_robot_cooks__robot_coupe.forEach(rcrc => new robot_cook__robot_coupe(rcrc).save().catch(e => console.log(e)))
db_vegetable_cutter__robot_coupe.db_vegetable_cutters__robot_coupe.forEach(vcrc => new vegetable_cutter__robot_coupe(vcrc).save().catch(e => console.log(e)))


