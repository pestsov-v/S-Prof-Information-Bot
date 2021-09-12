const mongoose = require('mongoose')

const bot = require('./init')
const keyboard = require('../src/keyboards/keyboards')
const kb = require('../src/keyboards/keyboard-buttons')
const stickers = require('./helpers/stickers')
const file_id = require('./helpers/file_id')
const get_item_uuid__function = require('./functions/get_item_uuid__function')
const toogle_favourite_product = require('./functions/toogle_favourite__product')
const send_project = require('./functions/send_project__by_query')
const function__get_chat_id = require('./functions/get_chat_id__function')
const project_stamp__text = require('./message_text/project_stamp__text')

const {
    manufacturer_elframo__text,
    manufacturer_rational__text,
    manufacturer_rm_gastro__text,
    manufacturer_robot_coupe__text,
    manufacturer_samaref__text
} = require('./message_text/manufacturer_keyboard_text/index')

const {
    command_text__help,
    command_text__object,
    command_text__start__error,
    command_text__start_success,
    command_text__type,
} = require('./message_text/command_text__global/index')

const {
    command_text__statistic,
    command_text__registry,
    command_text__projects,
    command_text__products
} = require('./message_text/command_text__start/index')

const {
    command_text__back,
    command_text__back_manufacturer
} = require('./message_text/command_text__back/index')

const {
    show_favourite__combi_streamer__rational,
    show_favourite__multi_pen__rational,
    send_combi_streamer,
    send_multi_pen__rational
} = require('./functions/product_function/heating_equipment__rational/index')

const {
    send_dishwasher__elframo,
    send_glasswasher__elframo,
    send_warewasher__elframo
} = require('./functions/product_function/dishwasing_equipment__elframo/send_product__by_query/index')

const {
    show_favourite__dishwasher_elframo,
    show_favourite__glasswasher_elframo,
    show_favourite__warewasher__elframo
} = require('./functions/product_function/dishwasing_equipment__elframo/show_favourite_product/index')

const {
    send_refrigerated_table,
    send_refrigeratior_cabinet,
    send_shock_freezer
} = require('./functions/product_function/refrigeration_equipment__samaref/send_product__by_query/index')

const {    
    show_favourite_refrigerated_table__samaref,
    show_favourite_refrigeratior_cabinet__samaref,
    show_favourite_shock_freezer__samaref
} = require('./functions/product_function/refrigeration_equipment__samaref/show_favourite_product/index')

const {
    send_bain_marie__rm_gastro,
    send_deep_fryer__rm_gastro,
    send_food_boiler__rm_gastro,
    send_grill__rm_gastro,
    send_pasta_cooker__rm_gastro,
    send_pen__rm_gastro,
    send_plate__rm_gastro
} = require('./functions/product_function/heating_equipment__rm_gastro.js/send_product__by_query/index')

const {    
    show_favourite__bain_marie__rm_gastro,
    show_favourite__deep_fryer__rm_gastro,
    show_favourite__food_boiler__rm_gastro,
    show_favourite__grill__rm_gastro,
    show_favourite__pasta_cooker__rm_gastro,
    show_favourite__pen__rm_gastro,
    show_favourite__plate__rm_gastro
} = require('./functions/product_function/heating_equipment__rm_gastro.js/show_favourite_product/index')

const {
    send_blixer__robot_coupe,
    send_cooter__robot_coupe,
    send_food_combine__robot_coupe,
    send_mixer__robot_coupe,
    send_robot_cook__robot_coupe,
    send_vegetable_cutter__robot_coupe
} = require('./functions/product_function/electromechanical_equipment__robot_coupe/send_product__by_query/index')

const {
    show_favourite__blixer__robot_coupe,
    show_favourite__cooter__robot_coupe,
    show_favourite__food_combine__robot_coupe,
    show_favourite__mixer__robot_coupe,
    show_favourite__robot_cook__robot_coupe,
    show_favourite__vegetable_cutter__robot_coupe
} = require('./functions/product_function/electromechanical_equipment__robot_coupe/show_favourite_product/index')

const {
    dishwasher__elframo, 
    glasswasher__elframo, 
    warewasher__elframo
} = require('./models/dishwashing_equipment__elframo/index')

const {
    blixter__robot_coupe,
    cooter__robot_coupe,
    food_combine__robot_coupe,
    mixer__robot_coupe,
    vegetable_cutter__robot_coupe,
    robot_cook__robot_coupe
} = require('./models/electromechanical_equipment__robot_coupe/index')

const {refrigerated_table_samaref,
    refrigeratior_cabinet__samaref,
    shock_freezer__samaref
} = require('./models/refrigeration_equipment__samaref/index')

const {
    grill_rm_gastro,
    bain_marie__rm_gastro,
    deep_fryer__rm_gastro,
    food_boiler__rm_gastro,
    pasta_cooker__rm_gastro,
    pen__rm_gastro,
    plate__rm_gastro
} = require('./models/heating_equipment__rm_gastro/index')

const {
    combi_streamer__rational,
    multi_pen__rational
} = require('./models/heating_equipment__rational/index')

require('./models/user.model')
const User = mongoose.model('users')
require('./models/project.model')
const Project = mongoose.model('project')

const ACTION_TYPE =  {
    SHOW_PROJECTS_MAP: 'spm',
    TOOGLE_FAV_COMBI_STREAMERS: 'tfcomstr',
    TOOGLE_FAV_MULTI_PEN: 'tfpultp',
    TOOGLE_FAV_DISHWASHER__ELFRAMO: 'tfdiself',
    TOOGLE_FAV_GLASSWASHER__ELFRAMO: 'tfglalf',
    TOOGLE_FAV_WAREWASHER__ELFRAMO: 'tfwarlf',
    TOOGLE_FAV_BLIXER__ROBOT_COUPE: 'tfblrc',
    TOOGLE_FAV_COOTER__ROBOT_COUPE: 'tfctrc',
    TOOGLE_FAV_FOOD_COMBINE__ROBOT_COUPE: 'tffcrc',
    TOOGLE_FAV_MIXER__ROBOT_COUPE: 'tfmxrc',
    TOOGLE_FAV_ROBOT_COOK__ROBOT_COUPE: 'tfrcrc',
    TOOGLE_FAV_VEGETABLE_CUTTER__ROBOT_COUPE: 'tfctrc',
    TOOGLE_FAV_BAIN_MARIE__RM_GASTRO: 'tfbmrg',
    TOOGLE_FAV_DEEP_FRYER__RM_GASTRO: 'tfdfrg',
    TOOGLE_FAV_FOOD_BOILER__RM_GASTRO: 'tfdbrg',
    TOOGLE_FAV_GRILL__RM_GASTRO: 'tfgrrg',
    TOOGLE_FAV_PASTA_COOKER__RM_GASTRO: 'tfpcrg',
    TOOGLE_FAV_PEN__RM_GASTRO: 'tfperg',
    TOOGLE_FAV_PLATE__RM_GASTRO: 'tfplrg',
    TOOGLE_FAV_REFRIGERATED_TABLE__SAMAREF: 'tfrtsm',
    TOOGLE_FAV_REFRIGERATIOR_CABINET__SAMAREF: 'tfrcsm',
    TOOGLE_FAV_SHOCK_FREEZER__SAMAREF: 'tfsfsm',
}

bot.onText(/\/start/, msg => {
    if (msg.chat.username !== 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__cry)
        bot.sendMessage(chat_id, command_text__start__error)
    } else if (msg.chat.username === 'AveCardinal' || msg.chat.username === 'AveBoss') {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, command_text__start_success, {
            reply_markup: {
                keyboard: keyboard.home,
                resize_keyboard: true
            }
        })
    }
})

bot.onText(/\/help/, msg => {
    if (msg.chat.username !== 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__cry)
        bot.sendMessage(chat_id, command_text__start__error)
    } else if (msg.chat.username === 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__asking)
        bot.sendMessage(chat_id, command_text__help, {
            parse_mode: 'HTML'
        })
    }
})

bot.onText(/\/project/, msg => {
    if (msg.chat.username !== 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__cry)
        bot.sendMessage(chat_id, command_text__start__error)
    } else if (msg.chat.username === 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__searching)
        bot.sendMessage(chat_id, command_text__object, {
            reply_markup: {
                keyboard: keyboard.projects,
                resize_keyboard: true
            }
        })
    }
})

bot.onText(/\/product/, msg => {
    if (msg.chat.username !== 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__cry)
        bot.sendMessage(chat_id, command_text__start__error)
    } else if (msg.chat.username === 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__searching)
        bot.sendMessage(chat_id, command_text__products, {
            parse_mode: 'HTML',
            reply_markup: {
                keyboard: keyboard.manufacturer,
                resize_keyboard: true
            }
        })
    }
})

bot.onText(/\/statistic/, msg => {
    if (msg.chat.username !== 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__cry)
        bot.sendMessage(chat_id, command_text__start__error)
    } else if (msg.chat.username === 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__searching)
        bot.sendMessage(chat_id, command_text__statistic, {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    }
})

bot.onText(/\/registry/, msg => {
    if (msg.chat.username !== 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__cry)
        bot.sendMessage(chat_id, command_text__start__error)
    } else if (msg.chat.username === 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__clips)
        bot.sendMessage(chat_id, command_text__registry, {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        })
    }
})

bot.on('message', msg => {
    console.log(msg)
})

// switch case keybard_markup to start buttons
bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)
    switch (msg.text) {
        case kb.home.projects:
            bot.sendMessage(chat_id, command_text__projects, {
                reply_markup: {
                    keyboard: keyboard.projects,
                    resize_keyboard: true,
                    one_time_keyboard: true
                }
            })
            break
        case kb.home.statistic:
            bot.sendSticker(chat_id, stickers.hot_cherry__clips)
            bot.sendMessage(chat_id, command_text__statistic, {
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
            break
        case kb.home.registry:
            bot.sendSticker(chat_id, stickers.hot_cherry__clips)
            bot.sendMessage(chat_id, command_text__registry, {
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
            break
        case kb.home.products:
            bot.sendMessage(chat_id, command_text__products, {
                reply_markup: {
                    keyboard: keyboard.manufacturer,
                    resize_keyboard: true
                }
            })
            break
            case kb.home.download:
                bot.sendSticker(chat_id, stickers.hot_cherry__run)
                bot.sendMessage(chat_id, project_stamp__text)
                break
    }
})

bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)

    switch (msg.text) {
        case kb.back: {
            bot.sendMessage(chat_id, command_text__back, {
                reply_markup: {
                    keyboard: keyboard.home,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.back_to_main_manufacturer: {
            bot.sendMessage(chat_id, command_text__back_manufacturer, {
                reply_markup: {
                    keyboard: keyboard.manufacturer,
                    resize_keyboard: true
                }
            })
        }
            break
    }
})

// switch case keybard_markup to start buttons
bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)
    switch (msg.text) {
        case kb.projects.college:
            send_project(chat_id, { type: 'Коледж' })
            break
        case kb.projects.exhibition:
            send_project(chat_id, { type: 'Виставка' })
            break
        case kb.projects.finishing:
            send_project(chat_id, { type: 'Finishing' })
            break
        case kb.projects.food_kitchen:
            send_project(chat_id, { type: 'Фабрика-кухня' })
            break
        case kb.projects.kindergarden:
            send_project(chat_id, { type: 'Дитячий садочок' })
            break
        case kb.projects.lyceum:
            send_project(chat_id, { type: 'Ліцей' })
            break
        case kb.projects.restaurant:
            send_project(chat_id, { type: 'Ресторан' })
            break
        case kb.projects.school_complex:
            send_project(chat_id, { type: 'НВК' })
            break
        case kb.projects.school:
            send_project(chat_id, { type: 'Школа' })
            break
    }
})

// switch case keyboard_markup rational product
bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)

    switch (msg.text) {
        case kb.rational.combi_streamer:
            send_combi_streamer(chat_id, { form: 'Пароконвектомат' })
            break
        case kb.rational.multi_pen:
            send_multi_pen__rational(chat_id, { form: 'Мультифункціональна сковорода' })
            break
    }
})
// switch case keyboard_markup elframo equipment product
bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)

    switch (msg.text) {
        case kb.elframo.dishwasher:
            send_dishwasher__elframo(chat_id, { form: 'Посудомийна машина' })
            break
        case kb.elframo.glass_washer:
            send_glasswasher__elframo(chat_id, { form: 'Склянкомийна машина' })
            break
        case kb.elframo.warewasher:
            send_warewasher__elframo(chat_id, { form: 'Котломийна машина' })
            break
    }
})

// switch case keyboard_markup samaref equipment product
bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)

    switch (msg.text) {
        case kb.samaref.refrigerated_table:
            send_refrigerated_table(chat_id, { form: 'Холодильна шафа' })
            break
        case kb.samaref.refrigeratior_cabinet:
            send_refrigeratior_cabinet(chat_id, { form: 'Холодильний стіл' })
            break
        case kb.samaref.shock_freezer:
            send_shock_freezer(chat_id, { form: 'Шафа шокового охолодження та замороження' })
            break
    }
})

// switch case keyboard_markup to rm gastro equipment product
bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)

    switch (msg.text) {
        case kb.rm_gastro.grill:
            send_grill__rm_gastro(chat_id, { form: 'Гриль' })
            break
        case kb.rm_gastro.pasta_cooker:
            send_pasta_cooker__rm_gastro(chat_id, { form: 'Макароноварка'})
            break
        case kb.rm_gastro.bain_marie:
            send_bain_marie__rm_gastro(chat_id, { form: 'Марміт' })
            break
        case kb.rm_gastro.plate:
            send_plate__rm_gastro(chat_id, { form: 'Плита' })
            break
        case kb.rm_gastro.pen:
            send_pen__rm_gastro(chat_id, { form: 'Сковорода' })
            break
        case kb.rm_gastro.food_boiler:
            send_food_boiler__rm_gastro(chat_id, { form: 'Травний котел' })
            break
        case kb.rm_gastro.deep_fryer:
            send_deep_fryer__rm_gastro(chat_id, { form: 'Фритюрниця' })
            break
    }
})

// switch case keyboard_markup to Robot Coupe equipment product
bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)

    switch (msg.text) {
        case kb.robot_coupe.robot_cook:
            send_robot_cook__robot_coupe(chat_id, { form: 'Robot Cook' })
            break
        case kb.robot_coupe.blixer:
            send_blixer__robot_coupe(chat_id, { form: 'Бліксер' })
            break
        case kb.robot_coupe.cooter:
            send_cooter__robot_coupe(chat_id, { form: 'Кутер' })
            break
        case kb.robot_coupe.food_combine:
            send_food_combine__robot_coupe(chat_id, { form: 'Кухонний комбайн' })
            break
        case kb.robot_coupe.mixer:
            send_mixer__robot_coupe(chat_id, { form: 'Міксер' })
            break
        case kb.robot_coupe.vegetable_cutter:
            send_vegetable_cutter__robot_coupe(chat_id, { form: 'Овочерізка' })
            break
    }
})

bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)
    switch(msg.text) {
        case kb.home.actualy: 
        show_favourite__combi_streamer__rational(chat_id, msg.from.id)
        show_favourite__multi_pen__rational(chat_id, msg.from.id)
        show_favourite__dishwasher_elframo(chat_id, msg.from.id)
        show_favourite__glasswasher_elframo(chat_id, msg.from.id)
        show_favourite__warewasher__elframo(chat_id, msg.from.id)
        show_favourite__blixer__robot_coupe(chat_id, msg.from.id),
        show_favourite__cooter__robot_coupe(chat_id, msg.from.id),
        show_favourite__food_combine__robot_coupe(chat_id, msg.from.id),
        show_favourite__mixer__robot_coupe(chat_id, msg.from.id),
        show_favourite__robot_cook__robot_coupe(chat_id, msg.from.id),
        show_favourite__vegetable_cutter__robot_coupe(chat_id, msg.from.id)
        show_favourite__bain_marie__rm_gastro(chat_id, msg.from.id),
        show_favourite__deep_fryer__rm_gastro(chat_id, msg.from.id),
        show_favourite__food_boiler__rm_gastro(chat_id, msg.from.id),
        show_favourite__grill__rm_gastro(chat_id, msg.from.id),
        show_favourite__pasta_cooker__rm_gastro(chat_id, msg.from.id),
        show_favourite__pen__rm_gastro(chat_id, msg.from.id),
        show_favourite__plate__rm_gastro(chat_id, msg.from.id)
        show_favourite_refrigerated_table__samaref(chat_id, msg.from.id),
        show_favourite_refrigeratior_cabinet__samaref(chat_id, msg.from.id),
        show_favourite_shock_freezer__samaref(chat_id, msg.from.id)
        bot.sendMessage(chat_id, 'Актуальні товари', {
            reply_markup: {
                keyboard: keyboard.home,
                resize_keyboard: true
            }
        })
        break
    }
})

// switch case keyboard_markup to manufacturer categories
bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)

    switch (msg.text) {
        case kb.manufacturer.elframo: {
            bot.sendMessage(chat_id, manufacturer_elframo__text, {
                reply_markup: {
                    keyboard: keyboard.elframo,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.manufacturer.rational: {
            bot.sendMessage(chat_id, manufacturer_rational__text, {
                reply_markup: {
                    keyboard: keyboard.rational,
                    resize_keyboard: true,
                    one_time_keyboard: true
                }
            })
        }
            break
        case kb.manufacturer.rm_gastro: {
            bot.sendMessage(chat_id, manufacturer_rm_gastro__text, {
                reply_markup: {
                    keyboard: keyboard.rm_gastro,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.manufacturer.robot_coupe: {
            bot.sendMessage(chat_id, manufacturer_robot_coupe__text, {
                reply_markup: {
                    keyboard: keyboard.robot_coupe,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.manufacturer.samaref: {
            bot.sendMessage(chat_id, manufacturer_samaref__text, {
                reply_markup: {
                    keyboard: keyboard.samaref,
                    resize_keyboard: true
                }
            })
        }
            break
    }
})



// find project by id
bot.onText(/\/k(.+)/, (msg, [source]) => {
    const projectUuid = get_item_uuid__function.get_item__with__two_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Project.findOne({ uuid: projectUuid }).then(project => {
        
        const project_text = `<b>Назва проекту:</b> ${project.project_name}.

<b>Штамп:</b> ${project.stamp}.

<b>Тип об'єкта:</b> ${project.type}.

<b>Адреса:</b> ${project.city}, ${project.address}.`
        bot.sendMessage(chat_id, project_text, {
            text: project_text,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Показати на карті',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.SHOW_PROJECTS_MAP,
                                la: project.location.latitude,
                                lo: project.location.longitude
                            })
                        }
                    ],
                ]
            }
        })
    })
})


// heating equipment coomand
// combiStream command
bot.onText(/\/p(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__two_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)
    console.log(source)
    Promise.all([
        combi_streamer__rational.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([combi_streamer__rational, user]) => {

        let is_fav = false

        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }

        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товара: <b>${combi_streamer__rational.name}.</b>
Серія: <b>${combi_streamer__rational.series}.</b>
Тип обладнання: <b>${combi_streamer__rational.type}.</b>
Вид обладнання: <b>${combi_streamer__rational.form}.</b>
Виробник: <b>${combi_streamer__rational.manufacturer}.</b>
Країна виробника: <b>${combi_streamer__rational.country_manufacturer}.</b>
Артикул: <b>${combi_streamer__rational.article}.</b>
Місткість: <b>${combi_streamer__rational.volume} ємностей.</b>
Рівень напруги: <b>${combi_streamer__rational.voltage}</b>
Кількість фаз: <b>${combi_streamer__rational.number_phases} шт.</b>
Потужність: <b>${combi_streamer__rational.power} кВт.</b>
Розміри обладнання: <b>Ш ${combi_streamer__rational.width} x Г ${combi_streamer__rational.depth} x В ${combi_streamer__rational.weight} мм.</b>
Вага: <b>${combi_streamer__rational.weight} кг.</b>
        
<i>Вимоги до підключення:</i>
Електропостачання: <b>Кабель на ${combi_streamer__rational.necessary_communications.electrical} кВт.</b>
Водопостачання: <b>Кран разміром ${combi_streamer__rational.necessary_communications.water_supply}''.</b>
Каналізація: <b>Труба діаметром ${combi_streamer__rational.necessary_communications.sewerage} мм.</b>
Вентиляція: <b>Вентиляційний зонт розмірами: Ш ${combi_streamer__rational.necessary_communications.ventilation.width} х Г ${combi_streamer__rational.necessary_communications.ventilation.depth} х В ${combi_streamer__rational.necessary_communications.ventilation.height} мм.</b>`
                bot.sendPhoto(chat_id, combi_streamer__rational.picture, {
                    caption: caption,
                    parse_mode: 'HTML',
                    reply_markup: {
                        inline_keyboard: [
                            [
                                {
                                    text: 'На офіційний сайт',
                                    url: combi_streamer__rational.link
                                },
                                {
                                    text: fav_text,
                                    callback_data: JSON.stringify({
                                        type: ACTION_TYPE.TOOGLE_FAV_COMBI_STREAMERS,
                                        product_uuid: product_uuid,
                                        is_fav: is_fav
                                    })
                                }
                            ]
                        ],
                    },
                    resize_keyboard: true,
        
                })
            })
    })

// multiPen command
bot.onText(/\/mp(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__three_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        multi_pen__rational.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([multi_pen__rational, user]) => {

        let is_fav = false

        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }

        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товара: <b>${multi_pen__rational.name}.</b>
Серія: <b>${multi_pen__rational.series}.</b>
Тип обладнання: <b>${multi_pen__rational.type}.</b>
Вид обладнання: <b>${multi_pen__rational.form}.</b>
Виробник: <b>${multi_pen__rational.manufacturer}.</b>
Країна виробника: <b>${multi_pen__rational.country_manufacturer}.</b>
Артикул: <b>${multi_pen__rational.article}.</b>
Ємність: <b>${multi_pen__rational.volume}.</b>
Рівень напруги: <b>${multi_pen__rational.voltage}</b>
Кількість фаз: <b>${multi_pen__rational.number_phases} шт.</b>
Потужність обладнання: <b>${multi_pen__rational.power} кВт.</b>
Розміри обладнання: <b>Ш ${multi_pen__rational.width} x Г ${multi_pen__rational.depth} x В ${multi_pen__rational.weight} мм.</b>
Вага: <b>${multi_pen__rational.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>Кабель на ${multi_pen__rational.necessary_communications.electrical} кВт.</b>
Водопостачання: <b>Кран разміром ${multi_pen__rational.necessary_communications.water_supply}''.</b>
Каналізація: <b>Труба діаметром ${multi_pen__rational.necessary_communications.sewerage} мм.</b>
Вентиляція: <b>Вентиляційний зонт розміром: Ш ${multi_pen__rational.necessary_communications.ventilation.width} х Г ${multi_pen__rational.necessary_communications.ventilation.depth} х В ${multi_pen__rational.necessary_communications.ventilation.height} мм.</b>
`
        bot.sendPhoto(chat_id, multi_pen__rational.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: multi_pen__rational.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_MULTI_PEN,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,

        })
    })
})

// ----------------- elframo manufacturer commands ----------------------
// elframo dishwasher command
bot.onText(/\/edsw(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__five_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        dishwasher__elframo.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([dishwasher__elframo, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товара: <b>${dishwasher__elframo.name}.</b>
Тип обладнання: <b>${dishwasher__elframo.type}.</b>
Виробник: <b>${dishwasher__elframo.manufacturer}.</b>
Країна виробника: <b>${dishwasher__elframo.country_manufacturer}.</b>
Артикул: <b>${dishwasher__elframo.article}.</b>
Рівень напруги: <b>${dishwasher__elframo.voltage} В</b>
Кількість фаз: <b>${dishwasher__elframo.number_phases} шт.</b>
Потужність обладнання: <b>${dishwasher__elframo.power} кВт.</b>
Розміри обладнання: <b>Ш ${dishwasher__elframo.width} x Г ${dishwasher__elframo.depth} x В ${dishwasher__elframo.weight} мм.</b>
Вага: <b>${dishwasher__elframo.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>Розетка на ${dishwasher__elframo.necessary_communications.electrical} кВт.</b>
Водопостачання: <b>Кран разміром ${dishwasher__elframo.necessary_communications.water_supply}''.</b>
Каналізація: <b>Труба діаметром ${dishwasher__elframo.necessary_communications.sewerage} мм.</b>
Вентиляція: <b>Вентиляційний зонт розміром: Ш ${dishwasher__elframo.necessary_communications.ventilation.width} х Г ${dishwasher__elframo.necessary_communications.ventilation.depth} х В ${dishwasher__elframo.necessary_communications.ventilation.height} мм.</b>`
        bot.sendPhoto(chat_id, dishwasher__elframo.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: dishwasher__elframo.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_DISHWASHER__ELFRAMO,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})       

// elframo glass_washer command
bot.onText(/\/egw(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        glasswasher__elframo.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([glasswasher__elframo, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товара: <b>${glasswasher__elframo.name}.</b>
Тип обладнання: <b>${glasswasher__elframo.type}.</b>
Вид обладнання: <b>${glasswasher__elframo.form}.</b>
Виробник: <b>${glasswasher__elframo.manufacturer}.</b>
Країна виробника: <b>${glasswasher__elframo.country_manufacturer}.</b>
Артикул: <b>${glasswasher__elframo.article}.</b>
Рівень напруги: <b>${glasswasher__elframo.voltage} кВ</b>
Кількість фаз: <b>${glasswasher__elframo.number_phases} шт.</b>
Потужність: <b>${glasswasher__elframo.power} кВт.</b>
Розміри обладнання: <b>Ш ${glasswasher__elframo.width} x Г ${glasswasher__elframo.depth} x В ${glasswasher__elframo.weight} мм.</b>
Вага: <b>${glasswasher__elframo.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>Розетка на ${glasswasher__elframo.necessary_communications.electrical} кВт.</b>
Водопостачання: <b>Кран разміром ${glasswasher__elframo.necessary_communications.water_supply}''.</b>
Каналізація: <b>Труба діаметром ${glasswasher__elframo.necessary_communications.sewerage} мм.</b>
Вентиляція: <b>Вентиляційний зонт розміром: Ш ${glasswasher__elframo.necessary_communications.ventilation.width} х Г ${glasswasher__elframo.necessary_communications.ventilation.depth} х В ${glasswasher__elframo.necessary_communications.ventilation.height} мм.</b>
`
        bot.sendPhoto(chat_id, glasswasher__elframo.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: glasswasher__elframo.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_GLASSWASHER__ELFRAMO,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// elframo warewasher command
bot.onText(/\/eptm(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__five_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        warewasher__elframo.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([warewasher__elframo, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товара: <b>${warewasher__elframo.name}.</b>
Тип обладнання: <b>${warewasher__elframo.type}.</b>
Вид обладнання: <b>${warewasher__elframo.form}.</b>
Виробник: <b>${warewasher__elframo.manufacturer}.</b>
Країна виробника: <b>${warewasher__elframo.countryManufacturer}.</b>
Артикул: <b>${warewasher__elframo.article}.</b>
Рівень напруги: <b>${warewasher__elframo.voltage} В</b>
Кількість фаз: <b>${warewasher__elframo.numberPhases} шт.</b>
Потужність: <b>${warewasher__elframo.power} кВт.</b>
Розміри обладнання: <b>Ш ${warewasher__elframo.width} x Г ${warewasher__elframo.depth} x В ${warewasher__elframo.weight} мм.</b>
Вага: <b>${warewasher__elframo.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>Розетка на ${warewasher__elframo.necessary_communications.electrical} кВт.</b>
Водопостачання: <b>Кран разміром ${warewasher__elframo.necessary_communications.water_supply}''.</b>
Каналізація: <b>Труба діаметром ${warewasher__elframo.necessary_communications.sewerage} мм.</b>
Вентиляція: <b>Вентиляційний зонт розміром: Ш ${warewasher__elframo.necessary_communications.ventilation.width} х Г ${warewasher__elframo.necessary_communications.ventilation.depth} х В ${warewasher__elframo.necessary_communications.ventilation.height} мм.</b>
`
        bot.sendPhoto(chat_id, warewasher__elframo.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: warewasher__elframo.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_WAREWASHER__ELFRAMO,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// ----------------- samaref manufacturer commands ----------------------
// samaref refrigerated_table command
bot.onText(/\/rtsm(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__five_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        refrigerated_table_samaref.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([refrigerated_table_samaref, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товара: <b>${refrigerated_table_samaref.name}.</b>
Тип обладнання: <b>${refrigerated_table_samaref.type}.</b>
Вид обладнання: <b>${refrigerated_table_samaref.form}.</b>
Виробник: <b>${refrigerated_table_samaref.manufacturer}.</b>
Країна виробника: <b>${refrigerated_table_samaref.country_manufacturer}.</b>
Холодопродуктивність: <b>${refrigerated_table_samaref.cold_production} В.</b>
Рівень напруги: <b>${refrigerated_table_samaref.voltage} В.</b>
Кількість фаз: <b>${refrigerated_table_samaref.number_phases} шт.</b>
Потужність: <b>${refrigerated_table_samaref.power} кВт.</b>
Розміри обладнання: <b>Ш ${refrigerated_table_samaref.width} x Г ${refrigerated_table_samaref.depth} x В ${refrigerated_table_samaref.weight} мм.</b>
Вага: <b>${refrigerated_table_samaref.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${refrigerated_table_samaref.necessary_communications.electrical} кВт.</b>`
        bot.sendPhoto(chat_id, refrigerated_table_samaref.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: refrigerated_table_samaref.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_REFRIGERATED_TABLE__SAMAREF,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// samaref refrigeratior_cabinet command
bot.onText(/\/rf(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__three_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        refrigeratior_cabinet__samaref.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([refrigeratior_cabinet__samaref, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товара: <b>${refrigeratior_cabinet__samaref.name}.</b>
Тип обладнання: <b>${refrigeratior_cabinet__samaref.type}.</b>
Вид обладнання: <b>${refrigeratior_cabinet__samaref.form}.</b>
Виробник: <b>${refrigeratior_cabinet__samaref.manufacturer}.</b>
Країна виробника: <b>${refrigeratior_cabinet__samaref.country_manufacturer}.</b>
Холодопродуктивність: <b>${refrigeratior_cabinet__samaref.cold_production} В.</b>
Рівень напруги: <b>${refrigeratior_cabinet__samaref.voltage} В.</b>
Кількість фаз: <b>${refrigeratior_cabinet__samaref.number_phases} шт.</b>
Потужність: <b>${refrigeratior_cabinet__samaref.power} кВт.</b>
Розміри обладнання: <b>Ш ${refrigeratior_cabinet__samaref.width} x Г ${refrigeratior_cabinet__samaref.depth} x В ${refrigeratior_cabinet__samaref.weight} мм.</b>
Вага: <b>${refrigeratior_cabinet__samaref.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${refrigeratior_cabinet__samaref.necessary_communications.electrical} кВт.</b>
`
        bot.sendPhoto(chat_id, refrigeratior_cabinet__samaref.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: refrigeratior_cabinet__samaref.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_REFRIGERATIOR_CABINET__SAMAREF,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// samaref shock_freezer command
bot.onText(/\/sf(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__three_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        shock_freezer__samaref.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([shock_freezer__samaref, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товара: <b>${shock_freezer__samaref.name}.</b>
Тип обладнання: <b>${shock_freezer__samaref.type}.</b>
Вид обладнання: <b>${shock_freezer__samaref.form}.</b>
Виробник: <b>${shock_freezer__samaref.manufacturer}.</b>
Країна виробника: <b>${shock_freezer__samaref.country_manufacturer}.</b>
Холодопродуктивність: <b>${shock_freezer__samaref.cold_production} В.</b>
Рівень напруги: <b>${shock_freezer__samaref.voltage} В.</b>
Кількість фаз: <b>${shock_freezer__samaref.number_phases} шт.</b>
Потужність: <b>${shock_freezer__samaref.power} кВт.</b>
Розміри обладнання: <b>Ш ${shock_freezer__samaref.width} x Г ${shock_freezer__samaref.depth} x В ${shock_freezer__samaref.weight} мм.</b>
Вага: <b>${shock_freezer__samaref.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${shock_freezer__samaref.necessary_communications.electrical} кВт.</b>
`
        bot.sendPhoto(chat_id, shock_freezer__samaref.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: shock_freezer__samaref.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_SHOCK_FREEZER__SAMAREF,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// ----------------- rmGastro manufacturer commands ----------------------
// rmGastro grill command
bot.onText(/\/gr(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__three_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        grill_rm_gastro.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([grill_rm_gastro, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'
    
        const caption = `Назва товару: <b>${grill_rm_gastro.name}.</b>
Тип обладнання: <b>${grill_rm_gastro.type}.</b>
Вид обладнання: <b>${grill_rm_gastro.form}.</b>
Виробник: <b>${grill_rm_gastro.manufacturer}.</b>
Країна виробника: <b>${grill_rm_gastro.country_manufacturer}.</b>
Артикул: <b>${grill_rm_gastro.article}.</b>
Рівень напруги: <b>${grill_rm_gastro.voltage} В</b>
Кількість фаз: <b>${grill_rm_gastro.number_phases} шт.</b>
Потужність: <b>${grill_rm_gastro.power} кВт.</b>
Розміри обладнання: <b>Ш ${grill_rm_gastro.width} x Г ${grill_rm_gastro.depth} x В ${grill_rm_gastro.weight} мм.</b>
Вага: <b>${grill_rm_gastro.weight} кг. </b>

<i>Особливості</i>
Тип нагрівального елемента: <b>${grill_rm_gastro.specialized_data.type_of_burners}.</b>
Кількість комфорок та їх потужність: <b>${grill_rm_gastro.specialized_data.number_and_power_of_burners}.</b>
Розміри нагрівального елемента: <b>${grill_rm_gastro.specialized_data.lattice_size}.</b>
Матеріал покриття елемента: <b>${grill_rm_gastro.specialized_data.type_of_coating}.</b>

<i>Вимоги до підключення</i>
Електропостачання: <b>розетка на ${grill_rm_gastro.necessary_communications.electrical} кВт.</b>
`
        bot.sendPhoto(chat_id, grill_rm_gastro.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: grill_rm_gastro.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_GRILL__RM_GASTRO,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// rmGastro bain marie command
bot.onText(/\/bmr(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        bain_marie__rm_gastro.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([bain_marie__rm_gastro, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'
    
        const caption = `Назва товару: <b>${bain_marie__rm_gastro.name}.</b>
Тип обладнання: <b>${bain_marie__rm_gastro.type}.</b>
Вид обладнання: <b>${bain_marie__rm_gastro.form}.</b>
Виробник: <b>${bain_marie__rm_gastro.manufacturer}.</b>
Країна виробника: <b>${bain_marie__rm_gastro.country_manufacturer}.</b>
Артикул: <b>${bain_marie__rm_gastro.article}.</b>
Рівень напруги: <b>${bain_marie__rm_gastro.voltage} В.</b>
Кількість фаз: <b>${bain_marie__rm_gastro.number_phases} шт.</b>
Потужність: <b>${bain_marie__rm_gastro.power} кВт.</b>
Стандарт ємності: <b>${bain_marie__rm_gastro.volume}.</b>
Глиниба ємності: <b>${bain_marie__rm_gastro.alternative_volume}.</b>
Розміри обладнання: <b>Ш ${bain_marie__rm_gastro.width} x Г ${bain_marie__rm_gastro.depth} x В ${bain_marie__rm_gastro.weight} мм.</b>
Вага: <b>${bain_marie__rm_gastro.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${bain_marie__rm_gastro.necessary_communications.electrical} кВт.</b>`
        bot.sendPhoto(chat_id, bain_marie__rm_gastro.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: bain_marie__rm_gastro.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_BAIN_MARIE__RM_GASTRO,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// rmGastro deep fryer command
bot.onText(/\/dfs(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        deep_fryer__rm_gastro.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([deep_fryer__rm_gastro, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'
    
        const caption = `Назва товару: <b>${deep_fryer__rm_gastro.name}.</b>
Тип обладнання: <b>${deep_fryer__rm_gastro.type}.</b>
Вид обладнання: <b>${deep_fryer__rm_gastro.form}.</b>
Виробник: <b>${deep_fryer__rm_gastro.manufacturer}.</b>
Країна виробника: <b>${deep_fryer__rm_gastro.country_manufacturer}.</b>
Артикул: <b>${deep_fryer__rm_gastro.article}.</b>
Рівень напруги: <b>${deep_fryer__rm_gastro.voltage} В.</b>
Кількість фаз: <b>${deep_fryer__rm_gastro.number_phases} шт.</b>
Потужність: <b>${deep_fryer__rm_gastro.power} кВт.</b>
Ємність обладнання: <b>${deep_fryer__rm_gastro.volume}.</b>
Розміри обладнання: <b>Ш ${deep_fryer__rm_gastro.width} x Г ${deep_fryer__rm_gastro.depth} x В ${deep_fryer__rm_gastro.height} мм.</b>
Вага: <b>${deep_fryer__rm_gastro.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${deep_fryer__rm_gastro.necessary_communications.electrical} кВт.</b>
`
        bot.sendPhoto(chat_id, deep_fryer__rm_gastro.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: deep_fryer__rm_gastro.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_DEEP_FRYER__RM_GASTRO,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// rmGastro food boiler command
bot.onText(/\/fbs(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        food_boiler__rm_gastro.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([food_boiler__rm_gastro, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'
        
        const caption = `Назва товару: <b>${food_boiler__rm_gastro.name}.</b>
Тип обладнання: <b>${food_boiler__rm_gastro.type}.</b>
Вид обладнання: <b>${food_boiler__rm_gastro.form}.</b>
Виробник: <b>${food_boiler__rm_gastro.manufacturer}.</b>
Країна виробника: <b>${food_boiler__rm_gastro.countryManufacturer}.</b>
Артикул: <b>${food_boiler__rm_gastro.article}.</b>
Рівень напруги: <b>${food_boiler__rm_gastro.voltage} В.</b>
Кількість фаз: <b>${food_boiler__rm_gastro.numberPhases} шт.</b>
Потужність: <b>${food_boiler__rm_gastro.power} кВт.</b>
Розміри обладнання: <b> Ш ${food_boiler__rm_gastro.width} x Г ${food_boiler__rm_gastro.depth} x В ${food_boiler__rm_gastro.height} мм.</b>
Вага: <b>${food_boiler__rm_gastro.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${food_boiler__rm_gastro.necessary_communications.electrical} кВт.</b>
Водопостачання: <b>кран разміром ${food_boiler__rm_gastro.necessary_communications.water_supply}''.</b>
Каналізація: <b>труба діаметром ${food_boiler__rm_gastro.necessary_communications.sewerage} мм.</b>`
        bot.sendPhoto(chat_id, food_boiler__rm_gastro.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: food_boiler__rm_gastro.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_FOOD_BOILER__RM_GASTRO,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// rmGastro pasta cooker command
bot.onText(/\/pcs(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        pasta_cooker__rm_gastro.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([pasta_cooker__rm_gastro, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'
        
        const caption = `Назва товару: <b>${pasta_cooker__rm_gastro.name}.</b>
Тип обладнання: <b>${pasta_cooker__rm_gastro.type}.</b>
Вид обладнання: <b>${pasta_cooker__rm_gastro.form}.</b>
Виробник: <b>${pasta_cooker__rm_gastro.manufacturer}.</b>
Країна виробника: <b>${pasta_cooker__rm_gastro.country_manufacturer}.</b>
Артикул: <b>${pasta_cooker__rm_gastro.article}.</b>
Рівень напруги: <b>${pasta_cooker__rm_gastro.voltage} В.</b>
Кількість фаз: <b>${pasta_cooker__rm_gastro.number_phases} шт.</b>
Потужність: <b>${pasta_cooker__rm_gastro.power} кВт.</b>
Ємність: <b>${pasta_cooker__rm_gastro.volume} .</b>
Розміри обладнання: <b>Ш ${pasta_cooker__rm_gastro.width} x Г ${pasta_cooker__rm_gastro.depth} x В ${pasta_cooker__rm_gastro.height} мм.</b>
Вага: <b>${pasta_cooker__rm_gastro.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${pasta_cooker__rm_gastro.necessary_communications.electrical} кВт.</b>`
        bot.sendPhoto(chat_id, pasta_cooker__rm_gastro.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: pasta_cooker__rm_gastro.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_PASTA_COOKER__RM_GASTRO,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// rmGastro pen command
bot.onText(/\/pen(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        pen__rm_gastro.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([pen__rm_gastro, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товару: <b>${pen__rm_gastro.name}.</b>
Тип обладнання: <b>${pen__rm_gastro.type}.</b>
Вид обладнання: <b>${pen__rm_gastro.form}.</b>
Виробник: <b>${pen__rm_gastro.manufacturer}.</b>
Країна виробника: <b>${pen__rm_gastro.country_manufacturer}.</b>
Артикул: <b>${pen__rm_gastro.article}.</b>
Рівень напруги: <b>${pen__rm_gastro.voltage} В.</b>
Кількість фаз: <b>${pen__rm_gastro.number_phases} шт.</b>
Потужність: <b>${pen__rm_gastro.power} кВт.</b>
Розміри обладнання: <b>Ш ${pen__rm_gastro.width} x Г ${pen__rm_gastro.depth} x В ${pen__rm_gastro.height} мм.</b>
Вага: <b>${pen__rm_gastro.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>розетка на ${pen__rm_gastro.necessary_communications.electrical} кВт.</b>
Вентиляція: <b>вентиляційний зонт розміром: Ш ${pen__rm_gastro.necessary_communications.ventilation.width} х Г ${pen__rm_gastro.necessary_communications.ventilation.depth} х В ${pen__rm_gastro.necessary_communications.ventilation.height} мм.</b>`
        bot.sendPhoto(chat_id, pen__rm_gastro.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: pen__rm_gastro.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_PEN__RM_GASTRO,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// rmGastro plate command
bot.onText(/\/plt(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        plate__rm_gastro.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([plate__rm_gastro, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товару: <b>${plate__rm_gastro.name}.</b>
Тип обладнання: <b>${plate__rm_gastro.type}.</b>
Вид обладнання: <b>${plate__rm_gastro.form}.</b>
Виробник: <b>${plate__rm_gastro.manufacturer}.</b>
Країна виробника: <b>${plate__rm_gastro.country_manufacturer}.</b>
Артикул: <b>${plate__rm_gastro.article}.</b>
Рівень напруги: <b>${plate__rm_gastro.voltage} В.</b>
Кількість фаз: <b>${plate__rm_gastro.number_phases} шт.</b>
Потужність: <b>${plate__rm_gastro.power} кВт.</b>
Розміри обладнання: <b>Ш ${plate__rm_gastro.width} x Г ${plate__rm_gastro.depth} x В ${plate__rm_gastro.height} мм.</b>
Вага: <b>${plate__rm_gastro.weight} кг. </b>\

<i>Особливості</i>
Тип нагрівального елемента: <b>${plate__rm_gastro.specialized_data.type_of_burners}.</b>
Кількість комфорок та їх потужність: <b>${plate__rm_gastro.specialized_data.number_and_power_of_burners}.</b>
Розміри нагрівального елемента: <b>${plate__rm_gastro.specialized_data.lattice_size}.</b>
Матеріал покриття: <b>${plate__rm_gastro.specialized_data.type_of_coating}.</b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${plate__rm_gastro.necessary_communications.electrical} кВт.</b>
`
        bot.sendPhoto(chat_id, plate__rm_gastro.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: plate__rm_gastro.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_PLATE__RM_GASTRO,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// ----------------- Robot Coupe manufacturer commands ----------------------
// Robot Coupe Robot Cook command
bot.onText(/\/rck(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        robot_cook__robot_coupe.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([robot_cook__robot_coupe, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товару: <b>${robot_cook__robot_coupe.name}.</b>
Тип обладнання: <b>${robot_cook__robot_coupe.type}.</b>
Вид обладнання: <b>${robot_cook__robot_coupe.form}.</b>
Виробник: <b>${robot_cook__robot_coupe.manufacturer}.</b>
Країна виробника: <b>${robot_cook__robot_coupe.country_manufacturer}.</b>
Артикул: <b>${robot_cook__robot_coupe.article}.</b>
Рівень напруги: <b>${robot_cook__robot_coupe.voltage} В.</b>
Кількість фаз: <b>${robot_cook__robot_coupe.number_phases} шт.</b>
Потужність: <b>${robot_cook__robot_coupe.power} кВт.</b>
Розміри обладнання: <b>Ш ${robot_cook__robot_coupe.width} x Г ${robot_cook__robot_coupe.depth} x В ${robot_cook__robot_coupe.height} мм.</b>
Вага: <b>${robot_cook__robot_coupe.weight} кг. </b>

<i>Вимоги до підключення:</i>
 Електропостачання: <b>розетка на ${robot_cook__robot_coupe.necessary_communications.electrical} кВт.</b>`
        bot.sendPhoto(chat_id, robot_cook__robot_coupe.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: robot_cook__robot_coupe.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_ROBOT_COOK__ROBOT_COUPE,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// Robot Coupe mixer command
bot.onText(/\/mxr(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        mixer__robot_coupe.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([mixer__robot_coupe, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товару: <b>${mixer__robot_coupe.name}.</b>
Тип обладнання: <b>${mixer__robot_coupe.type}.</b>
Вид обладнання: <b>${mixer__robot_coupe.form}.</b>
Виробник: <b>${mixer__robot_coupe.manufacturer}.</b>
Країна виробника: <b>${mixer__robot_coupe.country_manufacturer}.</b>
Артикул: <b>${mixer__robot_coupe.article}.</b>
Рівень напруги: <b>${mixer__robot_coupe.voltage} В.</b>
Кількість фаз: <b>${mixer__robot_coupe.number_phases} шт.</b>
Потужність: <b>${mixer__robot_coupe.power} кВт.</b>
Розміри обладнання: <b>Ш ${mixer__robot_coupe.width} x Г ${mixer__robot_coupe.depth} x В ${mixer__robot_coupe.height} мм.</b>
Вага: <b>${mixer__robot_coupe.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${mixer__robot_coupe.necessary_communications.electrical} кВт.</b>
`
        bot.sendPhoto(chat_id, mixer__robot_coupe.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: mixer__robot_coupe.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_MIXER__ROBOT_COUPE,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// Robot Coupe vegetable cutters command
bot.onText(/\/vcr(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        vegetable_cutter__robot_coupe.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([vegetable_cutter__robot_coupe, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товару <b>${vegetable_cutter__robot_coupe.name}.</b>
Тип обладнання: <b>${vegetable_cutter__robot_coupe.type}.</b>
Вид обладнання: <b>${vegetable_cutter__robot_coupe.form}.</b>
Виробник: <b>${vegetable_cutter__robot_coupe.manufacturer}.</b>
Країна виробника: <b>${vegetable_cutter__robot_coupe.country_manufacturer}.</b>
Артикул: <b>${vegetable_cutter__robot_coupe.article}.</b>
Рівень напруги: <b>${vegetable_cutter__robot_coupe.voltage} В.</b>
Кількість фаз: <b>${vegetable_cutter__robot_coupe.number_phases} шт.</b>
Потужність: <b>${vegetable_cutter__robot_coupe.power} кВт.</b>
Розміри обладнання: <b>Ш ${vegetable_cutter__robot_coupe.width} x Г ${vegetable_cutter__robot_coupe.depth} x В ${vegetable_cutter__robot_coupe.height} мм.</b>
Вага: <b>${vegetable_cutter__robot_coupe.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${vegetable_cutter__robot_coupe.necessary_communications.electrical} кВт.</b>`
        bot.sendPhoto(chat_id, vegetable_cutter__robot_coupe.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: vegetable_cutter__robot_coupe.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_VEGETABLE_CUTTER__ROBOT_COUPE,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// Robot Coupe food combines command
bot.onText(/\/fce(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        food_combine__robot_coupe.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([food_combine__robot_coupe, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товару: <b>${food_combine__robot_coupe.name}.</b>
Тип обладнання: <b>${food_combine__robot_coupe.type}.</b>
Вид обладнання: <b>${food_combine__robot_coupe.form}.</b>
Виробник: <b>${food_combine__robot_coupe.manufacturer}.</b>
Країна виробника: <b>${food_combine__robot_coupe.country_manufacturer}.</b>
Артикул: <b>${food_combine__robot_coupe.article}.</b>
Рівень напруги: <b>${food_combine__robot_coupe.voltage} В.</b>
Кількість фаз: <b>${food_combine__robot_coupe.number_phases} шт.</b>
Потужність: <b>${food_combine__robot_coupe.power} кВт.</b>
Розміри обладнання: <b>Ш ${food_combine__robot_coupe.width} x Г ${food_combine__robot_coupe.depth} x В ${food_combine__robot_coupe.height} мм.</b>
Вага: <b>${food_combine__robot_coupe.weight} кг. </b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${food_combine__robot_coupe.necessary_communications.electrical} кВт.</b>`
        bot.sendPhoto(chat_id, food_combine__robot_coupe.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: food_combine__robot_coupe.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_FOOD_COMBINE__ROBOT_COUPE,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// Robot Coupe blixters command
bot.onText(/\/blr(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        blixter__robot_coupe.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([blixter__robot_coupe, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товару: <b>${blixter__robot_coupe.name}.</b>
Тип обладнання: <b>${blixter__robot_coupe.type}.</b>
Вид обладнання: <b>${blixter__robot_coupe.form}.</b>
Виробник: <b>${blixter__robot_coupe.manufacturer}.</b>
Країна виробника: <b>${blixter__robot_coupe.country_manufacturer}.</b>
Артикул: <b>${blixter__robot_coupe.article}.</b>
Рівень напруги: <b>${blixter__robot_coupe.voltage} В.</b>
Кількість фаз: <b>${blixter__robot_coupe.number_phases} шт.</b>
Потужність: <b>${blixter__robot_coupe.power} кВт.</b>
Розміри обладнання: <b>Ш ${blixter__robot_coupe.width} x Г ${blixter__robot_coupe.depth} x В ${blixter__robot_coupe.height} мм.</b>
Вага: <b>${blixter__robot_coupe.weight} кг.</b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${blixter__robot_coupe.necessary_communications.electrical} кВт.</b>`
        bot.sendPhoto(chat_id, blixter__robot_coupe.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: blixter__robot_coupe.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_BLIXER__ROBOT_COUPE,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// Robot Coupe blixters command
bot.onText(/\/ctr(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__four_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

    Promise.all([
        cooter__robot_coupe.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ]).then(([cooter__robot_coupe, user]) => {

        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

        const caption = `Назва товару: <b>${cooter__robot_coupe.name}.</b>
Тип обладнання: <b>${cooter__robot_coupe.type}.</b>
Вид обладнання: <b>${cooter__robot_coupe.form}.</b>
Виробник: <b>${cooter__robot_coupe.manufacturer}.</b>
Країна виробника: <b>${cooter__robot_coupe.country_manufacturer}.</b>
Артикул: <b>${cooter__robot_coupe.article}.</b>
Рівень напруги: <b>${cooter__robot_coupe.voltage} В.</b>
Кількість фаз: <b>${cooter__robot_coupe.number_phases} шт.</b>
Потужність: <b>${cooter__robot_coupe.power} кВт.</b>
Розміри обладнання: <b>Ш ${cooter__robot_coupe.width} x Г ${cooter__robot_coupe.depth} x В ${cooter__robot_coupe.height} мм.</b>
Вага: <b>${cooter__robot_coupe.weight} кг.</b>

<i>Вимоги до підключення:</i>
Електропостачання: <b>розетка на ${cooter__robot_coupe.necessary_communications.electrical} кВт.</b>`
        bot.sendPhoto(chat_id, cooter__robot_coupe.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На офіційний сайт',
                            url: cooter__robot_coupe.link
                        },
                        {
                            text: fav_text,
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.TOOGLE_FAV_COOTER__ROBOT_COUPE,
                                product_uuid: product_uuid,
                                is_fav: is_fav
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~ callback_query action ~~~~~~~~~~~~~~~~~~~~~~~~~
// callback_query action_type by project inline buttons
bot.on('callback_query', query => {
    let data
    const user_id = query.from.id

    try {
        data = JSON.parse(query.data)        
    } catch (e) {
        throw new Error('Data is not an object')
    }

    const {type} = data
    if (type === ACTION_TYPE.SHOW_PROJECTS_MAP) {
        const {lo, la} = data
        bot.sendLocation(query.message.chat.id, lo, la)
    } else if(type === ACTION_TYPE.TOOGLE_FAV_COMBI_STREAMERS) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_MULTI_PEN) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_DISHWASHER__ELFRAMO) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_GLASSWASHER__ELFRAMO) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_WAREWASHER__ELFRAMO) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_BLIXER__ROBOT_COUPE) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_COOTER__ROBOT_COUPE) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_FOOD_COMBINE__ROBOT_COUPE) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_MIXER__ROBOT_COUPE) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_ROBOT_COOK__ROBOT_COUPE) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_VEGETABLE_CUTTER__ROBOT_COUPE) {
        toogle_favourite_product(user_id, query.id, data)
    }  else if (type === ACTION_TYPE.TOOGLE_FAV_BAIN_MARIE__RM_GASTRO) {
        toogle_favourite_product(user_id, query.id, data)
    }  else if (type === ACTION_TYPE.TOOGLE_FAV_DEEP_FRYER__RM_GASTRO) {
        toogle_favourite_product(user_id, query.id, data)
    }  else if (type === ACTION_TYPE.TOOGLE_FAV_FOOD_BOILER__RM_GASTRO) {
        toogle_favourite_product(user_id, query.id, data)
    }  else if (type === ACTION_TYPE.TOOGLE_FAV_GRILL__RM_GASTRO) {
        toogle_favourite_product(user_id, query.id, data)
    }  else if (type === ACTION_TYPE.TOOGLE_FAV_PASTA_COOKER__RM_GASTRO) {
        toogle_favourite_product(user_id, query.id, data)
    }  else if (type === ACTION_TYPE.TOOGLE_FAV_PEN__RM_GASTRO) {
        toogle_favourite_product(user_id, query.id, data)
    }  else if (type === ACTION_TYPE.TOOGLE_FAV_PLATE__RM_GASTRO) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_REFRIGERATED_TABLE__SAMAREF) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_REFRIGERATIOR_CABINET__SAMAREF) {
        toogle_favourite_product(user_id, query.id, data)
    } else if (type === ACTION_TYPE.TOOGLE_FAV_SHOCK_FREEZER__SAMAREF) {
        toogle_favourite_product(user_id, query.id, data)
    } 
})

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~ send project by stamp file_id ~~~~~~~~~~~~~~~~~~~~~~~~~
bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_001_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_001_2021.caption)  
        bot.sendDocument(chat_id, file_id.p_001_2021.dwg, {caption: file_id.p_001_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_001_2021.pdf, {caption: file_id.p_001_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_001_2021.xlsx, {caption: file_id.p_001_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_004_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_004_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_004_2021.dwg, {caption: file_id.p_004_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_004_2021.pdf, {caption: file_id.p_004_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_004_2021.xlsx, {caption: file_id.p_004_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_006_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_006_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_006_2021.dwg, {caption: file_id.p_006_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_006_2021.pdf_v1, {caption: file_id.p_005_2021.pdf_filename_v1})
        bot.sendDocument(chat_id, file_id.p_006_2021.pdf_v2, {caption: file_id.p_005_2021.pdf_filename_v2})        
        bot.sendDocument(chat_id, file_id.p_006_2021.xlsx, {caption: file_id.p_006_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_007_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_007_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_007_2021.dwg, {caption: file_id.p_007_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_007_2021.pdf, {caption: file_id.p_007_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_007_2021.xlsx, {caption: file_id.p_007_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_008_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_008_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_008_2021.dwg, {caption: file_id.p_008_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_008_2021.pdf, {caption: file_id.p_008_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_008_2021.xlsx, {caption: file_id.p_008_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_009_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_009_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_009_2021.dwg, {caption: file_id.p_009_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_009_2021.pdf, {caption: file_id.p_009_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_009_2021.xlsx, {caption: file_id.p_009_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_010_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_010_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_010_2021.dwg, {caption: file_id.p_010_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_010_2021.pdf, {caption: file_id.p_010_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_010_2021.xlsx, {caption: file_id.p_010_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_011_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_011_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_011_2021.dwg, {caption: file_id.p_011_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_011_2021.pdf, {caption: file_id.p_011_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_011_2021.xlsx, {caption: file_id.p_011_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_017_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_017_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_017_2021.dwg, {caption: file_id.p_017_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_017_2021.pdf, {caption: file_id.p_017_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_017_2021.xlsx, {caption: file_id.p_017_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_018_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_018_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_018_2021.dwg_pz, {caption: file_id.p_018_2021.dwg__filename_pz})
        bot.sendDocument(chat_id, file_id.p_018_2021.dwg_tx, {caption: file_id.p_018_2021.dwg__filename_tx})
        bot.sendDocument(chat_id, file_id.p_018_2021.dwg_zz, {caption: file_id.p_018_2021.dwg__filename_zz})       
        bot.sendDocument(chat_id, file_id.p_018_2021.pdf_pz, {caption: file_id.p_018_2021.pdf__filename_pz})
        bot.sendDocument(chat_id, file_id.p_018_2021.pdf_tx, {caption: file_id.p_018_2021.pdf__filename_tx})     
        bot.sendDocument(chat_id, file_id.p_018_2021.xlsx, {caption: file_id.p_018_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_019_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_019_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_019_2021.dwg, {caption: file_id.p_019_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_019_2021.pdf, {caption: file_id.p_019_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_019_2021.xlsx, {caption: file_id.p_019_2021.xlsx__filename,})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_020_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_020_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_020_2021.dwg, {caption: file_id.p_020_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_020_2021.pdf, {caption: file_id.p_020_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_020_2021.xlsx, {caption: file_id.p_020_2021.xlsx__filename,})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_021_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_021_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_021_2021.dwg, {caption: file_id.p_021_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_021_2021.pdf, {caption: file_id.p_021_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_021_2021.xlsx, {caption: file_id.p_021_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_023_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_023_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_023_2021.dwg, {caption: file_id.p_023_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_023_2021.pdf, {caption: file_id.p_023_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_023_2021.xlsx, {caption: file_id.p_023_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_024_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_024_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_024_2021.dwg, {caption: file_id.p_024_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_024_2021.pdf, {caption: file_id.p_024_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_024_2021.xlsx, {caption: file_id.p_024_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_025_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_025_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_025_2021.dwg, {caption: file_id.p_025_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_025_2021.pdf, {caption: file_id.p_025_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_025_2021.xlsx, {caption: file_id.p_025_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_026_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_026_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_026_2021.dwg, {caption: file_id.p_026_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_026_2021.pdf, {caption: file_id.p_026_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_026_2021.xlsx, {caption: file_id.p_026_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_027_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_027_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_027_2021.dwg, {caption: file_id.p_027_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_027_2021.pdf, {caption: file_id.p_027_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_027_2021.xlsx, {caption: file_id.p_027_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_029_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_029_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_029_2021.dwg, {caption: file_id.p_029_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_029_2021.pdf, {caption: file_id.p_029_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_029_2021.xlsx, {caption: file_id.p_029_2021.xlsx__filename})
    }
})

bot.on('message', msg => {
    chat_id = msg.chat.id
    if (msg.text === file_id.p_032_2021.project__name) {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, file_id.p_032_2021.caption)        
        bot.sendDocument(chat_id, file_id.p_032_2021.dwg, {caption: file_id.p_032_2021.dwg__filename})       
        bot.sendDocument(chat_id, file_id.p_032_2021.pdf, {caption: file_id.p_032_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_032_2021.xlsx, {caption: file_id.p_032_2021.xlsx__filename})
    }
})