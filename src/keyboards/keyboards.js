const kb = require('./keyboard-buttons')

module.exports = {
    home: [
        [kb.home.projects, kb.home.products],
        [kb.home.statistic, kb.home.analytics],
        [kb.home.download, kb.home.actualy]
    ],
    projects: [
        [kb.projects.kindergarden, kb.projects.school],
        [kb.projects.school_complex, kb.projects.lyceum],
        [kb.projects.college, kb.projects.finishing],
        [kb.projects.food_kitchen, kb.projects.exhibition],
        [kb.back]
    ],
    manufacturer: [
        [kb.manufacturer.elframo, kb.manufacturer.samaref],
        [kb.manufacturer.rational, kb.manufacturer.robotCoupe],
        [kb.manufacturer.rmGastro],
        [kb.back]
    ],
    rational: [
        [kb.rational.combiStemear],
        [kb.rational.muiltyPen],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    elframo: [
        [kb.elframo.potWashingMachine],
        [kb.elframo.dishwasher],
        [kb.elframo.glassWasher],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    rmGastro: [
        [kb.rmGastro.grill, kb.rmGastro.deepFryer],
        [kb.rmGastro.pastaCooker, kb.rmGastro.pen],
        [kb.rmGastro.bainMarie, kb.rmGastro.plate, kb.rmGastro.foodBoiler],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    robotCoupe: [
        [kb.robotCoupe.robotCook, kb.robotCoupe.blixer],
        [kb.robotCoupe.foodCombine, kb.robotCoupe.mixer],
        [kb.robotCoupe.vegetableCutter, kb.robotCoupe.cooter],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    samaref: [
        [kb.samaref.shockFreezer],
        [kb.samaref.refrigeratiorCabinet],
        [kb.samaref.refrigeratedTable],
        [kb.backToMainManufacturer],
        [kb.back]
    ]
}

