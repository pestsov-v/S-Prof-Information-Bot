const db_project__college = require('./db/db_projects/db_projects__college.json')
const db_project__exhibition = require('./db/db_projects/db_projects__exhibition.json')
const db_project__finishing = require('./db/db_projects/db_projects__finishing.json')
const db_project__food_kitchen = require('./db/db_projects/db_projects__food_kitchen.json')
const db_project__kendergarden = require('./db/db_projects/db_projects__kindergarden.json')
const db_project__lyceum = require('./db/db_projects/db_projects__lyceum.json')
const db_project__restaurant = require('./db/db_projects/db_projects__restaurant.json')
const db_project__school_complex = require('./db/db_projects/db_projects__school_complex.json')
const db_project__school = require('./db/db_projects/db_projects__school.json')

db_project__college.projects__college.forEach(p => new Project(p).save().catch(e => console.log(e)))
db_project__exhibition.projects__exhibition.forEach(p => new Project(p).save().catch(e => console.log(e)))
db_project__finishing.projects__finishing.forEach(p => new Project(p).save().catch(e => console.log(e)))
db_project__food_kitchen.projects__food_kitchen.forEach(p => new Project(p).save().catch(e => console.log(e)))
db_project__kendergarden.projects__kindergarden.forEach(p => new Project(p).save().catch(e => console.log(e)))
db_project__lyceum.projects__lyceum.forEach(p => new Project(p).save().catch(e => console.log(e)))
db_project__restaurant.projects__restaurant.forEach(p => new Project(p).save().catch(e => console.log(e)))
db_project__school_complex.projects__school_complex.forEach(p => new Project(p).save().catch(e => console.log(e)))
db_project__school.projects__school.forEach(p => new Project(p).save().catch(e => console.log(e)))