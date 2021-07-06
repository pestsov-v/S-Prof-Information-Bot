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

const rmGastroGrillDatabase = require('../database/rmGastro/grillDatabase.json')
const rmGastroBainMarieDatabase = require('../database/rmGastro/bainMarieDatabase.json')
const rmGastroDeepFryerDatabase = require('../database/rmGastro/deepFryerDatabase.json')
const rmGastroFoodBoilerDatabase = require('../database/rmGastro/foodBoilerDatabase.json')
const rmGastroPastaCookerDatabase = require('../database/rmGastro/pastaCookerDatabase.json')
const rmGastroPenDatabase = require('../database/rmGastro/penDatabase.json')
const rmGastroPlateDatabase = require('../database/rmGastro/plateDatabase.json')

// robot_coupe__databases
const robotCoupeBlixterDatabase = require('../database/robotCoupe/blixterDatabase.json')
const robotCoupeCooterDatabase = require('../database/robotCoupe/cooterDatabase.json')
const robotCoupeFoodCombineDatabase = require('../database/robotCoupe/foodCombine.json')
const robotCoupeMixerDatabase = require('../database/robotCoupe/mixerDatabase.json')
const robotCoupeJuicerDatabase = require('../database/robotCoupe/juicerDatabase.json')
const robotCoupeRobotCookDatabase = require('../database/robotCoupe/robotCookDatabase.json')
const robotCoupeVegetableCutterDatabase = require('../database/robotCoupe/vegetableCutter.json')


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
require('./models/heatingEquipment/grill.model')
const grill = mongoose.model('grill')
require('./models/heatingEquipment/bainMarie.model')
const bainMarie = mongoose.model('bainMarie')
require('./models/heatingEquipment/deepFryer.model')
const deepFryer = mongoose.model('deepFryer')
require('./models/heatingEquipment/foodBoiler.model')
const foodBoiler = mongoose.model('foodBoiler')
require('./models/heatingEquipment/pastaCooker.model')
const pastaCooker = mongoose.model('pastaCooker')
require('./models/heatingEquipment/pen.model')
const pen = mongoose.model('pen')
require('./models/heatingEquipment/plate.model')
const plate = mongoose.model('plate')


require('./models/refrigerationEquipment/refrigeratedTable.model')
const refrigeratedTable = mongoose.model('refrigeratedTable')
require('./models/refrigerationEquipment/refrigeratiorCabinet.model')
const refrigeratiorCabinet = mongoose.model('refrigeratiorCabinet')
require('./models/refrigerationEquipment/shockFreezer.model')
const shockFreezer = mongoose.model('shockFreezer')


require('./models/electromechanicalEquipment/blixter.model')
const blixter = mongoose.model('blixter')
require('./models/electromechanicalEquipment/cooter.model')
const cooter = mongoose.model('cooter')
require('./models/electromechanicalEquipment/foodCombine.model')
const foodCombine = mongoose.model('foodCombine')
require('./models/electromechanicalEquipment/mixer.model')
const mixer = mongoose.model('mixer')
require('./models/electromechanicalEquipment/vegetableCutter.model')
const vegetableCutter = mongoose.model('vegetableCutter')
require ('./models/electromechanicalEquipment/robotCook.model')
const robotCook = mongoose.model('robotCook')




// databaseProjects.projects.forEach(p => new Project(p).save().catch(e => console.log(e)))


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
    SHOW_PROJECTS_MAP: 'spm'
}

// create a bot with polling connection format
const bot = new TelegramBot(config.TOKEN, {
    polling: true
})

// samarefRefrigeratedTableDatabase.refrigeratedTables.forEach(rt => new refrigeratedTable(rt).save().catch(e => console.log(e)))
// samarefRefrigeratiorCabinetDatabase.refrigeratiorCabinets.forEach(rfс => new refrigeratiorCabinet(rfс).save().catch(e => console.log(e)))
// samarefShockFreezerDatabase.shockFreezers.forEach(sf => new shockFreezer(sf).save().catch(e => console.log(e)))

// rmGastroGrillDatabase.grills.forEach(gr => new grill(gr).save().catch(e => console.log(e)))
// rmGastroBainMarieDatabase.bainMaries.forEach(bmr => new bainMarie(bmr).save().catch(e => console.log(e)))
// rmGastroDeepFryerDatabase.deepFryers.forEach(dfs => new deepFryer(dfs).save().catch(e => console.log(e)))
// rmGastroFoodBoilerDatabase.foodBoilers.forEach(fbs => new foodBoiler(fbs).save().catch(e => console.log(e)))
// rmGastroPastaCookerDatabase.pastaCookers.forEach(pcs => new pastaCooker(pcs).save().catch(e => console.log(e)))
// rmGastroPenDatabase.pens.forEach(p => new pen(p).save().catch(e => console.log(e)))
// rmGastroPlateDatabase.plates.forEach(plt => new plate(plt).save().catch(e => console.log(e)))


// robotCoupeBlixterDatabase.blixters.forEach(blr => new blixter(blr).save().catch(e => console.log(e)))
// robotCoupeCooterDatabase.cooters.forEach(сtr => new cooter(сtr).save().catch(e => console.log(e)))
// robotCoupeFoodCombineDatabase.foodCombines.forEach(fce => new foodCombine(fce).save().catch(e => console.log(e)))
// robotCoupeMixerDatabase.mixers.forEach(mxr => new mixer(mxr).save().catch(e => console.log(e)))

// robotCoupeRobotCookDatabase.robotCooks.forEach(rck => new robotCook(rck).save().catch(e => console.log(e)))
// robotCoupeVegetableCutterDatabase.vegetableCutters.forEach(vcr => new vegetableCutter(vcr).save().catch(e => console.log(e)))


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
            sendProjectsByQuery(chatId, { district: 'Выставки' })
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

// switch case keyboard_markup to rm gastro equipment product
bot.on('message', msg => {
    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.rmGastro.grill:
            sendRmGastroGrillByQuery(chatId, { form: 'Грили'})
            break
        case kb.rmGastro.pastaCooker:
            sendRmGastroPastaCookerByQuery(chatId, { form: 'Макароноварки' })
            break
        case kb.rmGastro.bainMarie:
            sendRmGastroBainMarieByQuery(chatId, { form: 'Мармиты' })
            break
        case kb.rmGastro.plate:
            sendRmGastroPlateByQuery(chatId, { form: 'Плиты' })
            break
        case kb.rmGastro.pen:
            sendRmGastroPenByQuery(chatId, { form: 'Сковороды' })
            break
        case kb.rmGastro.foodBoiler:
            sendRmGastroFoodBoilerByQuery(chatId, { form: 'Пищевые котлы' })
            break
        case kb.rmGastro.deepFryer:
            sendRmGastroDeepFryerByQuery(chatId, { form: 'Фритюрницы'})
            break
    }
})

// switch case keyboard_markup to Robot Coupe equipment product
bot.on('message', msg => {
    const chatId = helper.getChatId(msg)

    switch (msg.text) {
        case kb.robotCoupe.robotCook:
            sendRobotCoupeRobotCookByQuery(chatId, { form: 'robot cook' })
            break
        case kb.robotCoupe.blixer:
            sendRobotCoupeBlixerByQuery(chatId, { form: 'бликстер'})
            break
        case kb.robotCoupe.cooter:
            sendRobotCoupeCooterByQuery(chatId, { form: 'куттер'})
            break
        case kb.robotCoupe.foodCombine:
            sendRobotCoupeFoodCombineByQuery(chatId, { form: 'кухонный комбайн'})
            break
        case kb.robotCoupe.mixer:
            sendRobotCoupeMixerByQuery(chatId, { form: 'миксер'})
            break
        case kb.robotCoupe.vegetableCutter:
            sendRobotCoupeVegetableCutterByQuery(chatId, { form: 'овощерезка'})
            break
    }
})


// switch case keyboard_markup to manufacturer categories
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

    self = this
    self.helpText = helpText
    bot.sendMessage(helper.getChatId(msg), helpText)
})

// find project by id
bot.onText(/\/k(.+)/, (msg, [source]) => {
    const projectUuid = helper.getItemUuid(source)
    const chatId = helper.getChatId(msg)
    Project.findOne({ uuid: projectUuid }).then(project => {

        const projectText = `<i>Общие данные</i>
Название объекта: <b>${project.name}</b>
Тип объекта: <b>${project.type}</b>.
Адрес: <b>${project.address}</b>.
Штамп объекта: <b>${project.stamp}</b>.
Площадь реализации технологии на объекте: <b>${project.squareByTechnology} м2</b>.
Площадь объекта: <b>${project.squareByObject} м2</b>.

<i>Количество единиц оборудования</i>
Едениц технического оборудования: <b>${project.squareByTechnology} шт</b>.
Едениц оборудования из нержавеющей стали: <b>${project.stainlessSteelEquipment} шт</b>.

<i>Потребности по комуникациям</i>
<b> - Електроснабжение:</b>
Розеток: <b>${project.Electrical.rosette} шт.</b>
Кабелей: <b>${project.Electrical.cabel} шт.</b>

<b> - Водоснабжение:</b>
Краны диаметром 1/2'': <b>${project.waterSupply.crane_1_2} шт.</b>
Краны диаметром 3/4'': <b>${project.waterSupply.crane_3_4} шт.</b>
   
<b> - Канализация:</b>
Трубы диаметром 50 мм: <b>${project.waterSewerage.trumpet} шт.</b>
Трапы диаметром 100 мм: <b>${project.waterSewerage.ladder} шт.</b>

<b> - Вентиляция:</b>
Витяжных зонтов: <b>${project.ventilation.umbrella} шт.</b>`
        bot.sendMessage(chatId, projectText, {
            text: projectText,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'DWG',
                            url: project.dwgLinks
                        },
                        {
                            text: 'PDF',
                            url: project.pdfLinks
                        }
                    ],
                    [
                        {
                            text: 'Показать на карте',
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

// ----------------- elframo manufacturer commands ----------------------
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

// ----------------- samaref manufacturer commands ----------------------
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

// ----------------- rmGastro manufacturer commands ----------------------
// rmGastro grill command
bot.onText(/\/gr(.+)/, (msg, [source]) => {
    const productUuid = helper.getRmGastroGrillUuid(source)
    const chatId = helper.getChatId(msg)

    grill.findOne({ uuid: productUuid }).then(grill => {
        const caption = `Название товара: <b>${grill.name}.</b>
Тип оборудования: <b>${grill.type}.</b>
Вид оборудования: <b>${grill.form}.</b>
Производитель: <b>${grill.manufacturer}.</b>
Страна производителя: <b>${grill.countryManufacturer}.</b>
Артикул: <b>${grill.article}.</b>
Уровень напряжения: <b>${grill.voltage} кВ</b>
Количество фаз: <b>${grill.numberPhases} шт.</b>
Мощность оборудования: <b>${grill.power} кВт.</b>
Габариты производителя: <b>Ш ${grill.width} x Г ${grill.depth} x В ${grill.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${grill.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, grill.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: grill.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.grill,
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

// rmGastro bain marie command
bot.onText(/\/bmr(.+)/, (msg, [source]) => {
    const productUuid = helper.getRmGastroBainMarieUuid(source)
    const chatId = helper.getChatId(msg)

    bainMarie.findOne({ uuid: productUuid }).then(bainMarie => {
        const caption = `Название товара: <b>${bainMarie.name}.</b>
Тип оборудования: <b>${bainMarie.type}.</b>
Вид оборудования: <b>${bainMarie.form}.</b>
Производитель: <b>${bainMarie.manufacturer}.</b>
Страна производителя: <b>${bainMarie.countryManufacturer}.</b>
Артикул: <b>${bainMarie.article}.</b>
Уровень напряжения: <b>${bainMarie.voltage} кВ</b>
Количество фаз: <b>${bainMarie.numberPhases} шт.</b>
Мощность оборудования: <b>${bainMarie.power} кВт.</b>
Габариты производителя: <b>Ш ${bainMarie.width} x Г ${bainMarie.depth} x В ${bainMarie.weight} мм.</b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${bainMarie.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, bainMarie.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: bainMarie.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.bainMarie,
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

// rmGastro deep fryer command
bot.onText(/\/dfs(.+)/, (msg, [source]) => {
    const productUuid = helper.getRmGastroDeepFryerUuid(source)
    const chatId = helper.getChatId(msg)

    deepFryer.findOne({ uuid: productUuid }).then(deepFryer => {
        const caption = `Название товара: <b>${deepFryer.name}.</b>
Тип оборудования: <b>${deepFryer.type}.</b>
Вид оборудования: <b>${deepFryer.form}.</b>
Производитель: <b>${deepFryer.manufacturer}.</b>
Страна производителя: <b>${deepFryer.countryManufacturer}.</b>
Артикул: <b>${deepFryer.article}.</b>
Уровень напряжения: <b>${deepFryer.voltage} кВ</b>
Количество фаз: <b>${deepFryer.numberPhases} шт.</b>
Мощность оборудования: <b>${deepFryer.power} кВт.</b>
Габариты производителя: <b>Ш ${deepFryer.width} x Г ${deepFryer.depth} x В ${deepFryer.height} мм.</b>
Вес: <b> ${deepFryer.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${deepFryer.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, deepFryer.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: deepFryer.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.deepFryer,
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

// rmGastro food boiler command
bot.onText(/\/fbs(.+)/, (msg, [source]) => {
    const productUuid = helper.getRmGastroFoodBoilerUuid(source)
    const chatId = helper.getChatId(msg)

    foodBoiler.findOne({ uuid: productUuid }).then(foodBoiler => {
        const caption = `Название товара: <b>${foodBoiler.name}.</b>
Тип оборудования: <b>${foodBoiler.type}.</b>
Вид оборудования: <b>${foodBoiler.form}.</b>
Производитель: <b>${foodBoiler.manufacturer}.</b>
Страна производителя: <b>${foodBoiler.countryManufacturer}.</b>
Артикул: <b>${foodBoiler.article}.</b>
Уровень напряжения: <b>${foodBoiler.voltage} кВ</b>
Количество фаз: <b>${foodBoiler.numberPhases} шт.</b>
Мощность оборудования: <b>${foodBoiler.power} кВт.</b>
Габариты производителя: <b>Ш ${foodBoiler.width} x Г ${foodBoiler.depth} x В ${foodBoiler.height} мм.</b>
Вес: <b> ${foodBoiler.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${foodBoiler.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, foodBoiler.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: foodBoiler.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.foodBoiler,
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

// rmGastro pasta cooker command
bot.onText(/\/pcs(.+)/, (msg, [source]) => {
    const productUuid = helper.getRmGastroPastaCookerUuid(source)
    const chatId = helper.getChatId(msg)

    pastaCooker.findOne({ uuid: productUuid }).then(pastaCooker => {
        const caption = `Название товара: <b>${pastaCooker.name}.</b>
Тип оборудования: <b>${pastaCooker.type}.</b>
Вид оборудования: <b>${pastaCooker.form}.</b>
Производитель: <b>${pastaCooker.manufacturer}.</b>
Страна производителя: <b>${pastaCooker.countryManufacturer}.</b>
Артикул: <b>${pastaCooker.article}.</b>
Уровень напряжения: <b>${pastaCooker.voltage} кВ</b>
Количество фаз: <b>${pastaCooker.numberPhases} шт.</b>
Мощность оборудования: <b>${pastaCooker.power} кВт.</b>
Габариты производителя: <b>Ш ${pastaCooker.width} x Г ${pastaCooker.depth} x В ${pastaCooker.height} мм.</b>
Вес: <b> ${pastaCooker.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${pastaCooker.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, pastaCooker.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: pastaCooker.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.pastaCooker,
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

// rmGastro pen command
bot.onText(/\/pen(.+)/, (msg, [source]) => {
    const productUuid = helper.getRmGastroPenUuid(source)
    const chatId = helper.getChatId(msg)

    pen.findOne({ uuid: productUuid }).then(pen => {
        const caption = `Название товара: <b>${pen.name}.</b>
Тип оборудования: <b>${pen.type}.</b>
Вид оборудования: <b>${pen.form}.</b>
Производитель: <b>${pen.manufacturer}.</b>
Страна производителя: <b>${pen.countryManufacturer}.</b>
Артикул: <b>${pen.article}.</b>
Уровень напряжения: <b>${pen.voltage} кВ</b>
Количество фаз: <b>${pen.numberPhases} шт.</b>
Мощность оборудования: <b>${pen.power} кВт.</b>
Габариты производителя: <b>Ш ${pen.width} x Г ${pen.depth} x В ${pen.height} мм.</b>
Вес: <b> ${pen.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${pen.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, pen.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: pen.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.pen,
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

// rmGastro plate command
bot.onText(/\/plt(.+)/, (msg, [source]) => {
    const productUuid = helper.getRmGastroPlateUuid(source)
    const chatId = helper.getChatId(msg)

    plate.findOne({ uuid: productUuid }).then(plate => {
        const caption = `Название товара: <b>${plate.name}.</b>
Тип оборудования: <b>${plate.type}.</b>
Вид оборудования: <b>${plate.form}.</b>
Производитель: <b>${plate.manufacturer}.</b>
Страна производителя: <b>${plate.countryManufacturer}.</b>
Артикул: <b>${plate.article}.</b>
Уровень напряжения: <b>${plate.voltage} кВ</b>
Количество фаз: <b>${plate.numberPhases} шт.</b>
Мощность оборудования: <b>${plate.power} кВт.</b>
Габариты производителя: <b>Ш ${plate.width} x Г ${plate.depth} x В ${plate.height} мм.</b>
Вес: <b> ${plate.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${plate.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, plate.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: plate.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.plate,
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


// ----------------- Robot Coupe manufacturer commands ----------------------
// Robot Coupe Robot Cook command
bot.onText(/\/rck(.+)/, (msg, [source]) => {
    const productUuid = helper.getProductsByFourLittersUuid(source)
    const chatId = helper.getChatId(msg)

    robotCook.findOne({ uuid: productUuid }).then(robotCook => {
        const caption = `Название товара: <b>${robotCook.name}.</b>
Тип оборудования: <b>${robotCook.type}.</b>
Вид оборудования: <b>${robotCook.form}.</b>
Производитель: <b>${robotCook.manufacturer}.</b>
Страна производителя: <b>${robotCook.countryManufacturer}.</b>
Артикул: <b>${robotCook.article}.</b>
Уровень напряжения: <b>${robotCook.voltage} кВ</b>
Количество фаз: <b>${robotCook.numberPhases} шт.</b>
Мощность оборудования: <b>${robotCook.power} кВт.</b>
Габариты производителя: <b>Ш ${robotCook.width} x Г ${robotCook.depth} x В ${robotCook.height} мм.</b>
Вес: <b> ${robotCook.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${robotCook.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, robotCook.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: robotCook.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.robotCook,
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

// Robot Coupe mixer command
bot.onText(/\/mxr(.+)/, (msg, [source]) => {
    const productUuid = helper.getProductsByFourLittersUuid(source)
    const chatId = helper.getChatId(msg)

    mixer.findOne({ uuid: productUuid }).then(mixer => {
        const caption = `Название товара: <b>${mixer.name}.</b>
Тип оборудования: <b>${mixer.type}.</b>
Вид оборудования: <b>${mixer.form}.</b>
Производитель: <b>${mixer.manufacturer}.</b>
Страна производителя: <b>${mixer.countryManufacturer}.</b>
Артикул: <b>${mixer.article}.</b>
Уровень напряжения: <b>${mixer.voltage} кВ</b>
Количество фаз: <b>${mixer.numberPhases} шт.</b>
Мощность оборудования: <b>${mixer.power} кВт.</b>
Габариты производителя: <b>Ш ${mixer.width} x Г ${mixer.depth} x В ${mixer.height} мм.</b>
Вес: <b> ${mixer.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${mixer.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, mixer.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: mixer.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.mixer,
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

// Robot Coupe vegetable cutters command
bot.onText(/\/vcr(.+)/, (msg, [source]) => {
    const productUuid = helper.getProductsByFourLittersUuid(source)
    const chatId = helper.getChatId(msg)

    vegetableCutter.findOne({ uuid: productUuid }).then(vegetableCutter => {
        const caption = `Название товара: <b>${vegetableCutter.name}.</b>
Тип оборудования: <b>${vegetableCutter.type}.</b>
Вид оборудования: <b>${vegetableCutter.form}.</b>
Производитель: <b>${vegetableCutter.manufacturer}.</b>
Страна производителя: <b>${vegetableCutter.countryManufacturer}.</b>
Артикул: <b>${vegetableCutter.article}.</b>
Уровень напряжения: <b>${vegetableCutter.voltage} кВ</b>
Количество фаз: <b>${vegetableCutter.numberPhases} шт.</b>
Мощность оборудования: <b>${vegetableCutter.power} кВт.</b>
Габариты производителя: <b>Ш ${vegetableCutter.width} x Г ${vegetableCutter.depth} x В ${vegetableCutter.height} мм.</b>
Вес: <b> ${vegetableCutter.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${vegetableCutter.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, vegetableCutter.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: vegetableCutter.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.vegetableCutter,
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

// Robot Coupe food combines command
bot.onText(/\/fce(.+)/, (msg, [source]) => {
    const productUuid = helper.getProductsByFourLittersUuid(source)
    const chatId = helper.getChatId(msg)

    foodCombine.findOne({ uuid: productUuid }).then(foodCombine => {
        const caption = `Название товара: <b>${foodCombine.name}.</b>
Тип оборудования: <b>${foodCombine.type}.</b>
Вид оборудования: <b>${foodCombine.form}.</b>
Производитель: <b>${foodCombine.manufacturer}.</b>
Страна производителя: <b>${foodCombine.countryManufacturer}.</b>
Артикул: <b>${foodCombine.article}.</b>
Уровень напряжения: <b>${foodCombine.voltage} кВ</b>
Количество фаз: <b>${foodCombine.numberPhases} шт.</b>
Мощность оборудования: <b>${foodCombine.power} кВт.</b>
Габариты производителя: <b>Ш ${foodCombine.width} x Г ${foodCombine.depth} x В ${foodCombine.height} мм.</b>
Вес: <b> ${foodCombine.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${foodCombine.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, foodCombine.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: foodCombine.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.foodCombine,
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

// Robot Coupe blixters command
bot.onText(/\/blr(.+)/, (msg, [source]) => {
    const productUuid = helper.getProductsByFourLittersUuid(source)
    const chatId = helper.getChatId(msg)

    blixter.findOne({ uuid: productUuid }).then(blixter => {
        const caption = `Название товара: <b>${blixter.name}.</b>
Тип оборудования: <b>${blixter.type}.</b>
Вид оборудования: <b>${blixter.form}.</b>
Производитель: <b>${blixter.manufacturer}.</b>
Страна производителя: <b>${blixter.countryManufacturer}.</b>
Артикул: <b>${blixter.article}.</b>
Уровень напряжения: <b>${blixter.voltage} кВ</b>
Количество фаз: <b>${blixter.numberPhases} шт.</b>
Мощность оборудования: <b>${blixter.power} кВт.</b>
Габариты производителя: <b>Ш ${blixter.width} x Г ${blixter.depth} x В ${blixter.height} мм.</b>
Вес: <b> ${blixter.weight} кг. </b>

<i>Требования к подключению:</i>
Електроснабжение: <b>Розетка на ${blixter.NecessaryCommunications.electrical} кВт.</b>
`
        bot.sendPhoto(chatId, blixter.picture, {
            caption: caption,
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'На официальный сайт',
                            url: blixter.link
                        },
                        {
                            text: 'Добавить в актуальное',
                            callback_data: JSON.stringify({
                                type: ACTION_TYPE.blixter,
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


// ------------------ callback_query action ----------------------------------------------
// callback_query action_type by project inline buttons
bot.on('callback_query', query => {
    let data

    try {
        data = JSON.parse(query.data)
    } catch (e) {
        throw new Error('Data is not an object')
    }


    const { type, la, lo } = data
    if (type === ACTION_TYPE.DWG) {
        console.log(data)

    } else if (type === ACTION_TYPE.SHOW_PROJECTS_MAP) {
            bot.sendLocation(query.message.chat.id, lo, la)
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

    const { la, lo } = data
    if (type === ACTION_TYPE.SHOW_PROJECTS_MAP) {
        bot.sendLocation(query.message.chat.id, la, lo)

    }
})



// find products and projects by query

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



// ------------------------ function send Bartscher bar equipment products by query -------------------
// bartscher__coffeeGrinder
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

// bartscher__coffeeMaker
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

// bartscher__juicer
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

// bartscher__milkFrother
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

// ------------------------ function send Elframo products by query ------------------- 
// elframo__dishwasher
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

// elframo__glassWasher
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

// elframo__pot_washing_machine
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


// ------------------------ function send Samaref products by query -------------------
// samaref__refrigerated_table
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

// samaref__refrigeratior_cabinet
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

// samaref__shock_freezer
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

// ------------------------ function send RM Gastro products by query -------------------
// rm_gastro__grill
function sendRmGastroGrillByQuery(chatId, query) {
    grill.find(query).then(grill => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {})

        const html = grill.map((gr, i) => {
            return `<strong>Название: </strong> ${gr.name} 
<strong>Подробнее: </strong> /gr${gr.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// rm_gastro__pasta_cooker
function sendRmGastroPastaCookerByQuery(chatId, query) {
    pastaCooker.find(query).then(pastaCooker => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {})

        const html = pastaCooker.map((pcs, i) => {
            return `<strong>Название: </strong> ${pcs.name} 
<strong>Подробнее: </strong> /pcs${pcs.uuid}\n`
}).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// rm_gastro__bain_marie
function sendRmGastroBainMarieByQuery(chatId, query) {
    bainMarie.find(query).then(bainMarie => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {})

        const html = bainMarie.map((bmr, i) => {
            return `<strong>Название: </strong> ${bmr.name} 
<strong>Подробнее: </strong> /bmr${bmr.uuid}
\n`
        }).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// rm_gastro__plate
function sendRmGastroPlateByQuery(chatId, query) {
    plate.find(query).then(plate => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {})

        const html = plate.map((plt, i) => {
            return `<strong>Название: </strong> ${plt.name} 
<strong>Подробнее: </strong> /plt${plt.uuid}\n`
}).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// rm_gastro__pen
function sendRmGastroPenByQuery(chatId, query) {
    pen.find(query).then(pen => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {})

        const html = pen.map((pen, i) => {
            return `<strong>Название: </strong> ${pen.name} 
<strong>Подробнее: </strong> /pen${pen.uuid}\n`
}).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// rm_gastro__food_boiler
function sendRmGastroFoodBoilerByQuery(chatId, query) {
    foodBoiler.find(query).then(foodBoiler => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {})

        const html = foodBoiler.map((fbs, i) => {
            return `<strong>Название: </strong> ${fbs.name} 
<strong>Подробнее: </strong> /fbs${fbs.uuid}\n`
}).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// rm_gastro__deep_fryer
function sendRmGastroDeepFryerByQuery(chatId, query) {
    deepFryer.find(query).then(deepFryer => {
        const html = deepFryer.map((dfs, i) => {
            return `<strong>Название: </strong> ${dfs.name} 
<strong>Подробнее: </strong> /dfs${dfs.uuid}\n`
}).join('\n')

        sendHTML(chatId, html, 'products')
    })
}


// ------------------------ function send Robot Coupe products by query -------------------
// robot_coupe__robot_cook
function sendRobotCoupeRobotCookByQuery(chatId, query) {
    robotCook.find(query).then(robotCook => {
        const html = robotCook.map((rck, i) => {
            return `<strong>Название: </strong> ${rck.name} 
<strong>Подробнее: </strong> /rck${rck.uuid}\n`
}).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// robot_coupe__cooter
function sendRobotCoupeCooterByQuery(chatId, query) {
    cooter.find(query).then(cooter => {
        const html = cooter.map((сtr, i) => {
            return `<strong>Название: </strong> ${сtr.name} 
<strong>Подробнее: </strong> /сtr${сtr.uuid}\n`
}).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// robot_coupe__blixter
function sendRobotCoupeBlixerByQuery(chatId, query) {
    blixter.find(query).then(blixter => {
        const html = blixter.map((blr, i) => {
            return `<strong>Название: </strong> ${blr.name} 
<strong>Подробнее: </strong> /blr${blr.uuid}\n`
}).join('\n')

        sendHTML(chatId, html, 'products')
    })
}



// robot_coupe__food_combine
function sendRobotCoupeFoodCombineByQuery(chatId, query) {
    foodCombine.find(query).then(foodCombine => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {})

        const html = foodCombine.map((fce, i) => {
            return `<strong>Название: </strong> ${fce.name} 
<strong>Подробнее: </strong> /fce${fce.uuid}\n`
}).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// robot_coupe__mixer
function sendRobotCoupeMixerByQuery(chatId, query) {
    mixer.find(query).then(mixer => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {})

        const html = mixer.map((mxr, i) => {
            return `<strong>Название: </strong> ${mxr.name} 
<strong>Подробнее: </strong> /mxr${mxr.uuid}\n`
}).join('\n')

        sendHTML(chatId, html, 'products')
    })
}

// robot_coupe__vegetable_cutter
function sendRobotCoupeVegetableCutterByQuery(chatId, query) {
    vegetableCutter.find(query).then(vegetableCutter => {

        const text = `Виберите желаемый товар кликнув по ссылке ниже:`

        bot.sendMessage(chatId, text, {})

        const html = vegetableCutter.map((vcr, i) => {
            return `<strong>Название: </strong> ${vcr.name} 
<strong>Подробнее: </strong> /vcr${vcr.uuid}\n`
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

