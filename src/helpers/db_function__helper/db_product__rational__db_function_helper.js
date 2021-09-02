const db_combi_streamer__rational = require('./db/db_product/db_heating_equipment/db_heating__rational/db_combi_streamer__rational.json')
const db_multi_pen__rational = require('./db/db_product/db_heating_equipment/db_heating__rational/db_multi_pen__rational.json')
    
db_combi_streamer__rational.db_combi_streamers__rational.forEach(com_str_rat => new combi_streamer__rational(com_str_rat).save().catch(e => console.log(e)))
db_multi_pen__rational.db_multi_pens__rational.forEach(multi_pen_rat => new multi_pen__rational(multi_pen_rat).save().catch(e => console.log(e)))