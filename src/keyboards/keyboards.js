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
        [kb.manufacturer.rational, kb.manufacturer.robot_coupe],
        [kb.manufacturer.rm_gastro],
        [kb.back]
    ],
    rational: [
        [kb.rational.combi_streamer],
        [kb.rational.multi_pen],
        [kb.back_to_main_manufacturer],
        [kb.back]
    ],
    elframo: [
        [kb.elframo.warewasher],
        [kb.elframo.dishwasher],
        [kb.elframo.glass_washer],
        [kb.back_to_main_manufacturer],
        [kb.back]
    ],
    rm_gastro: [
        [kb.rm_gastro.grill, kb.rm_gastro.deep_fryer],
        [kb.rm_gastro.pasta_cooker, kb.rm_gastro.pen],
        [kb.rm_gastro.bain_marie, kb.rm_gastro.plate, kb.rm_gastro.food_boiler],
        [kb.back_to_main_manufacturer],
        [kb.back]
    ],
    robot_coupe: [
        [kb.robot_coupe.robot_cook, kb.robot_coupe.blixer],
        [kb.robot_coupe.food_combine, kb.robot_coupe.mixer],
        [kb.robot_coupe.vegetable_cutter, kb.robot_coupe.cooter],
        [kb.back_to_main_manufacturer],
        [kb.back]
    ],
    samaref: [
        [kb.samaref.shock_freezer],
        [kb.samaref.refrigeratior_cabinet],
        [kb.samaref.refrigerated_table],
        [kb.back_to_main_manufacturer],
        [kb.back]
    ]
}

