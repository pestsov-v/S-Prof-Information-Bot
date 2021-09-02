const db_dishwasher__elframo = require('./db/db_product/db_dishwashing_equipment/db_dishwashing_equipemnt__elframo/db_dishwasher__elframo.json')
const db_glasswasher__elframo = require('./db/db_product/db_dishwashing_equipment/db_dishwashing_equipemnt__elframo/db_glasswasher__elframo.json')
const db_warewasher__elframo = require('./db/db_product/db_dishwashing_equipment/db_dishwashing_equipemnt__elframo/db_warewashers__elframo.json')

db_dishwasher__elframo.db_dishwashers__elframo.forEach(edsw => new dishwasher__elframo(edsw).save().catch(e => console.log(e)))
db_glasswasher__elframo.db_glasswashers__elframo.forEach(egw => new glasswasher__elframo(egw).save().catch(e => console.log(e)))
db_warewasher__elframo.db_warewashers__elframo.forEach(eptm => new warewasher__elframo(eptm).save().catch(e => console.log(e)))