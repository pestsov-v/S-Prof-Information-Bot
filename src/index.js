process.env["NTBA_FIX_319"] = 1;

// require modules
const mongoose = require('mongoose')
const TelegramBot = require("node-telegram-bot-api")

// require architecture blokes of app
const config = require('./config')
const keyboard = require('../src/keyboards/keyboards')
const kb = require('../src/keyboards/keyboard-buttons')
const helper = require('../src/helper')

//database
const databaseProjects = require('../databaseProjects.json')
const multiPenDatabase = require('../database/rational/multiPenDatabase.json')
const combiStreamerDatabase = require('../database/rational/combiStreamerDatabase.json')
const coffeeGrinderDatabase = require('../database/bartscher/barEquipment/coffeeGrinderDatabase.json')
const coffeeMakerDatabase = require('../database/bartscher/barEquipment/coffeeMakerDatabase.json')
const juicerDatabase = require('../database/bartscher/barEquipment/juicerDatabase.json')
const milkFrotherDatabase = require('../database/bartscher/barEquipment/milkFrotherDatabase.json')

const samarefRefrigeratiorCabinetDatabase = require('../database/samaref/samarefRefrigeratiorCabinetDatabase.json')
const samarefRefrigeratedTableDatabase = require('../database/samaref/samarefRefrigeratedTableDatabase.json')
const samarefShockFreezerDatabase = require('../database/samaref/samarefShockFreezerDatabase.json')

const elframoDishwasherDatabase = require('../database/elframo/elframoDishwasherDatabase.json')
const elframoGlassWasherDatabase = require('../database/elframo/elframoGlassWasherDatabase.json')
const elframoPotWashingMachineDatabase = require('../database/elframo/elframoPotWashingMachine.json')



// require message text 
const {
    backText,
    backToMainManufacturer,
    backToMainProducts,
    helpText,
    productManufacturerText,
    inviteProjectsText,
    productKeyboardText,
    productsText
} = require('./messageText/generalText/index')

// keyboard text
const {
    manufacturerAngeloPoText, 
    manufacturerbartscherText, 
    manufacturerElframoText, 
    manufacturerRmGastroText,
    manufacturerRobotCoupeText,
    manufacturerRationalText,
    manufacturerSamarefText
} = require('./messageText/manufacturer_keyboard_text/index')

// keyboard batrscher equipment text
const {
    barstcherBarEquipmentText, 
    bartscherDishwashingEquipmentText,
    bartscherElectromechanicalEquipmentText,
    bartscherHeatingEquipmentText,
    bartscherRefregerationEquipmentText
} = require('./messageText/manufacturer_keyboard_text/keyboardBartscher/index')

// require NoSQL model
require('./models/project.model')
const Project = mongoose.model('project')

// bar equipment models
require('./models/barEquipment/coffeeGrinder.model')
const coffeeGrinder = mongoose.model('coffeeGrinder')
require('./models/barEquipment/coffeeMaker.model')
const coffeeMaker = mongoose.model('coffeeMaker')
require('./models/barEquipment/juicer.model')
const juicer = mongoose.model('juicer')
require('./models/barEquipment/milkFrother.model')
const milkFrother = mongoose.model('milkFrother')

// dishwashing equipment model
require('./models/dishwashingEquipment/dishwasher.model')
const dishwasher = mongoose.model('dishwasher')
require('./models/dishwashingEquipment/glassWasher.model')
const glassWasher = mongoose.model('glassWasher')
require('./models/dishwashingEquipment/potWashingMachine.model')
const potWashingMachine = mongoose.model('potWashingMachine')

require('./models/heatingEquipment/combiStreamer.model')
const combiStreamer = mongoose.model('combiStreamer')

require('./models/heatingEquipment/multiPen.model')
const multiPen = mongoose.model('multiPen')

require('./models/refrigerationEquipment/refrigeratedTable.model')
const refrigeratedTable = mongoose.model('refrigeratedTable')

require('./models/refrigerationEquipment/refrigeratiorCabinet.model')
const refrigeratiorCabinet = mongoose.model('refrigeratiorCabinet')
require('./models/refrigerationEquipment/shockFreezer.model')
const shockFreezer = mongoose.model('shockFreezer')


// create to require MongoDB NoSQL
mongoose.connect(config.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

// create ACTION_TYPE who needs for callback_query definitions in callback data information
const ACTION_TYPE = {
    DWG: 'dwg',
    PDF: 'pdf',
    technologicalEquipmentPerObject: 'texeqpo',
    stainlessSteelEquipmentPerObject: 'ststpo',
    allCommunicationsPerObject: 'allcopo',
    electricalPerObject: 'elepo',
    waterPerObject: 'watpo',
    seweragePerObject: 'sepo',
    ventilationPerObject: 'venpo',
    square: 'ar',
    squareByTechnologist: 'arbtech',
    concreticate: 'cnc',
    oficialSite: 'ofs',
}

// create a bot with polling connection format
const bot = new TelegramBot(config.TOKEN, {
    polling: true
})

// samarefRefrigeratedTableDatabase.refrigeratedTables.forEach(rt => new refrigeratedTable(rt).save().catch(e => console.log(e)))
// samarefRefrigeratiorCabinetDatabase.refrigeratiorCabinets.forEach(rfс => new refrigeratiorCabinet(rfс).save().catch(e => console.log(e)))
// samarefShockFreezerDatabase.shockFreezers.forEach(sf => new shockFreezer(sf).save().catch(e => console.log(e)))



// // switch case keybard_markup to back buttons
bot.on('message', msg => {
    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.back: {
            bot.sendMessage(chatId, backText, {
                reply_markup: {
                    keyboard: keyboard.home,
                    resize_keyboard: true
                }
            })
        }
            break

        case kb.backToMainManufacturer: {
            bot.sendMessage(chatId, backToMainManufacturer, {
                reply_markup: {
                    keyboard: keyboard.manufacturer,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.backToMainProducts: {
            bot.sendMessage(chatId, backToMainProducts, {
                reply_markup: {
                    keyboard: keyboard.products,
                    resize_keyboard: true
                }
            })
        }
            break
    }
})

bot.on('message', msg => {
    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.home.projects:
            bot.sendMessage(chatId, inviteProjectsText, {
                reply_markup: {
                    keyboard: keyboard.projects,
                    resize_keyboard: true,
                    one_time_keyboard: true
                }
            })
            break
        case kb.home.statistic:
            bot.sendMessage(chatId, { district: 'statistic' })
            break
        case kb.home.analytics:
            bot.sendMessage(chatId, { district: 'projects' })
            break
        case kb.home.products:
            bot.sendMessage(chatId, productsText, {
                reply_markup: {
                    keyboard: keyboard.manufacturer,
                    resize_keyboard: true
                }
            })
            break

        case kb.projects.Kyiv:
            sendProjectsByQuery(chatId, { district: 'Киев' })
            break
        case kb.projects.Lviv:
            sendProjectsByQuery(chatId, { district: 'Львов' })
            break
        case kb.projects.Random:
            sendProjectsByQuery(chatId, { district: 'Другие' })
            break
        case kb.projects.Exhibition:
            sendProjectsByQuery(chatId, { district: 'Виставка' })
            break

    }
})

// switch case keyboard_markup rational product
bot.on('message', msg => {
    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.rational.combiStemear:
            sendcombiSteamerByQuery(chatId, { form: 'Пароконвектомат' })
            break
        case kb.rational.muiltyPen:
            sendMultiPenByQuery(chatId, { form: 'Мультифункциональная сковорода' })
            break
    }
})

// switch case keyboard_markup bartscher bar equipment product
bot.on('message', msg => {
    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.bartscherBarEquipment.coffeeGrinder:
            sendCoffeGrinderByQuery(chatId, { form: 'Кофемолка' })
            break
        case kb.bartscherBarEquipment.coffeeMaker:
            sendCoffeMakerByQuery(chatId, { form: 'Кофеварка' })
            break
        case kb.bartscherBarEquipment.milkFrother:
            sendMilkFrotherByQuery(chatId, { form: 'Вспениватель молока' })
            break
        case kb.bartscherBarEquipment.juicer:
            sendJuicerByQuery(chatId, { form: 'Соковижималка' })
            break
    }
})

// switch case keyboard_markup elframo equipment product
bot.on('message', msg => {
    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.elframo.dishwasher:
            sendElframoDishwasherByQuery(chatId, { form: 'Посудомойная машина' })
            break
        case kb.elframo.glassWasher:
            sendElframoGlassWasherByQuery(chatId, { form: 'Стаканомойная машина' })
            break
        case kb.elframo.potWashingMachine:
            sendElframoPotWashingMachineByQuery(chatId, { form: 'Котломоечная машина' })
            break
    }
})

// switch case keyboard_markup samaref equipment product
bot.on('message', msg => {
    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.samaref.refrigeratedTable:
            sendSamarefRefrigeratedTableByQuery(chatId, { form: 'Холодильный шкаф' })
            break
        case kb.samaref.refrigeratiorCabinet:
            sendSamarefRefrigeratiorCabinetByQuery(chatId, { form: 'Холодильный стол' })
            break
        case kb.samaref.shockFreezer:
            sendSamarefShockFreezerByQuery(chatId, { form: 'Шкаф шоковой заморозки' })
            break
    }
})



// switch case keybard_markup to manufacturer categories
bot.on('message', msg => {
    const chatId = helper.getChatId(msg)

    switch (msg.text) {

        case kb.manufacturer.angeloPo: {
            bot.sendMessage(chatId, manufacturerAngeloPoText, {
                reply_markup: {
                    keyboard: keyboard.angeloPo,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.manufacturer.bartscher: {
            bot.sendMessage(chatId, manufacturerbartscherText, {
                reply_markup: {
                    keyboard: keyboard.bartscher,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.bartscher.bartscherHeatingEquipment: {
            bot.sendMessage(chatId, bartscherHeatingEquipmentText, {
                reply_markup: {
                    keyboard: keyboard.bartscherHeatingEquipment,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.bartscher.bartscherRefrigerationEquipment: {
            bot.sendMessage(chatId, bartscherRefregerationEquipmentText, {
                reply_markup: {
                    keyboard: keyboard.bartscherRefrigerationEquipment,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.bartscher.bartscherElectromechanicalEquipment: {
            bot.sendMessage(chatId, bartscherElectromechanicalEquipmentText, {
                reply_markup: {
                    keyboard: keyboard.bartscherElectromechanicalEquipment,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.bartscher.bartscherDishwashingEquipment: {
            bot.sendMessage(chatId, bartscherDishwashingEquipmentText, {
                reply_markup: {
                    keyboard: keyboard.bartscherDishwashingEquipment,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.bartscher.bartscherBarEquipment: {
            bot.sendMessage(chatId, barstcherBarEquipmentText, {
                reply_markup: {
                    keyboard: keyboard.bartscherBarEquipment,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.manufacturer.elframo: {
            bot.sendMessage(chatId, manufacturerElframoText, {
                reply_markup: {
                    keyboard: keyboard.elframo,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.manufacturer.rational: {
            bot.sendMessage(chatId, manufacturerElframoText, {
                reply_markup: {
                    keyboard: keyboard.rational,
                    resize_keyboard: true,
                    one_time_keyboard: true
                }
            })
        }
            break
        case kb.manufacturer.rmGastro: {
            bot.sendMessage(chatId, manufacturerRmGastroText, {
                reply_markup: {
                    keyboard: keyboard.rmGastro,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.manufacturer.robotCoupe: {
            bot.sendMessage(chatId, manufacturerRobotCoupeText, {
                reply_markup: {
                    keyboard: keyboard.robotCoupe,
                    resize_keyboard: true
                }
            })
        }
            break
        case kb.manufacturer.samaref: {
            bot.sendMessage(chatId, manufacturerSamarefText, {
                reply_markup: {
                    keyboard: keyboard.samaref,
                    resize_keyboard: true
                }
            })
        }
            break
    }
})

// start command
bot.onText(/\/start/, msg => {

    const text = 'hello'
    bot.sendMessage(helper.getChatId(msg), text, {
        reply_markup: {
            keyboard: keyboard.home,
            resize_keyboard: true
        }
    })
})

// help command
bot.onText(/\/help/, msg => {

    this.helpText = helpText
    bot.sendMessage(helper.getChatId(msg), helpText)
})

// find project by id
bot.onText(/\/k(.+)/, (msg, [source]) => {
    const projectUuid = helper.getItemUuid(source)
    const chatId = helper.getChatId(msg)

    Project.findOne({ uuid: projectUuid }).then(project => {
        //Equipment
        const projTechEquip = project.technologicalEquipment
        const stSteelEquip = project.stainlessSteelEquipment
        // communications
        const projRos = project.Electrical.rosette
        const projCabel = project.Electrical.cabel
        const wC12 = project.waterSupply.crane_1_2
        const wC34 = project.waterSupply.crane_3_4
        const wT = project.waterSewerage.trumpet
        const wL = project.waterSewerage.ladder
        const vt = project.ventilation.umbrella
        // allcommunication
        const allCom = project.allCommunications
        // squeares
        const sq = project.square
        const sqByTech = project.squareByTechnologist
        

        const projectText = `Название ${project.name}`
        bot.sendMessage(chatId, projectText, {
            text: projectText,
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'DWG',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.DWG,
                                projectUuid: projectUuid,
                                
                            })
                        },
                        {
                            text: 'PDF',
                            url: 'https://drive.google.com/file/d/1gCDY3XOUMO4zRklaIJIoK8auXaF3QJml/view?usp=sharing',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.PDF,
                                projectUuid: projectUuid,
                                
                            })
                        }
                    ],
                    [
                        {
                            text: 'Спецификация технологического оборудования',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.technologicalEquipmentPerObject,
                                projectUuid: projectUuid,
                                projTechEquip: projTechEquip
                            })
                        }
                    ],
                    [
                        {
                            text: 'Спецификация оборудования из нержавеющей стали',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.stainlessSteelEquipmentPerObject,
                                projUuid: projectUuid,
                                stSteelEquip: stSteelEquip
                            })
                        }
                    ],
                    [
                        {
                            text: 'Спецификация електроснабжение',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.electricalPerObject,
                                projUuid: projectUuid,
                                projRos: projRos,
                                projCabel: projCabel
                            })
                        }
                    ],
                    [
                        {
                            text: 'Спецификация Водоснабжения',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.waterPerObject,
                                projUuid: projectUuid,
                                wC12: wC12,
                                wC34: wC34
                            })
                        }
                    ],
                    [
                        {
                            text: 'Спецификация канализации',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.seweragePerObject,
                                projUuid: projectUuid,
                                wT: wT,
                                wL: wL
                            })
                        }
                    ],
                    [
                        {
                            text: 'Спецификация вентиляции',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.ventilationPerObject,
                                projectUuid: projectUuid,
                                vt: vt
                            })
                        }
                    ],
                    [
                        {
                            text: 'Спецификация всех комуникаций',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.allCommunicationsPerObject,
                                projectUuid: projectUuid,
                                allCom: allCom
                            })
                        }
                    ],
                    [
                        {
                            text: 'Общая площадь объекта',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.square,
                                projectUuid: projectUuid,
                                sq: sq
                            })
                        }
                    ],
                    [
                        {
                            text: 'Площадь реализации технологии',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.squareByTechnologist,
                                projectUuid: projectUuid,
                                sqByTech: sqByTech
                            })
                        }
                    ]
                ]
            }
        })
    })
})

// heating equipment coomand
// combiStream command
bot.onText(/\/p(.+)/, (msg, [source]) => {
    const productUuid = helper.getProductUuid(source)
    const chatId = helper.getChatId(msg)

    combiStreamer.findOne({ uuid: productUuid }).then(combiStreamer => {

        const caption = `Название товара: <b>${combiStreamer.name}.</b>
Серия: <b>${combiStreamer.series}.</b>
Тип оборудования: <b>${combiStreamer.type}.</b>
Вид оборудования: <b>${combiStreamer.form}.</b>
Производитель: <b>${combiStreamer.manufacturer}.</b>
Страна производителя: <b>${combiStreamer.countryManufacturer}.</b>
Артикул: <b>${combiStreamer.article}.</b>
Вместительность: <b>${combiStreamer.volume} ёмкостей.</b>
Уровень напряжения: <b>380 кВт.</b>
Количество фаз: <b>${combiStreamer.numberPhases} шт.</b>
Мощность оборудования: <b>${combiStreamer.power} кВт.</b>
Габариты производителя: <b>Ш ${combiStreamer.width} x Г ${combiStreamer.depth} x В ${combiStreamer.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Кабель ${combiStreamer.NecessaryCommunications.electrical} кВт.</b>
Водоснабжение: <b>Кран размером ${combiStreamer.NecessaryCommunications.waterSupply}''.</b>
Канализация: <b>Труба диаметром ${combiStreamer.NecessaryCommunications.sewerage} мм.</b>
Вентиляция: <b>Вентиляционный зонт размерами: Ш ${combiStreamer.NecessaryCommunications.ventilation.width} х Г ${combiStreamer.NecessaryCommunications.ventilation.depth} х В ${combiStreamer.NecessaryCommunications.ventilation.height} мм.</b>`
        bot.sendPhoto(chatId, combiStreamer.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: combiStreamer.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.concreticate,
                                productUuid: productUuid
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
    const productUuid = helper.getMultiPenUuid(source)
    const chatId = helper.getChatId(msg)

    multiPen.findOne({ uuid: productUuid }).then(multiPen => {
        const caption = `Название товара: <b>${multiPen.name}.</b>
Серия: <b>${multiPen.series}.</b>
Тип оборудования: <b>${multiPen.type}.</b>
Вид оборудования: <b>${multiPen.form}.</b>
Производитель: <b>${multiPen.manufacturer}.</b>
Страна производителя: <b>${multiPen.countryManufacturer}.</b>
Артикул: <b>${multiPen.article}.</b>
Вместительность: <b>${multiPen.volume} дм3.</b>
Уровень напряжения: <b>380 кВт.</b>
Количество фаз: <b>${multiPen.numberPhases} шт.</b>
Мощность оборудования: <b>${multiPen.power} кВт.</b>
Габариты производителя: <b>Ш ${multiPen.width} x Г ${multiPen.depth} x В ${multiPen.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Кабель ${multiPen.NecessaryCommunications.electrical} кВт.</b>
Водоснабжение: <b>Кран размером ${multiPen.NecessaryCommunications.waterSupply}''.</b>
Канализация: <b>Труба диаметром ${multiPen.NecessaryCommunications.sewerage} мм.</b>
Вентиляция: <b>Вентиляционный зонт размерами: Ш ${multiPen.NecessaryCommunications.ventilation.width} х Г ${multiPen.NecessaryCommunications.ventilation.depth} х В ${multiPen.NecessaryCommunications.ventilation.height} мм.</b>
`
        bot.sendPhoto(chatId, multiPen.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: multiPen.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.multiPen,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,

        })
    })
})

//bar equipment command
// coffeeGrinder command
bot.onText(/\/cg(.+)/, (msg, [source]) => {
    const productUuid = helper.getCoffeeGrinderUuid(source)
    const chatId = helper.getChatId(msg)

    coffeeGrinder.findOne({ uuid: productUuid }).then(coffeeGrinder => {
        const caption = `Название товара: <b>${coffeeGrinder.name}.</b>
Тип оборудования: <b>${coffeeGrinder.type}.</b>
Вид оборудования: <b>${coffeeGrinder.form}.</b>
Производитель: <b>${coffeeGrinder.manufacturer}.</b>
Страна производителя: <b>${coffeeGrinder.countryManufacturer}.</b>
Артикул: <b>${coffeeGrinder.article}.</b>
Вместительность: <b>${coffeeGrinder.alternativeVolume} дм3.</b>
Уровень напряжения: <b>${coffeeGrinder.voltage} кВ</b>
Количество фаз: <b>${coffeeGrinder.numberPhases} шт.</b>
Мощность оборудования: <b>${coffeeGrinder.power} кВт.</b>
Габариты производителя: <b>Ш ${coffeeGrinder.width} x Г ${coffeeGrinder.depth} x В ${coffeeGrinder.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${coffeeGrinder.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, coffeeGrinder.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: coffeeGrinder.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.coffeeGrinder,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,

        })
    })
})

// coffeeMaker command
bot.onText(/\/cm(.+)/, (msg, [source]) => {
    const productUuid = helper.getCoffeeGrinderUuid(source)
    const chatId = helper.getChatId(msg)

    coffeeMaker.findOne({ uuid: productUuid }).then(coffeeMaker => {
        const caption = `Название товара: <b>${coffeeMaker.name}.</b>
Тип оборудования: <b>${coffeeMaker.type}.</b>
Вид оборудования: <b>${coffeeMaker.form}.</b>
Производитель: <b>${coffeeMaker.manufacturer}.</b>
Страна производителя: <b>${coffeeMaker.countryManufacturer}.</b>
Артикул: <b>${coffeeMaker.article}.</b>
Уровень напряжения: <b>${coffeeMaker.voltage} кВ</b>
Количество фаз: <b>${coffeeMaker.numberPhases} шт.</b>
Мощность оборудования: <b>${coffeeMaker.power} кВт.</b>
Габариты производителя: <b>Ш ${coffeeMaker.width} x Г ${coffeeMaker.depth} x В ${coffeeMaker.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${coffeeMaker.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, coffeeMaker.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: coffeeMaker.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.coffeeGrinder,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,

        })
    })
})

// juicer command
bot.onText(/\/j(.+)/, (msg, [source]) => {
    const productUuid = helper.getJuicerUuid(source)
    const chatId = helper.getChatId(msg)

    juicer.findOne({ uuid: productUuid }).then(juicer => {
        const caption = `Название товара: <b>${juicer.name}.</b>
Тип оборудования: <b>${juicer.type}.</b>
Вид оборудования: <b>${juicer.form}.</b>
Производитель: <b>${juicer.manufacturer}.</b>
Страна производителя: <b>${juicer.countryManufacturer}.</b>
Артикул: <b>${juicer.article}.</b>
Уровень напряжения: <b>${juicer.voltage} кВ</b>
Количество фаз: <b>${juicer.numberPhases} шт.</b>
Мощность оборудования: <b>${juicer.power} кВт.</b>
Габариты производителя: <b>Ш ${juicer.width} x Г ${juicer.depth} x В ${juicer.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${juicer.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, juicer.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: juicer.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.juicer,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// milkFrother command
bot.onText(/\/mf(.+)/, (msg, [source]) => {
    const productUuid = helper.getMilkFrotherUuid(source)
    const chatId = helper.getChatId(msg)

    milkFrother.findOne({ uuid: productUuid }).then(milkFrother => {
        const caption = `Название товара: <b>${milkFrother.name}.</b>
Тип оборудования: <b>${milkFrother.type}.</b>
Вид оборудования: <b>${milkFrother.form}.</b>
Производитель: <b>${milkFrother.manufacturer}.</b>
Страна производителя: <b>${milkFrother.countryManufacturer}.</b>
Артикул: <b>${milkFrother.article}.</b>
Уровень напряжения: <b>${milkFrother.voltage} кВ</b>
Количество фаз: <b>${milkFrother.numberPhases} шт.</b>
Мощность оборудования: <b>${milkFrother.power} кВт.</b>
Габариты производителя: <b>Ш ${milkFrother.width} x Г ${milkFrother.depth} x В ${milkFrother.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${milkFrother.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, milkFrother.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: milkFrother.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.milkFrother,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// elframo dishwasher command
bot.onText(/\/edsw(.+)/, (msg, [source]) => {
    const productUuid = helper.getElframoDishwasherUuid(source)
    const chatId = helper.getChatId(msg)

    dishwasher.findOne({ uuid: productUuid }).then(dishwasher => {
        const caption = `Название товара: <b>${dishwasher.name}.</b>
Тип оборудования: <b>${dishwasher.type}.</b>
Вид оборудования: <b>${dishwasher.form}.</b>
Производитель: <b>${dishwasher.manufacturer}.</b>
Страна производителя: <b>${dishwasher.countryManufacturer}.</b>
Артикул: <b>${dishwasher.article}.</b>
Уровень напряжения: <b>${dishwasher.voltage} кВ</b>
Количество фаз: <b>${dishwasher.numberPhases} шт.</b>
Мощность оборудования: <b>${dishwasher.power} кВт.</b>
Габариты производителя: <b>Ш ${dishwasher.width} x Г ${dishwasher.depth} x В ${dishwasher.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${dishwasher.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, dishwasher.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: dishwasher.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.dishwasher,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// elframo glassWasher command
bot.onText(/\/egw(.+)/, (msg, [source]) => {
    const productUuid = helper.getElframoGlassWasherUuid(source)
    const chatId = helper.getChatId(msg)

    glassWasher.findOne({ uuid: productUuid }).then(glassWasher => {
        const caption = `Название товара: <b>${glassWasher.name}.</b>
Тип оборудования: <b>${glassWasher.type}.</b>
Вид оборудования: <b>${glassWasher.form}.</b>
Производитель: <b>${glassWasher.manufacturer}.</b>
Страна производителя: <b>${glassWasher.countryManufacturer}.</b>
Артикул: <b>${glassWasher.article}.</b>
Уровень напряжения: <b>${glassWasher.voltage} кВ</b>
Количество фаз: <b>${glassWasher.numberPhases} шт.</b>
Мощность оборудования: <b>${glassWasher.power} кВт.</b>
Габариты производителя: <b>Ш ${glassWasher.width} x Г ${glassWasher.depth} x В ${glassWasher.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${glassWasher.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, glassWasher.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: glassWasher.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.glassWasher,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})



// elframo potWashingMachine command
bot.onText(/\/eptm(.+)/, (msg, [source]) => {
    const productUuid = helper.getElframoPotWashingMachineUuid(source)
    const chatId = helper.getChatId(msg)

    potWashingMachine.findOne({ uuid: productUuid }).then(potWashingMachine => {
        const caption = `Название товара: <b>${potWashingMachine.name}.</b>
Тип оборудования: <b>${potWashingMachine.type}.</b>
Вид оборудования: <b>${potWashingMachine.form}.</b>
Производитель: <b>${potWashingMachine.manufacturer}.</b>
Страна производителя: <b>${potWashingMachine.countryManufacturer}.</b>
Артикул: <b>${potWashingMachine.article}.</b>
Уровень напряжения: <b>${potWashingMachine.voltage} кВ</b>
Количество фаз: <b>${potWashingMachine.numberPhases} шт.</b>
Мощность оборудования: <b>${potWashingMachine.power} кВт.</b>
Габариты производителя: <b>Ш ${potWashingMachine.width} x Г ${potWashingMachine.depth} x В ${potWashingMachine.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${potWashingMachine.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, potWashingMachine.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: potWashingMachine.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.potWashingMachine,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// samaref refrigeratedTable command
bot.onText(/\/rt(.+)/, (msg, [source]) => {
    const productUuid = helper.getSamarefRefrigeratedTableUuid(source)
    const chatId = helper.getChatId(msg)

    refrigeratedTable.findOne({ uuid: productUuid }).then(refrigeratedTable => {
        const caption = `Название товара: <b>${refrigeratedTable.name}.</b>
Тип оборудования: <b>${refrigeratedTable.type}.</b>
Вид оборудования: <b>${refrigeratedTable.form}.</b>
Производитель: <b>${refrigeratedTable.manufacturer}.</b>
Страна производителя: <b>${refrigeratedTable.countryManufacturer}.</b>
Артикул: <b>${refrigeratedTable.article}.</b>
Уровень напряжения: <b>${refrigeratedTable.voltage} кВ</b>
Количество фаз: <b>${refrigeratedTable.numberPhases} шт.</b>
Мощность оборудования: <b>${refrigeratedTable.power} кВт.</b>
Габариты производителя: <b>Ш ${refrigeratedTable.width} x Г ${refrigeratedTable.depth} x В ${refrigeratedTable.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${refrigeratedTable.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, refrigeratedTable.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: refrigeratedTable.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.refrigeratedTable,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// samaref refrigeratiorCabinet command
bot.onText(/\/rf(.+)/, (msg, [source]) => {
    const productUuid = helper.getSamarefRefrigeratiorCabinetUuid(source)
    const chatId = helper.getChatId(msg)

    refrigeratiorCabinet.findOne({ uuid: productUuid }).then(refrigeratiorCabinet => {
        const caption = `Название товара: <b>${refrigeratiorCabinet.name}.</b>
Тип оборудования: <b>${refrigeratiorCabinet.type}.</b>
Вид оборудования: <b>${refrigeratiorCabinet.form}.</b>
Производитель: <b>${refrigeratiorCabinet.manufacturer}.</b>
Страна производителя: <b>${refrigeratiorCabinet.countryManufacturer}.</b>
Артикул: <b>${refrigeratiorCabinet.article}.</b>
Уровень напряжения: <b>${refrigeratiorCabinet.voltage} кВ</b>
Количество фаз: <b>${refrigeratiorCabinet.numberPhases} шт.</b>
Мощность оборудования: <b>${refrigeratiorCabinet.power} кВт.</b>
Габариты производителя: <b>Ш ${refrigeratiorCabinet.width} x Г ${refrigeratiorCabinet.depth} x В ${refrigeratiorCabinet.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${refrigeratiorCabinet.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, refrigeratiorCabinet.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: refrigeratiorCabinet.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.refrigeratiorCabinet,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// samaref shockFreezer command
bot.onText(/\/sf(.+)/, (msg, [source]) => {
    const productUuid = helper.getElframoShockFreezerUuid(source)
    const chatId = helper.getChatId(msg)

    shockFreezer.findOne({ uuid: productUuid }).then(shockFreezer => {
        const caption = `Название товара: <b>${shockFreezer.name}.</b>
Тип оборудования: <b>${shockFreezer.type}.</b>
Вид оборудования: <b>${shockFreezer.form}.</b>
Производитель: <b>${shockFreezer.manufacturer}.</b>
Страна производителя: <b>${shockFreezer.countryManufacturer}.</b>
Артикул: <b>${shockFreezer.article}.</b>
Уровень напряжения: <b>${shockFreezer.voltage} кВ</b>
Количество фаз: <b>${shockFreezer.numberPhases} шт.</b>
Мощность оборудования: <b>${shockFreezer.power} кВт.</b>
Габариты производителя: <b>Ш ${shockFreezer.width} x Г ${shockFreezer.depth} x В ${shockFreezer.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${shockFreezer.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, shockFreezer.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: shockFreezer.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.shockFreezer,
                                productUuid: productUuid
                            })
                        }
                    ]
                ],
            },
            resize_keyboard: true,
        })
    })
})

// -------------------------------------------------------------------------------------------------

// callback_query action_type by project inline buttons
bot.on('callback_query', query => {
    let data

    try {
        data = JSON.parse(query.data)
    } catch (e) {
        throw new Error('Data is not an object')
    }


    const { type } = data
    if (type === ACTION_TYPE.DWG) {
        console.log(data)

    } else if (type === ACTION_TYPE.PDF) {

    } else if (type === ACTION_TYPE.technologicalEquipmentPerObject) {

        const { projTechEquip } = data

        const html = `Количество технологического оборудования заложенного в проект: <strong>${projTechEquip}</strong>.

Для детального просмотра расположение технологического оборудования смотрите сам проект`

        bot.sendMessage(query.message.chat.id, html, {
            parse_mode: 'HTML'
        })

    } else if (type === ACTION_TYPE.stainlessSteelEquipmentPerObject) {

        const { stSteelEquip } = data

        const html = `Количество оборудования из нержавещей стали заложенного в проект: <strong>${stSteelEquip}</strong>.

Для детального просмотра расположение оборудования из нержавеющей стали смотрите сам проект`

        bot.sendMessage(query.message.chat.id, html, {
            parse_mode: 'HTML'
        })

    } else if (type === ACTION_TYPE.electricalPerObject) {

        const { projRos, projCabel } = data

        const html = `Количество точек расположения розеток заложенных в проект: <strong>${projRos}</strong>.
Количество точек расположения кабелей заложенных в проект: <strong>${projCabel}</strong>.

Для детального просмотра расположение электроснабжение смотрите сам проект`

        bot.sendMessage(query.message.chat.id, html, {
            parse_mode: 'HTML'
        })

    } else if (type === ACTION_TYPE.waterPerObject) {

        const { wC12, wC34 } = data

        const html = `Количество точек расположения кранов размером 1/2 заложенных в проект: <strong>${wC12}</strong>.
Количество точек расположения кранов размером 3/4 заложенных в проект: <strong>${wC34}</strong>.
        
Для детального просмотра расположение водоснабжения смотрите сам проект`

        bot.sendMessage(query.message.chat.id, html, {
            parse_mode: 'HTML'
        })

    } else if (type === ACTION_TYPE.seweragePerObject) {

        const { wT, wL } = data

        const html = `Количество точек расположения канализационых труб диаметром 50 мм: <strong>${wT}</strong>.
Количество точек расположения трапов заложенных в проект: <strong>${wL}</strong>.
        
Для детального просмотра расположение канализации смотрите сам проект`

        bot.sendMessage(query.message.chat.id, html, {
            parse_mode: 'HTML'
        })

    } else if (type === ACTION_TYPE.ventilationPerObject) {
        const { vt } = data

        const html = `Количество точек расположения вытяжних зонтов: <strong>${vt}</strong>.
        
Для детального просмотра расположение вентиляции смотрите сам проект`

        bot.sendMessage(query.message.chat.id, html, {
            parse_mode: 'HTML'
        })


    } else if (type === ACTION_TYPE.allCommunicationsPerObject) {
        const { allCom } = data

        const html = `Всего точек подключений: <strong>${allCom}</strong>.
        
Для детального просмотра расположение вентиляции смотрите сам проект`

        bot.sendMessage(query.message.chat.id, html, {
            parse_mode: 'HTML'
        })

    } else if (type === ACTION_TYPE.square) {

        const { square } = data

        const html = `Площадь всего объекта: <strong>${square}</strong>.
        
Для детального просмотра площади помещений объекта смотрите сам проект`

        bot.sendMessage(query.message.chat.id, html, {
            parse_mode: 'HTML'
        })

    } else if (type === ACTION_TYPE.squareByTechnologist) {

        const { squareByTechnologist } = data

        const html = `Площадь реализованной пищевой технологии на объекта: <strong>${squareByTechnologist}</strong>.
        
Для детального просмотра площади помещений объекта смотрите сам проект`

        bot.sendMessage(query.message.chat.id, html, {
            parse_mode: 'HTML'
        })

        file_id = ''
        bot.sendDocument(chatId, file_id)

    }
})

// callback_query action_type by product inline buttons
bot.on('callback_query', query => {
    let data

    try {
        data = JSON.parse(query.data)
    } catch (e) {
        throw new Error('Data is not an object')
    }

    const { type } = data
    if (type === ACTION_TYPE.concreticate) {

        getProductData(query.id, data)

    }
})

// find project by type
function sendProjectsByQuery(chatId, query) {
    Project.find(query).then(projects => {


        const text = `Виберите желаемый объект кликнув по ссылке ниже: `


        bot.sendMessage(chatId, text, {
        })

        const html = projects.map((k, i) => {
            return `<strong>Штамп: </strong> <i>${k.stamp}</i> 
<strong>Название объекта: </strong> ${k.name}
<strong>Cсылка на проект: </strong> /k${k.uuid}
\n`
        }).join('\n')

        bot.sendMessage(chatId, html, {
            parse_mode: 'HTML'
        })
    })
}

// find combiSteamer by type
function sendcombiSteamerByQuery(chatId, query) {
    combiStreamer.find(query).then(combiStreamers => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = combiStreamers.map((p, i) => {
            return `<strong>Серия: </strong> ${p.series}
<strong>Название товара: </strong> ${p.name}
<strong>Подробнее: </strong> /p${p.uuid}
`}).join('\n')

        sendHTML(chatId, html, 'products')

    })
}

// find multiPen by type
function sendMultiPenByQuery(chatId, query) {
    multiPen.find(query).then(multiPen => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = multiPen.map((m, i) => {
            return `<strong>Название серии: </strong> ${m.series} 
<strong>Название товара: </strong> ${m.name}
<strong>Подробнее: </strong> /mp${m.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')

    })
}

// send by query bar equipment
// find coffeeGrinder by type
function sendCoffeGrinderByQuery(chatId, query) {
    coffeeGrinder.find(query).then(coffeeGrinder => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = coffeeGrinder.map((cg, i) => {
            return `<strong>Название: </strong> ${cg.name} 
<strong>Подробнее: </strong> /cg${cg.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// find coffeeMaker by type
function sendCoffeMakerByQuery(chatId, query) {
    coffeeMaker.find(query).then(coffeeMaker => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = coffeeMaker.map((cm, i) => {
            return `<strong>Название: </strong> ${cm.name}<strong>
Подробнее: </strong> /cm${cm.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// find juicer by type
function sendJuicerByQuery(chatId, query) {
    juicer.find(query).then(juicer => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = juicer.map((j, i) => {
            return `<strong>Название: </strong> ${j.name} 
<strong>Подробнее: </strong> /j${j.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// find milkFrother by type
function sendMilkFrotherByQuery(chatId, query) {
    milkFrother.find(query).then(milkFrother => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = milkFrother.map((mf, i) => {
            return `<strong>Название: </strong> ${mf.name} 
<strong>Подробнее: </strong> /mf${mf.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// find elframo dishwasher by type
function sendElframoDishwasherByQuery(chatId, query) {
    dishwasher.find(query).then(dishwasher => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = dishwasher.map((edsw, i) => {
            return `<strong>Название: </strong> ${edsw.name} 
<strong>Подробнее: </strong> /edsw${edsw.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// find elframo glassWasher by type
function sendElframoGlassWasherByQuery(chatId, query) {
    glassWasher.find(query).then(glassWasher => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = glassWasher.map((egw, i) => {
            return `<strong>Название: </strong> ${egw.name} 
<strong>Подробнее: </strong> /egw${egw.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// find elframo potWashingMachine by type
function sendElframoPotWashingMachineByQuery(chatId, query) {
    potWashingMachine.find(query).then(potWashingMachine => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = potWashingMachine.map((eptm, i) => {
            return `<strong>Название: </strong> ${eptm.name} 
<strong>Подробнее: </strong> /eptm${eptm.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// find samaref refrigeratedTable by type
function sendSamarefRefrigeratedTableByQuery(chatId, query) {
    refrigeratedTable.find(query).then(refrigeratedTable => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = refrigeratedTable.map((rt, i) => {
            return `<strong>Название: </strong> ${rt.name} 
<strong>Подробнее: </strong> /rt${rt.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// find samaref refrigeratiorCabinet by type
function sendSamarefRefrigeratiorCabinetByQuery(chatId, query) {
    refrigeratiorCabinet.find(query).then(refrigeratiorCabinet => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = refrigeratiorCabinet.map((rf, i) => {
            return `<strong>Название: </strong> ${rf.name} 
<strong>Подробнее: </strong> /rf${rf.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// find samaref shockFreezer by type
function sendSamarefShockFreezerByQuery(chatId, query) {
    shockFreezer.find(query).then(shockFreezer => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {
        })

        const html = shockFreezer.map((sf, i) => {
            return `<strong>Название: </strong> ${sf.name} 
<strong>Подробнее: </strong> /sf${sf.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// get answerCallbackQuery by query
function getProductData(queryId, { productUuid }) {
    combiStreamer.findOne({ uuid: productUuid }).then(combiStreamer => {
        const text = `Добавлено в актуальное`
        bot.answerCallbackQuery({
            callback_query_id: queryId,
            text: text
        })
    })
}

// parse_mode function
function sendHTML(chatId, html, kbName = null) {
    const options = {
        parse_mode: 'HTML'
    }

    if (kbName) {
        options['reply_markup'] = {
            keyboard: keyboard[kbName]
        }
    }

    bot.sendMessage(chatId, html, options)
}

