const kb = require('./keyboard-buttons')

module.exports = {
    home: [
        [kb.home.projects, kb.home.products],
        [kb.home.statistic, kb.home.analytics]
    ],
    projects: [
        [kb.projects.Kyiv],
        [kb.projects.Lviv],
        [kb.projects.Random],
        [kb.projects.Exhibition],
        [kb.back]
    ],
    manufacturer: [
        [kb.manufacturer.angeloPo, kb.manufacturer.bartscher, kb.manufacturer.elframo],
        [kb.manufacturer.rational, kb.manufacturer.rmGastro],
        [kb.manufacturer.robotCoupe, kb.manufacturer.samaref],
        [kb.back]
    ],
    rational: [
        [kb.rational.combiStemear],
        [kb.rational.muiltyPen],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    angeloPo: [
        [kb.angeloPo.plate, kb.angeloPo.grill, kb.angeloPo.macaranCooker],
        [kb.angeloPo.bainMarie, kb.angeloPo.pen],
        [kb.angeloPo.foodBoiler, kb.angeloPo.deepFryer],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    bartscher: [
        [kb.bartscher.bartscherHeatingEquipment],
        [kb.bartscher.bartscherRefrigerationEquipment],
        [kb.bartscher.bartscherElectromechanicalEquipment],
        [kb.bartscher.bartscherDishwashingEquipment],
        [kb.bartscher.bartscherBarEquipment],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    bartscherHeatingEquipment: [
        [kb.bartscherHeatingEquipment.combiStemear, kb.bartscherHeatingEquipment.deepFryer],
        [kb.bartscherHeatingEquipment.heatShowcase, kb.bartscherHeatingEquipment.bainMarie],
        [kb.bartscherHeatingEquipment.pen, kb.bartscherHeatingEquipment.bake, kb.bartscherHeatingEquipment.plate],
        [kb.bartscherHeatingEquipment.riceCooker, kb.bartscherHeatingEquipment.eggCooker, kb.bartscherHeatingEquipment.sausageCooker],
        [kb.bartscherHeatingEquipment.waffleIron, kb.bartscherHeatingEquipment.grill, kb.bartscherHeatingEquipment.toaster],
        [kb.bartscherHeatingEquipment.dispancer, kb.bartscherHeatingEquipment.pastaCooker, kb.bartscherHeatingEquipment.pancakeMaker],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    bartscherRefrigerationEquipment: [
        [kb.bartscherRefrigerationEquipment.shockFreezer],
        [kb.bartscherRefrigerationEquipment.freezerChest, kb.bartscherRefrigerationEquipment.freezerCabinet],
        [kb.bartscherRefrigerationEquipment.refrigeratedTable, kb.bartscherRefrigerationEquipment.refrigeratiorCabinet],
        [kb.bartscherRefrigerationEquipment.iceMaker, kb.bartscherRefrigerationEquipment.iceCrusher],
        [kb.bartscherRefrigerationEquipment.refrigerationShowcase],
        [kb.bartscherRefrigerationEquipment.iceCreamCutter],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    bartscherElectromechanicalEquipment: [
        [kb.bartscherElectromechanicalEquipment.meatGrinder, kb.bartscherElectromechanicalEquipment.slicer, kb.bartscherElectromechanicalEquipment.sausageCuter],
        [kb.bartscherElectromechanicalEquipment.blender, kb.bartscherElectromechanicalEquipment.cooter, kb.bartscherElectromechanicalEquipment.mixer],
        [kb.bartscherElectromechanicalEquipment.potatoPeeler, kb.bartscherElectromechanicalEquipment.vegetableCutter, kb.bartscherElectromechanicalEquipment.doughMixer],
        [kb.bartscherElectromechanicalEquipment.foodCombine, kb.bartscherElectromechanicalEquipment.doughSheeter],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    bartscherDishwashingEquipment: [
        [kb.bartscherDishwashingEquipment.dishwasher],
        [kb.bartscherDishwashingEquipment.glassWasher],
        [kb.bartscherElectromechanicalEquipment.polishingMachine],
        [kb.backToMainManufacturer],
        [kb.back]
    ],
    bartscherBarEquipment: [
        [kb.bartscherBarEquipment.coffeeGrinder, kb.bartscherBarEquipment.coffeeMaker],
        [kb.bartscherBarEquipment.milkFrother, kb.bartscherBarEquipment.juicer],
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
        [kb.robotCoupe.robotCook, kb.robotCoupe.blixer, kb.robotCoupe.cooter],
        [kb.robotCoupe.foodCombine, kb.robotCoupe.mixer],
        [kb.robotCoupe.vegetableCutter, kb.robotCoupe.juicer],
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

