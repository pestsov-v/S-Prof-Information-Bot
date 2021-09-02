const db_refrigeration_table__samaref = require('./db/db_product/db_refrigerataion_equipment/db_refrigeration_samaref/db_refrigeration_table__samaref.json')
const db_refrigeration_cabinet__samaref = require('./db/db_product/db_refrigerataion_equipment/db_refrigeration_samaref/db_refrigeration_cabinet__samaref.json')
const db_shock_freezer__samaref = require('./db/db_product/db_refrigerataion_equipment/db_refrigeration_samaref/db_shock_freezer__samaref.json')

db_refrigeration_table__samaref.db_refrigeration_tables__samaref.forEach(rtsm => new refrigerated_table_samaref(rtsm).save().catch(e => console.log(e)))
db_refrigeration_cabinet__samaref.db_refrigeration_cabinets__samaref.forEach(rfc => new refrigeratior_cabinet__samaref(rfc).save().catch(e => console.log(e)))
db_shock_freezer__samaref.db_shok_freezer__samaref.forEach(sf => new shock_freezer__samaref(sf).save().catch(e => console.log(e)))
