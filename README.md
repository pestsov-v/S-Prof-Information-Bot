# **S-Prof. Информационный бот**

Проект написан на библиотеке `node-telegram-bot-api`. Ниже Вы найдёте подробную инструкцию, как развернуть аналогичного бота у себя, а также подробную информацию о логике приложения. Приложение использующее компанией является закрытым, в GitHub репозитории же указан полный, функциональный код, без персональных или служебных данных, использующиеся внутри компании.

# **Оглавление**
  - [Предназначение](#предназначение)
  - [Как я могу развернуть проект у себя](#как-я-могу-развернуть-проект-у-себя)
    - [Уникальные вводные данные](#уникальные-вводные-данные)
    - [Получение токена Telegram Bot](#получение-токена-telegram-bot)
    - [Получение URL адреса MongoDB](#получение-url-адреса-mongodb)
    - [Формируем config.js с уникальными данными](#формируем-configjs-с-уникальными-данными)
    - [Загрузка данных в MongoDB](#загрузка-данных-в-mongodb)
  - [Возможности бота](#возможности-бота)
    - [Запуск бота](#запуск-бота)
    - [Главное меню](#главное-меню)
    - [Проекти](#проект)
      - [Получение краткой информации о проекте](#получение-короткой-информации-о-проекте)  
        - [Клавиша "Проекти"](#клавиша-проект)
        - [Необходимый тип объекта](#необходимый-тип-объекта)
        - [Выбор конкретного проекта исходя из ID](#выбор-конкретного-проекта-исходя-из-id)
        - [Краткая информация о проекте](#краткая-информация-о-проекте)
      - [Получение полной информации о проекте](#получение-полной-информации-о-проекте)
        - [Способы узнать шифр проекта](#способы-узнать-шифр-проекта)
        - [Полная информация о проекте](#полная-информация-о-проекте)
    - [Товар](#товари)
        - [Клавиша "Товари"](#товари)
        - [Необходимый производитель](#небходимый-производитель)
        - [Необходимый тип товаров](#необходимый-тип-товаров)
        - [Выбор конкретного товара исходя из ID](#выбор-конкретного-товара-исходя-из-id)
    - [Актуальные товары](#актуальные-товары)
        - [Добавление товара в актуальное](#добавление-товара-в-актуальное)
        - [Отправка callback_data](#отправка-callback_data)
        - [Обработка callback_query](#обработка-callback_query)
        - [Клавиша "Актуальні товари](#клавиша-актуальні-товари)
    - [Реестр проектов](#реестр-проектов)
        - [Запуск главного меню](#запуск-главного-меню)
        - [Клавиша "Реєстр об'єктів"](#клавиша-реєстр-обєктів)
    - [Cтатистика по объектам](#статистика-по-объектам)
        - [Запуск главного меню](#запуск-главного-меню)
        - [Клавиша "Статистика по об'єктам"](#клавиша-статистика-по-обєктам)
  - [Заключение](#заключение)


# **Предназначение**

S-Prof. Информационный бот - это закрытый `Telegram bot` для компании S-Prof food service solution. <br/>
Бот закрытый, поскольку предназначен для использования внутри компании, а конкретно способствует повышению эффективности в работе проектировщиков, менеджеров проекта и сервисного отдела и написанный на украинском языке, поскольку компания-потребитель находиться в городе Львове, Украина. <br/>
Концепция проекта проста и глобально выполняет следующую функцию - расположить все необходимые данные в одном, виртуальном месте, доступ к которому есть только у сотрудников компании. <br/>

# **Как я могу развернуть проект у себя**

Чтобы развернуть проект локально необходимо иметь токен `Telegram Bot` и URL-ссылку доступа в Вашу базу данных MongoDB. Получение вводных данных описано ниже. <br/>
После получения вводных данных и интегрирования их в проект следует ввести `npm i` или `npm install` для установки всех пакетов npm., после следует ввести комманду `npm run dev` для запуска проекта.

## Уникальные вводные данные
Особенностью любых ботов созданных на платформе `Telegram` есть, в первую очередь, получения уникального токена, по которому сервера `Telegram` идентифицируют единую точку входа, запросы или же обновления бота. Это означает, что нельзя развернуть одного и того же бота с одинаковым токеном, а следовательно необходимо получить индивидуальный токен.<br/>

Поскольку бот использует NoSQL базу данных MongoDB, для хранения данных по проектам, объектам, гиперссылкам и сессиям отдельных пользователей в виде JSON-документов, то необходимо получить уникальный URL-адрес для успешной работы с базой данных. К проекту прилагаются файлы в формате JSON, в которых хранится достаточное количество данных, для практических примеров реализации приложения. Инструкция, как перебросить данных из файлов JSON в ваш аккаунт базы данных подробно объясняется ниже.

## Получение токена Telegram Bot

Находим `Bot Father` в поисковике Telegram: <br/>
*Важно! `Bot Father` должен иметь сбоку синюю галочку, как верификация подлиности.*

[![1.png](https://i.postimg.cc/YCQd9ch5/1.png)](https://postimg.cc/0z2YWBGn)

Запускаем чат с `Bot Father`: <br/>

[![2.png](https://i.postimg.cc/nzh20C0x/2.png)](https://postimg.cc/94syfX6g)

Выбираем функцию "создать нового бота" (`/newbot`): <br/>

[![3.png](https://i.postimg.cc/sgCJbnww/3.png)](https://postimg.cc/HV35ytGy)

Вводим имя бота: <br/>

[![4.png](https://i.postimg.cc/t7QhQTtY/4.png)](https://postimg.cc/2LGqnCtD)

Вводим `username` бота
`username` - это виртуальное, имя, которое используется, в основном как ссылка на бота. <br/>
*В примере для простоты `username` и имя бота одинаково, но `Telegram` позволяет разные имя и `username` у бота.*

[![5.png](https://i.postimg.cc/PfL9jRQj/5.png)](https://postimg.cc/bdh30L5C)

Получаем у `Bot Father` уникальный токен: <br/>

[![6.png](https://i.postimg.cc/BnNMDTBp/6.png)](https://postimg.cc/75G3rTcJ)

## Получение URL адреса MongoDB

Находим официальный сайт MongoDB в Google: <br/>

[![1.png](https://i.postimg.cc/mZpG04p7/1.png)](https://postimg.cc/Z0NgdGSq)

Переходим в поле "Войти" (Sign in): <br/>

[![2.png](https://i.postimg.cc/DzP953bJ/2.png)](https://postimg.cc/p9ycX7CR)

Регистрируемся через Google аккаунт: <br/>
*Для случаев, когда нет своего аккаунта в MongoDB* <br/>

[![3.png](https://i.postimg.cc/RVrzMd90/3.png)](https://postimg.cc/z3kQ7nym)

Заходим через существующий аккаунт Google: <br/>

[![4.png](https://i.postimg.cc/52gcSMzH/4.png)](https://postimg.cc/0zzH9Fcx)

Принимаем политику конфиденциальности и условия обслуживания: <br/>

[![5.png](https://i.postimg.cc/KYpdCrJx/5.png)](https://postimg.cc/Tym7Dbz4)

Выбираем бесплатный вариант виртуального облака. <br/>
*Срок жизни подобного облака порядка 2 месяцев, после чего MongoDB заблокируем просмотр базы данных, стимулируя Вас поменять бесплатный тариф на платный.* <br/>
*Важно! Для регистрации в MongoDB не нужно вводить данные банковских карт, поэтому не стоит переживать за то, что у Вас спишутся средства.* <br/>

[![7.png](https://i.postimg.cc/4yVq7CZx/7.png)](https://postimg.cc/Lg4Nwbnc)

Создаём виртуальное облако. Проверяем и выбираем следующие пункты: <br/>
1. Проверяем Бесплатный тариф. <br/>
2. Выбираем желаемый облачный сервис. <br/>
3. Выбираем месторасположение ближайшего сервера. <br/>
4. Бесплатный тариф позволяет выбрать объём не больше 512 Мб поэтому пропускаем пункт. <br/>
5. Бесплатный тариф не предоставляет Backup так что пропускаем пункт. <br/>
6. Выбираем название виртуального облака или оставляем название по умолчанию. <br/>
7. Проверяем, чтобы оставалась надпись "Free" и подтверждаем создание виртуального облака. <br/>

[![imgonline-com-ua-2to1-Rr-JJw-FDrc-Ug-Q.png](https://i.postimg.cc/Gm77p3Yj/imgonline-com-ua-2to1-Rr-JJw-FDrc-Ug-Q.png)](https://postimg.cc/ts6tSjB1)

Ожидаем пока сформируется база данных: <br/>
*Создание виртуального облака может занимать от 3 до 5 минут.* <br/>

[![9.png](https://i.postimg.cc/Vk6g2yT0/9.png)](https://postimg.cc/mtv7FnTT)

Доступ к базе данных: <br/>
*После того, как сформируется база данных, переходим в графу "Доступ к базе данных".* <br/>

[![10.png](https://i.postimg.cc/CxQ7gPTP/10.png)](https://postimg.cc/v45f7vmf)

Создаём нового пользователя: <br/>

[![11.png](https://i.postimg.cc/DZqP17WH/11.png)](https://postimg.cc/1n3FQhrr)

Вводим логин и пароль пользователя: <br/>
*Остальные параметры оставляем по умолчанию.* <br/>

[![12.png](https://i.postimg.cc/L52BTGLX/12.png)](https://postimg.cc/hzZd4yCW)

Переходим в графу "Доступ адресов": <br/>

[![12.png](https://i.postimg.cc/mk43ZKr4/12.png)](https://postimg.cc/G8MTq7Yg)

Добавляем новый IP-address: <br/>

[![14.png](https://i.postimg.cc/W1hmXGFM/14.png)](https://postimg.cc/Xr6yvygJ)

Выбираем вариант IP-address: <br/>
В базу данных есть варианты IP-adresss, с которого возможен вход в базу данных. <br/>
*Вы можете выбрать кнопку "Add current in adress" если хотите добивить только IP-address вашего местоположения.* <br/>
*В примере выбрана кнопка "Allow access from anywhere", для простоты доступа к базе данных.* <br/>

[![15-6.png](https://i.postimg.cc/pVCDvGKf/15-6.png)](https://postimg.cc/8sFFBbKc)

Проверяем статус IP-address и переходим в базу данных: <br/>
*Статус должен быть изменен с "pending" на "active".* <br/>

[![16.png](https://i.postimg.cc/Fsn3dYW1/16.png)](https://postimg.cc/rKxK7wLL)

Нажимаем на кнопку "Connect" (подключиться): <br/>

[![17.png](https://i.postimg.cc/6p2RdBgc/17.png)](https://postimg.cc/RWmNmxMJ)

Выбираем пункт "Connect to your application" (подключиться к Вашему приложению): <br/>

[![18.png](https://i.postimg.cc/Pq1wR2t8/18.png)](https://postimg.cc/675q7V49)

Коппируем URL-ссылку подключения к базе данных MongoDB: <br/>

[![19.png](https://i.postimg.cc/76VTxhJH/19.png)](https://postimg.cc/k625snyz)

*Вместо < password> нужно ввести Ваш пароль.* <br/>
*При желаии можно изменить название базы данных. Делается это следующим образом:* <br/>
*1. Берём наш URL mongodb+srv://Sproftestbot111:< password>@cluster0.b53ub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority.* <br/>
*2. Стираем часть URL-адреса - myFirstDatabase?retryWrites=true&w=majority.* <br/>
*3. Добавляем своё название базы данных заместо myFirstDatabase.* <br/>
*4. Конечный вид URL-адреса должен иметь следующий вид - mongodb+srv://Sproftestbot111:Sproftestbot111@cluster0.b53ub.mongodb.net/Sproftestbot.* <br/>

## Формируем config.js с уникальными данными

Cоздаём файл config.js:

[![1.png](https://i.postimg.cc/s2VbCfw6/1.png)](https://postimg.cc/hX529nFT)


```node
module.exports = {
    TOKEN: '1974489742:AAEvwm267ee6duI1FnbozyhHEYxlSs5sEdg',
    DB_URL: 'mongodb+srv://Sproftestbot111:Sproftestbot111@cluster0.b53ub.mongodb.net/Sproftestbot111'
}
```

Эти данные используются в файле `init.js`. <br/>
*Файл `init.js` это точка входа в приложение.*


Подключаем `сonfig.js` в наш главный файл `index.js` <br/>

```node
const config = require('./config')
```

Проверяем первый аргумент класса TelegramBot: <br/>
```node
const bot = new TelegramBot(config.TOKEN, {
    polling: true
})
```

Проверяем первый аргумент метода connect библиотеки mongoose: <br/>
```node
const connect = mongoose.connect(config.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
```

## Загрузка данных в MongoDB

Практика показала, что организовывать загрузку данных через чат с Telegram ботом является не практичным решением, а формировать обработку загружаемых данных через CRUD это создание двух отдельных приложений, когда задача стоит - монолит.

---

Загрузка происходит через локальные файлы формата json. Они находятся в папке db поделены по соотвествующим разделам. <br/>
Проверяем их наличие:

[![1.png](https://i.postimg.cc/Mpsz60DR/1.png)](https://postimg.cc/MnjCtQgK)

Подключаем пакет mongoose и создаем модель для каждого файла db: <br/>

[![2.png](https://i.postimg.cc/rp3cW87w/2.png)](https://postimg.cc/Ny6Wvwg3)

Каждый файл состоит из подключаемой схем, в которой заполняется форма данных:

```node
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    project_name: {
        type: String,
        required: true
    },
    object_name: {
        type: String,
        required: true
    }
    ...
})

mongoose.model('project', ProjectSchema)
```

Подключаем все модели (или конкретную, если нужно исправить данные одного раздела) в файл `index.js`: <br/>
*В приложении, для дополнительной декомпозиции данных все данные собираются в один `index.js`, а после, с помощью деструктуризации подключаются к главному файлу `index.js`*.

```node
require('./models/project.model')
const Project = mongoose.model('project')
```

Коппируем нужную функцию для конкретной коллекции. в главный файл `index.js` и сохраняем файл. После этого функция должна пробежаться по всем аргументам `db` файла и после сохранить их в MongoDB базе данных. <br/>
**После успешной загрузки данных, во избежания коппирования данных в базе данных, удалите функцию заполнения данных** <br/>
*Пример наведён для одного типа раздела данных*

[![3.png](https://i.postimg.cc/MK5S50g4/3.png)](https://postimg.cc/ppm4XjWY)

```node
const db_project__school = require('./db/db_projects/db_projects__school.json')
db_project__school.projects__school.forEach(p => new Project(p).save().catch(e => console.log(e)))
```
*При большом количестве данных лучше разделять данные на дополнительные коллекции, чтобы избежать перенасыщения документами и не усложнять запросы выборки.*

---

Итоговый результат выглядит так:

[![4.png](https://i.postimg.cc/rpjjYJSd/4.png)](https://postimg.cc/5HH8X8K1)

# Возможности бота

Задачи проекта состоят из следующей целей:<br/>
1. Иметь доступ ко всем материалов проектов, которые реализовываются сейчас или реализовались в прошлом закрытой группе сотрудников, которые находятся на выезде. <br/>
2. Иметь доступ к оборудованию, которое поставляется компанией. <br/>
3. Иметь доступ к реестру проектов. Реестр проектов - это онлайн Excel таблица, которая заполняется разными сотрудниками параллельно, регистрируя там изменения или етапы выполнения конкретных проектних продаж. <br/>
4. Иметь доступ к статистике проектов. Статистика проектов - это онлайн Excel таблица, которая заполняется разными соттрудниками паралельно, регистрируя уровень продаж тех или иных продуктов компании, а также другие виды статистики по товарам, такие как поставки по регионам и так далее.

## Запуск бота

Вводим название "S-Prof.Інформаційний бот" в поисковик Telegram. Поскольку я уже его запускал, а после удалил чат с ботом, то Telegram предлагает мне перезапустить бота. Вам Telegram предложит начать. Нажимаем кнопку `Start`. <br/>

Поскольку бот должен быть закрытым, то все комманды покрываются условием, где истинна - это username сотрудников, а ложь - любой `username` не входящий в перечень сотрудников. <br/>

Логика кнопки `Start`: 

```node
bot.onText(/\/start/, msg => {
    if (msg.chat.username !== 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__cry)
        bot.sendMessage(chat_id, command_text__start__error)
    } else if (msg.chat.username === 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, command_text__start_success, {
            reply_markup: {
                keyboard: keyboard.home,
                resize_keyboard: true
            }
        })
    }
})
```

В случае истины пользователь получит: <br/>

[![1.gif](https://i.postimg.cc/s2T4s4wt/1.gif)](https://postimg.cc/qtC3GyfL)

В случае лжи пользователь получит: <br/>

[![2.gif](https://i.postimg.cc/43v2Rc9c/2.gif)](https://postimg.cc/5H0Sw6p9)

Код других вводных комманд аналогичен. Другие вводные комманды: <br/>
*Название и обозначения написаны в таблице также, как в приложении (на укринском языке), описание же комманд обусловлено пояснительной запиской README.md* <br/>

|    Название комманды   | Короткое обозначение |             Короткое описание                |
| :--------------------: | :------------------: | ---------------------------------------------|
|         Почати         |        /start        |            Запускает чат с ботом             |
|        Допомога        |        /help         |   Предоставляет короткую инструкцию о боте   |
|         Проект         |       /project       |       Открывает меню с проектами             |
|         Товар          |       /product       |        Открывает меню с товарами             |
| Статистика по об'єктам |      /statistic      | Отправить ссылку на "статистику по объектам" |
|     Реєстр об'єктів    |      /registry       |    Отправить ссылку на "реестр объектов"     |

## Главное меню

Клавиатура home состоит из 6 клавиш: <br/>
1. Найти проект. <br/>
2. Скачать проект. <br/>
3. Найти товар. <br/>
4. Актуальные товары. <br/>
5. Статистика по объектам. <br/>
6. Реестр объектов. <br/>

## "Проекти"

Если необходимы короткая информация по объекту, в том числе и геоположение необходимо использовать путь через клавишу "Проекты". <br/>
Если необходимо получить полные данные об проекте необходимо использовать шифр проекта. <br/>

### Получение короткой информации о проекте

#### Клавиша "Проекти" 

При нажатии на клавишу "Знайти проект" срабатывает следующий блок кода: <br/>

```node
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
      }
})
```
Где:  <br/>
- `bot.on('message', msg => {}` - прослушиватель события "message", экземпляра класса `Telegram bot`. <br/>
При срабатывании события emitter `Telegram Bot` отправляет на сервер следующие данные:  <br/>
    ```node
    {
        message_id: 15818,
        from: {
            id: <id_user>,
            is_bot: false,
            first_name: '<first_name>',
            last_name: '<last_name>',
            username: '<username>',
            language_code: 'ru'
        },
        chat: {
            id: 890217003,
            first_name: '<first_name>',
            last_name: '<last_name>',
            username: '<username>',
            type: 'private'
        },
        date: 1630923217,
        text: 'Проекти'
    }
    ```
- `function__get_chat_id.get_chat_id(msg)` - функция возвращающая `msg.chat.id`. `msg.chat.id` - ID чата бота и пользователя.  <br/>
- `switch (msg.text)` - переключатель, который реагирует на значение `msg.text`. <br/>
- `bot.sendMessage(chat_id, command_text__projects, options)` - метод `SendMessage` класса `bot` отправляющий пользователю сообщение. Принимающий 3 параметра:
    - `сhat_id` - обязательный параметр. ID чата бота и пользователя. Он же `msg.chat.id`. Он же `function__get_chat_id.get_chat_id(msg)`. <br/>
    - `command_text__projects` - обязательный параметр. Текст сообщения.  <br/>
    - `options` - необязательный параметр. Объект принимающий ряд параметров. Подробнее о параметрам смотрите [Официальную документацию Telegram](https://core.telegram.org/bots/api#sendmessage).  <br/>
- `reply_markup` - параметр объекта `options`, добавляющий интерфейс клавиатур. <br/>
- `keyboard` - подпараметр параметра `reply_markup` принимающий клавиатуру, в нашем примере `keyboard.projects`. Подробнее о клавиатурах смотрите [Официальную документацию Telegram](https://core.telegram.org/bots/api#replykeyboardmarkup). <br/>
- `resize_keyboard: true` - Boolean подпараметр параметра `reply_markup` принимающий `true` (по умолчанию `false`) и отвечающий за коректировку размера клавиатур в зависимости от устройства пользователя.  <br/>
- `one_time_keyboard: true` - Boolean подпараметр параметра `reply_markup` принимающий `true` (по умолчанию `false`) и отвечающий за скрытие клавиатуры после использования.  <br/>

*Код других клавиш главного меню ([смотреть перечень клавиш главного меню](#)) аналогичен клавише "Скачать проект"*  <br/>

**Реализация кода**

[![1.gif](https://i.postimg.cc/9FRYd9Jh/1.gif)](https://postimg.cc/1fSFPfkC)

#### Необходимый тип объекта

В приложение заложено следующие типы объектов:  <br/>

| **Меню** | **Команды** |
| :-----: | :----------: |
| Проекти | Дитячі садочки |
| Проекти | Школи |
| Проекти | НВК та НВО |
| Проекти | Ліцеї |
| Проекти | Коледжі |
| Проекти | Об'єкти Finishing |
| Проекти | Фабрики-кухні |
| Проекти | Виставки |

При нажатии на любой из типов проектов, срабатывает следующий блок кода (на примере типа объектов - Объ'єкти Finishing):  <br/>
```node
bot.on('message', msg => {
    const chat_id = function__get_chat_id.get_chat_id(msg)
    switch (msg.text) {
        case kb.projects.finishing:
            send_project(chat_id, { type: 'Finishing' })
            break
        case kb.projects.school:
            send_project(chat_id, { type: 'Школа' })
            break
            ...
    }
})
```
Где:  <br/>
- `bot.on('message', msg => {})` - прослушиватель события `message`, экземпляра класса `TelegramBot`. <br/>
- `function__get_chat_id.get_chat_id(msg)` - функция возвращающая `msg.chat.id`. `msg.chat.id` - ID чата бота и пользователя.  <br/>
- `switch (msg.text)` - переключатель, который реагирует на значение `msg.text`.  <br/>
- `case kb.projects.finishing` - значение реагирующее на событие `msg.text`, когда `msg.text == 'Об\'єкти-Finishing'`.  <br/>
-  `send_project(chat_id, query)` - функция, отправляющая проект в зависимости от запроса (query). Функция принимает два параметра:  <br/>
    - `сhat_id` - обязательный параметр. ID чата бота и пользователя. Он же `msg.chat.id`. Он же `function__get_chat_id.get_chat_id(msg)`.  <br/>
    - `query` - обязательный параметр. Строка `msg.text`, которая принимается функцией `send_project` для применения внутри функции.  <br/>

Второй параметр функции `send_project(chat_id, { type: 'Finishing' })` под капотом реализовывает передачу `msg.text` в метод модели `Project` - `find`, который выполняет запрос в базу данных `Project` и выдаёт результат в виде всех объектов, где значение `'Finishing'` равно для ключа `type`.  <br/>

*Функция `send_project(chat_id, query)`* <br/> 

Функция описана в отдельном файле - `send_project__by_query.js`, полный блок кода выглядящий так: <br/>
```node
const stickers = require('../helpers/stickers')
const bot = require('../init')
const text_project_by_type__query = require('../message_text/text_project_by_type__query')
const mongoose = require('mongoose')
require('../models/project.model')
const Project = mongoose.model('project')

function send_project(chat_id, query) {
    Project.find(query).then(projects => {
        bot.sendSticker(chat_id, stickers.hot_cherry__presents)
        bot.sendMessage(chat_id, text_project_by_type__query)

        const html = projects.map((k, i) => {
            return `<strong>Назва:</strong> ${k.object_name}.
<strong>Локація:</strong> ${k.city}.
<strong>Штамп:</strong> ${k.stamp}.
<strong>Деталі:</strong> /k${k.uuid}. \n`}).join('\n')

        bot.sendMessage(chat_id, html, {
            parse_mode: 'HTML'
        })
    })
}

module.exports = send_project
```
Где: <br/>
*Подключаемые модули* <br/>
- `const stickers = require('../helpers/stickers')` - модуль, в котором указаны `file_id` используемых стикеров. <br/>
- `const bot = require('../init')` - модуль класса `bot`, который необходим для обработки методов `sendSticker` и `sendMessage`. <br/>
- `const text_project_by_type__query = require('../message_text/text_project_by_type__query')` - модуль с текстом, для отправки сообщения с помощью метода `sendMessage`.<br/>
- `const mongoose = require('mongoose')` - модуль `mongoose`, который поддерживает методы `model` и `Schema`. <br/>
- `require('../models/project.model')` - модуль, подключающий `model` проектов. <br/>
- `const Project = mongoose.model('project')` - присваивание переменной `Project` метода `model`. <br/>

*Методи функции `send_project(chat_id, query)`* <br/>
- `Project.find(query)` - метод `find` формирующий результат выборки из массива объектов, у которых значения запроса совпадает с запросом документа в коллекции `Project`. <br/>
- `then(project => {})` - модели `mongoose` возвращают `Promise`. В случае успешного выполнения `Promise` возвращает `resolve` с массивом объектов, где название массива - `project`. <br/>
- `bot.sendSticker(chat_id, stickers.hot_cherry__presents)` - метод `sendSticker` класса `bot` отправляющий пользователю стикер. Примающий 2 параметра:  <br/>
    - `сhat_id` - обязательный параметр. ID чата бота и пользователя. Он же `msg.chat.id`. Он же `function__get_chat_id.get_chat_id(msg)`. <br/>
    - `stickers.hot_cherry__presents` - обязательный параметр. `file_id` стикера. <br/>
    *`file_id` - это уникальный идентификатор файла, который является разным для разных чатов, поэтому для формирования собственных `file_id` для стикеров необходимо добавить следующий код в главный файл `index.js` и отправить все необходимые стикеры для бота. В результате отправки Вы получите название стикера и его `file_id`. Также стоит добавить, что `Telegram` поддерживает различные способы отправки стикера. Подробнее об отправке стикеров смотрите в [официальной документации Telegram](https://core.telegram.org/bots/api#sendsticker)*.<br/>
    ```node
    bot.on('message', msg => {
        console.log(msg.document.file_name)
        console.log(msg.document.file_id)
    })
    ```

- `bot.sendMessage(chat_id, text_project_by_type__query)` - метод `SendMessage` класса `bot` отправляющий пользователю сообщение. Принимающая 2 параметра:
    - `сhat_id` - обязательный параметр. ID чата бота и пользователя. Он же `msg.chat.id`. Он же `function__get_chat_id.get_chat_id(msg)`. <br/>
    - `text_project_by_type__query` - обязательный параметр. Текст сообщения. <br/>
- `const html = projects.map((k, i) => {})` - текст сообщения, который состоит из строчного текста и значений объектов массива развёрнутых методом `map`. <br/>

**Реализация кода**

[![2.gif](https://i.postimg.cc/L6vvrkgP/2.gif)](https://postimg.cc/PPpmDw4f)

#### **Выбор конкретного проекта исходя из ID**

---

Ранее мы смогли вывести массив объектов, где есть активная ссылка. Эта ссылка сформирована за счёт команды и уникального идентификатора документа в коллекции `Project`, а сама команда выводит сформированный объект информации о проекте.  <br/>

*Команда отправки конкретного проекта исходя из ID* <br/>

Код комманды состоит с включением функции создания активной ссылки и выгляди так: <br/>
```node
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
```
Где: 
- `bot.onText(/\/k(.+)/, (msg, [source]) => {})` - функция разворачивающая результата выборки `Project.findOne({ uuid: projectUuid })`. <br/>
- `get_item_uuid__function.get_item__with__two_letter_uuid(source)` - функция создания активной ссылки принимающая `source` - `msg.text` отправляемый пользователем при нажатии на ссылку ID проекта. *Функция создания активной ссылки описана ниже*. <br/>
- `сhat_id` - обязательный параметр. ID чата бота и пользователя. Он же `msg.chat.id`. Он же `function__get_chat_id.get_chat_id(msg)`. <br/>
- `Project.findOne({ uuid: projectUuid })` - метод `findOne` формирующий результат выборки из объекта у которого значения запроса совпадает с запросом документа в коллекции `Project`. <br/>
- `then(project => {})` - модели `mongoose` возвращают `Promise`. В случае успешного выполнения `Promise` возвращает `resolve` с объектом, где название объекта - `project`. <br/>
- `bot.sendMessage(chat_id, project_text, {})` -  метод `SendMessage` класса `bot` отправляющий пользователю сообщение. Принимающий 3 параметра:
    - `сhat_id` - обязательный параметр. ID чата бота и пользователя. Он же `msg.chat.id`. Он же `function__get_chat_id.get_chat_id(msg)`. <br/>
    - `project_text` - обязательный параметр. Текст сообщения.  <br/>
    - `options` - необязательный параметр. Объект принимающий ряд параметров. Подробнее о параметрам смотрите [Официальную документацию Telegram](https://core.telegram.org/bots/api#sendmessage).  <br/>
- `text` - ключ принимающий значение сформированого текста `project_text` с данными из объекта `project`. <br/>
- `parse_mode: 'HTML'` - 'HTML' - режим разбора сущности текста `project_text`. <br/>
- `reply_markup` - параметр объекта `options`, добавляющий интерфейс клавиатур.  <br/>
- `inline_keyboard` - подпараметр параметра `reply_markup` принимающий встроенную клавиатуру. Подробнее о клавиатурах смотрите [Официальную документацию Telegram](https://core.telegram.org/bots/api#replykeyboardmarkup). <br/>
- `text: 'Показати на карті'` - название клавиши встроеной клавиатуры.
- `callback_data: JSON.stringify({})` - данные обратного вызова. Используються для обработки запросов с встроенных клавиатур. <br/>
- `type: ACTION_TYPE.SHOW_PROJECTS_MAP` - тип данных обратного вызова. Нужен для обработки запросов с встроенных клавиатур и подробно рассматривается в подразделе [Краткая информация о проекте](#краткая-информация-о-проекте). <br/>
- `la: project.location.latitude` - данные обратного вызова. Координаты ширины местоположения объекта.  <br/>
- `lo: project.location.longitude` - данные обратного вызова. Координаты долготы местоположения объекта. <br/>

*Создание активной ссылки*
Активная ссылка создаётся путём вырезания части присылаемой строки, оставляя только текст комманды и ID проекта из коллекции `Project`. Код активной ссылки выглядит так: <br/>
```node
    get_item__with__two_letter_uuid(source) {
        return source.substr(2, source.length)
    }
```
Где:
- `get_item__with__two_letter_uuid(source)` - принимает строковое значения `source`. <br/>
- `source.substr(2, source.length)` - возвращает строковое значения `source`, начиная с третьего символа. <br/>

**Реализация кода**

[![3-15-fs.gif](https://i.postimg.cc/Jh7sSJJs/3-15-fs.gif)](https://postimg.cc/21JjZ10Y)

#### Краткая информация о проекте

Детали, которые предоставляются после выбора конкретного ID составляют: <br/>
1. Название проекта. <br/>
2. Шифр проекта. <br/>
3. Тип объекта. <br/>
4. Адрес объекта. <br/>
5. Встроенная клавиатура, которая содержит информацию местоположения объекта в координатах. <br/>

Полный исполняющий код комманды представлен выше, а мы лишь остановимся на куске кода - `callback_data`: <br/>
```node
...
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
    ]
]
...
```
Где:
- `callback_data: JSON.stringify({})` - данные обратного вызова. Используються для обработки запросов с встроенных клавиатур. <br/>
- `type: ACTION_TYPE.SHOW_PROJECTS_MAP` - тип данных обратного вызова. Нужен для обработки запросов с встроенных клавиатур и подробно рассматривается в подразделе [Краткая информация о проекте](#краткая-информация-о-проекте). <br/>
- `la: project.location.latitude` - данные обратного вызова. Координаты ширины местоположения объекта.  <br/>
- `lo: project.location.longitude` - данные обратного вызова. Координаты долготы местоположения объекта. <br/>

Данные обратного вызова используются дальше - в прослушке событий `calback_query` екземпляра класса `Telegram Bot`:
```node
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
    }
})
```
Где: <br/>
- `bot.on('callback_query', query => {})` - прослушка событий реагирующий на события с встроенных клавиатур. <br/>
- `let data` - объект `callback_data`, который приведен к строке методом `JSON.stringify()`. <br/>
- `user_id = query.from.id` - аналог `msg.chat.id` при событиях `message`. <br/>
- `const {type} = data` - деструктуризируем тип данных. <br/>
- `ACTION_TYPE.SHOW_PROJECTS_MAP` - уникальный индентификатор `ACTION_TYPE`, который отправляется в `callback_data` и сравнивается с `ACTION_TYPE` комманды. <br/>
- `const {lo, la} = data` - деструктуризируем долготу и широту из `callback_data`. <br/>
- `bot.sendLocation(query.message.chat.id, lo, la)` - метод `sendLocation` класса `bot` отправляющий пользователю местоположение. Примающий 3 параметра:
    - `query.message.chat.id` - аналог `msg.chat.id` при событиях `message`. <br/>
    - `lo` - данные обратного вызова `project.location.longitude`. Координаты долготы местоположения объекта. <br/>
    - `la` - данные обратного вызова `project.location.latitude`. Координаты ширины местоположения объекта. <br/>

**Реализация кода**

[![4.gif](https://i.postimg.cc/pXN4CBbJ/4.gif)](https://postimg.cc/XX8s7dvr)

### Получение полной информации о проекте
#### Способы узнать шифр проекта

Шифр проекта может быть получен двумя способами: <br/>
1. Через реестр объектов. <br/>
Выбираем комманду "Реестр объектов". <br/>

При нажатии на комманду "Реєстр об'єктів" выполняется следующий код: <br/>
```node
bot.on('message', msg => {
        case kb.home.analytics:
            bot.sendSticker(chat_id, stickers.hot_cherry__clips)
            bot.sendMessage(chat_id, command_text__analytics, {
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
            break
    }
})
```
*Аналогичный код был разобран выше в разделе [Запуск бота](#запуск-бота)* <br/>
В результате работы команды "Реєстр об'єктів" бот нам отправляет гиперссылку на online таблицу в Excel. <br/>

**Реализация кода**

[![1.gif](https://i.postimg.cc/hG1DgTx6/1.gif)](https://postimg.cc/PLNsQLSQ)

Переходим по ссылке и ищешь нужным шифр объекта. <br/>

[![2.png](https://i.postimg.cc/NFY1NWTS/2.png)](https://postimg.cc/sQ6QxHT4)

2. Через команду "Проекти". <br/>
При быстром выборе объекта или при просмотре краткой информации об объекте - есть графа "шифр". <br/>

[![1.png](https://i.postimg.cc/NMvd82zs/1.png)](https://postimg.cc/p9kQRrv4)

#### Полная информация о проекте
При введении шифра, пользователь получает excel спецификацию, pdf и dwg форматы проектов, которые можно сразу же интегрировать в другие приложения, в том числе почта, месседжеры или устройства, такие как принтеры, которые поддерживают WiFi. Вот, что под капотом:
```node
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
```
Где: <br/>
- `bot.on('message', msg => {})` - прослушиватель события `message`, экземпляра класса `Telegram bot`. <br/>
- `if (msg.text === file_id.p_021_2021.project__name)` - условие, при котором вводимый текст пользователем (название шифра) приравнивается к названию шифра из коллекции `Project`. <br/>
- `bot.sendMessage(chat_id, file_id.p_021_2021.caption)` - отправка в определенный чат ID текст сообщения `file_id.p_021_2021.caption`. <br/>
Строковые значения файла `file_id` выглядят так: <br/>

```node
const p_021_2021 = {
    project__name: 'П-021-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoFmEefxbg4-t5qPVlqi91Kjij-QKTAAIZDwACbY7wSF8lvKrt1LCoIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoF2EefzGqEgUmLPTVM_ZUBLiCMasbAAIaDwACbY7wSAO2V6fWLMm5IAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoFWEefwnZf9ijaV6oE6bnEBHM5TwXAAIYDwACbY7wSNtAAAE8oBhSmyAE',
    caption: `Повний перелік інформації за об'єктом: "Дошкільний навчальний заклад № 53", який знаходиться за адресою: в. Райдужна 17, Дніпровський район, м. Київ, Київська область. `
}
```
Где: <br/>
- `project__name` - шифр объекта. <br/>
- `dwg__filename` - краткое описание файла. <br/>
- `dwg` - file_id проекта в формате DWG. <br/>
- `pdf__filename` - краткое описание файла. <br/>
- `pdf` - file_id проекта в формате PDF. <br/>
- `xlsx__filename` - краткое описание файла. <br/>
- `xlsx` - file_id коммерческого приложения (спецификации). <br/>
- `caption` - краткое описание информации с привязкой к объекту. <br/>

**Реализация кода**

[![2.gif](https://i.postimg.cc/Xv7k3Mzb/2.gif)](https://postimg.cc/21MZFtYc)

## Знайти товар
#### Клавиша "Знайти товар"

Клавиша "Товари" имеет под капотом такую же логику как и клавиша ["Проекти"](#проекти). <br/>

**Реализация кода**

[![1.gif](https://i.postimg.cc/fThz8z9L/1.gif)](https://postimg.cc/WtXc3PSL)

#### Небходимый производитель

Под капотом, логика кода выбора необходимого производителя аналогичная switch case подраздела [Клавиша "Проекти"](#клавиша-проекти). Разница лишь в переменных, которые касаются не типов объекта, а названий различных производителей. <br/>
```node
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
        ...
    }
})
```
Где: <br/>
- `bot.sendMessage(chat_id, manufacturer_elframo__text, {})` - метод `SendMessage` класса `bot` отправляющий пользователю сообщение. Принимающий 3 параметра: <br/>
    - `сhat_id` - обязательный параметр. Уникальный ID чата бота и пользователя. Он же `msg.chat.id`. Он же `function__get_chat_id.get_chat_id(msg)`. <br/>
    - `command_text__projects` - обязательный параметр. Текст сообщения.  <br/>
    - `options` - необязательный параметр. Объект принимающий ряд параметров. Подробнее о параметрам смотрите [Официальную документацию Telegram](https://core.telegram.org/bots/api#sendmessage).  <br/>
- `keyboard: keyboard.rational` - подпараметр параметра `reply_markup` принимающий клавиатуру, в нашем примере `keyboard.rational`. Подробнее о клавиатурах смотрите [Официальную документацию Telegram](https://core.telegram.org/bots/api#replykeyboardmarkup).  <br/>


Таблица всех производителей в меню выбора производителя:
|  Меню  | Виробник  |
| :----: | :-------: |
| Товари |  Elframo  |
| Товари |  Samaref  |
| Товари | Rational  |
| Товари |Robot Coupe|
| Товари | RM Gastro |

**Реализация кода**

[![2.gif](https://i.postimg.cc/MTmS4RRp/2.gif)](https://postimg.cc/BLbkPjMr)

#### Необходимый тип товаров
Под капотом, логика кода выбора типа товара аналогичная switch case подраздела [Необходимый тип объекта](#необходимый-тип-объекта). Разница лишь в переменных, которые касаются не типов объекта, а названий различного типа оборудования. <br/>
```node
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
```
Где:
- `bot.on('message', msg => {}` - прослушиватель события "message", экземпляра класса `Telegram bot`. <br/>
- `send_combi_streamer(chat_id, { form: 'Пароконвектомат' })` - функция работающая аналогично функции `send_project`, который подробно расписан в подразделе [Необходимый тип объекта](#необходимый-тип-объекта)  <br/>

Итоговая таблица всех типов оборудования, которые есть у конкретного производителя: <br/>

| **Виробник** | **Тип обладнання** |
| :--------: | :--------------: |
| Elframo | Котломийні машини |
| Elframo | Посудомийні машини |
| Elframo | Стаканомийні машини |
| Samaref | Камери шокового холодження та замороження |
| Samaref | Холодильні столи |
| Samaref | Холодильні шафи |
| Rational | Пароконвектомати |
| Rational | Мультифункціональні сковороди |
| Robot Coupe | Robot Cook |
| Robot Coupe | Бліксери |
| Robot Coupe | Кухонні комбайни |
| Robot Coupe | Міксери |
| Robot Coupe | Овочерізки |
| Robot Coupe | Кутери |
| RM Gastro | Грилі |
| RM Gastro | Фритюрниці |
| RM Gastro | Макароноварки |
| RM Gastro | Сковороди |
| RM Gastro | Марміти |
| RM Gastro | Плити |
| RM Gastro | Травні котли |

**Реализация кода**

[![3.gif](https://i.postimg.cc/Nfyn2mM2/3.gif)](https://postimg.cc/Tp60ZynT)

#### Выбор конкретного товара исходя из ID

Под капотом, логика кода выбора типа товара аналогичная подраздела [Выбор конкретного проекта исходя из ID](#выбор-конкретного-проекта-исходя-из-id), но с дополнением логики модели пользователя, о которой будет в следующем разделе.  <br/>

## Актуальные товары

#### Добавление товара в актуальное

Блок кода выбора конкретного товара исходя из ID скрывает одну тонкость. Весь код: <br/>
```node
bot.onText(/\/p(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__two_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)

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
```
Где:
- `bot.onText(/\/p(.+)/, (msg, [source]) => {})` - функция разворачивающая результата выборки `combi_streamer__rational.findOne({ uuid: product_uuid })` и `User.findOne({ telegram_id: msg.from.id })`. <br/>
- `get_item_uuid__function.get_item__with__two_letter_uuid(source)` -  функция создания активной ссылки принимающая `source` - `msg.text` отправляемый пользователем при нажатии на ссылку ID проекта. <br/>
- `chat_id` - обязательный параметр. ID чата бота и пользователя. Он же `msg.chat.id`. Он же `function__get_chat_id.get_chat_id(msg)`. <br/>
- `Promise.all([])` - метод `all` выполняющий результат когда лишь после выполения всех `Promise`.
- `combi_streamer__rational.findOne({ uuid: product_uuid })` -  метод `findOne` формирующий результат выборки из объекта у которого значения запроса совпадает с запросом документа в коллекции `combi_streamer__rational`. <br/>
- `User.findOne({telegram_id: msg.from.id})` - метод `findOne` формирующий результат выборки из объекта у которого значение `telegram_id` проверяется на совпадение с запросом ID чата пользователя. 
- `.then(([combi_streamer__rational, user]) => {})` - после успешного завершения всех `Promise` принимает объект `combi_streamer__rational` и `user` в той последовательности, в которой `Promise` написаны в коде.
- `bot.sendPhoto(chat_id, combi_streamer__rational.picture, {})` - метод `sendPhoto` класса `bot`, который отправляет пользователю фото товара. Принимающий 3 параметра:
    - `chat_id` - ID чата пользователя и бота.
    - `combi_streamer__rational.picture` - динамическая ссылка на картинку `combi_streamer__rational` 
    - `{}` - обязательный параметр. Объект `оptions`, принимающий различные под параметры. В случае отправки фото без параметров, необходимо отправить пустой объект. 
- `caption: caption` - ключ принимающий значение строчного текста.
- `parse_mode: 'HTML'` - преобразование кода в размертку HTML.
- `reply_markup: {}` - объект позволяющий формировать разные виды клавиатур.
- `inline_keyboard: []` - объект встроенной клавиатуры.
- `text: 'На офіційний сайт',` - текст клавиши встроенной клавиатуры.
- `url: combi_streamer__rational.link` - гиперссылка перенаправляющая пользователя на официальный сайт.
- `text` - ключ принимающий значение флага `fav_text`.
- `callback_data: JSON.stringify({})` - данные обратного вызова. Используються для обработки запросов с встроенных клавиатур. <br/>
- `type: ACTION_TYPE.TOOGLE_FAV_COMBI_STREAMERS` - тип данных обратного вызова. Нужен для обработки запросов с встроенных клавиатур и подробно рассматривается в подразделе [Краткая информация о проекте](#краткая-информация-о-проекте). <br/>
- `product_uuid` - ключ принимающий значение обратного вызова `product_uuid`. 
- `is_fav: is_fav` - ключ принимающий значение обратного вызова `is_fav`.


Наш кусочек кода - переключатель флага актуального товара.  <br/>
```node
        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

```
Где:
- `is_fav` - тернарное выражение переключатель, которое передаётся дополнительно в `callback_data`. <br/>
- `fav_text` - изменяемое состояние товара, в зависимости от его флага `is_fav` <br/>

#### Отправка callback_data

Отправка callback_data аналогична отправки callback_data с включением данных геопозиции проекта, который описан в подразделе [Краткая информация о проекте](#краткая-информация-о-проекте) <br/>
```node
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
```
Где:
- `callback_data` - данные обратного вызова, отправляемые при событиях, которые происходят в встроенных клавиатурах.  <br/>
- `type: ACTION_TYPE.TOOGLE_FAV_COMBI_STREAMERS` - тип события, определяющий события определённой команды передаваемый в данные обратного вызова. <br/>
- ` product_uuid` - ключ ID товара передаваемого значением `product_uuid` в данные обратного вызова. <br/>
- `is_fav: is_fav` - ключ значения состояния товара - "Добавлено" или "Удалено" передаваемый в данные обратного вызова. <br/>

**Реализация кода**

[![1.gif](https://i.postimg.cc/pL47YtkZ/1.gif)](https://postimg.cc/k2Nfqz06)

#### Обработка callback_query
`callback_data Telegram` позволяет передать только порядка 64 байта, поэтому всю логику кода необходимо выносить в отдельную функцию, которая принимает лишь данные обратного вызова. Блок кода принимающая данные обратного вызова и передающая их в функцию переключения актуального продукта показан ниже: <br/>
```node
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
    } 
})
```
Где:  <br/>
- `bot.on('callback_query', query => {})` - прослушка событий реагирующий на события с встроенных клавиатур. <br/>
- `let data` - объект `callback_data`, который приведен к строке методом `JSON.stringify()`. <br/>
- `user_id = query.from.id` - аналог msg.chat.id при событиях `message`. <br/>
- `const {type} = data` - деструктуризируем тип данных. <br/>
- `ACTION_TYPE.TOOGLE_FAV_COMBI_STREAMERS` - уникальный индентификатор `ACTION_TYPE`, который отправляется в `callback_data` и сравнивается с `ACTION_TYPE` комманды. <br/>
- `toogle_favourite_product(user_id, query.id, data)` - функция переключения актуального товара, которая принимает 3 параметра: <br/>
    - `user_id` - ID чата в который бот должен будет ответить. <br/>
    - `query.id` - ID чата запроса, который посылается пользователем боту. <br/>
    - `data` - данные обратного вызова передаваемые в подпараметре `callback_data`. <br/>


Функция `toogle_favourite_product(user_id, query.id, data)` вынесенная в отдельный файл, код которой указан ниже: <br/>
```node
const bot = require('../init')
const mongoose = require('mongoose')
require('../models/user.model')
const User = mongoose.model('users')

function toogle_favourite_product(user_id, queryId, {product_uuid, is_fav}) {

    User.findOne({telegram_id: user_id})
    .then(user => {
        if (user) {
            if (is_fav) {
                user.products = user.products.filter(pUuid => pUuid !== product_uuid)
            } else {
                user.products.push(product_uuid)
            }
            userPromise = user
        } else {
            userPromise = new User({
                telegram_id: user_id,
                products: [product_uuid]
            })
        }

        const answerText = is_fav ? 'Видалено' : 'Додано'
        userPromise.save().then(_ => {
            bot.answerCallbackQuery(queryId, {
                callback_query_id: queryId,
                text: answerText
            })
        }).catch(e => console.log(e))
    }).catch(e => console.log(e))
}

module.exports = toogle_favourite_product
```
Где: <br/>
- `const bot = require('../init')` - подключение модуля с классом `bot` для реализации методов `answerCallbackQuery`. <br/>
- `const mongoose = require('mongoose')` - подключение модуля `mongoose` для возможности работать с моделью `users`. <br/>
- `require('../models/user.model')` - подключение модуля с моделью `users`. <br/>
- `const User = mongoose.model('users')` - присваивание переменной для модели `users`. <br/>
- `function toogle_favourite_product(user_id, queryId, {product_uuid, is_fav}) {})` - функция переключатель состояния актуального или неактуального товара. Принимает 3 параметр: <br/>
    - `user_id` - обязательный параметр. чат ID, по которому бот должен будет ответить. <br/>
    - `queryId` - обязательный параметр. чат ID запроса, который приходит боту от пользователя. <br/>
    - `data` - обязательный параметр. Данные обратного вызова: `product_uuid` - необходим для определения ID товара, `is_fav` - флаг переключения актуальности товара. <br/>
- `User.findOne({telegram_id: user_id})` - метод `findOne` модели `User`, который находит пользователя по его ID. <br/>
- `then(user => {})` - модель `User` возвращает `Promise`, который при `resolve` предоставляет объект - `user`. <br/>
- `if (user) {})` - условие наличие или отсутствие объекта `user`. <br/>
- `if (is_fav) {})` - условие проверки наличие или отсутствие товара по его ID. <br/>
- `userPromise = user` - забирание объекта `user` для последующего складирование данных в массив. <br/>
- `userPromise = new User({})` - переопределение модели `User` с включением результатов работы функции `toogle_favourite_product`. <br/>
- `telegram_id: user_id,` - записывание уникального ID чата в ID чата `user`. <br/>
- `products: [product_uuid]` - массив актуальных товаров. <br/>
- `const answerText = is_fav ? 'Видалено' : 'Додано'` - строковый текст флага переключателя исходя из состояния товара. <br/>
- `userPromise.save().then(_ => {})` - метод `save` библиотеки `mongoose` которая сохраняет объект в коллекцию `User`. При успешном сохранении вызывается метод `then`, без параметров, поскольку задача `then` - сделать синхронный участок ответа запроса обратного вызова c помощью метода `answerCallbackQuery` класса `bot`. <br/>
- `bot.answerCallbackQuery(queryId, {})` - метод класса `bot` отправляющий пользователю ответ, на отработанный запрос обратного вызова. Принимает 2 параметр: <br/>
  - `callback_query_id` - обязательный параметр. ID запроса. <br/>
  - `text` - текстовое сообщения, которое бот ответит пользователю в ответ на запрос обратного вызова. <br/>

**Реализация кода**

[![2.gif](https://i.postimg.cc/bwxY4LM1/2.gif)](https://postimg.cc/RW0zH1v0)

#### Клавиша "Актуальні товари"

Клавиша срабатывает на ранее описаный `switch case`, по аналогии с клавишами ["Проекти"](#) или ["Товари"](#), но результат отрабатывания функции - вызов функций, которые показывают актуальные товары выбранных пользователем. Блок кода описан ниже:
```node
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
```
Где:
- `bot.on('message', msg => {})` - прослушиватель события `message`, экземпляра класса `Telegram bot`. <br/>
- `const chat_id = function__get_chat_id.get_chat_id(msg)` - функция возвращающая `msg.chat.id`. `msg.chat.id` - ID чата бота и пользователя. <br/>
- `switch(msg.text) {})` - переключатель, который реагирует на значение `msg.text`. <br/>
- `case kb.home.actualy: ` - значение реагирующее на событие `msg.text`, когда `msg.text == 'Актуальні товари'`. <br/>
- `show_favourite__combi_streamer__rational(chat_id, msg.from.id)` - функция показывающая актуальные товары типа оборудования`combi_streamer__rational`. <br/>

*Функция отвечающая за показ данных актуальных товаров* <br/>
Функция описана в отдельном файле и интегрируется в главный файл. Блок кода описывающий показ актуальных товаров для пароконвектоматов производителя Rational: <br/>
```node
const send_html = require('../../function__send_html')

const mongoose = require('mongoose')
const {combi_streamer__rational} = require('../../../models/heating_equipment__rational/index')
require('../../../models/user.model')
const User = mongoose.model('users')

function show_favourite__combi_streamer__rational(chat_id, telegram_id) {
    User.findOne({telegram_id})
    .then(user => {
        if (user) {
            combi_streamer__rational.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((p, i) => {
                        return `${p.form} ${p.manufacturer} ${p.name}  
Деталі: /p${p.uuid}`}).join('\n')
                    send_html(chat_id, html, 'home')
                } 
            })
        } 
    })
}

module.exports = show_favourite__combi_streamer__rational
```
Где: 
- `const send_html = require('../../function__send_html')` - подключения модуля с функцией обработчиком, будет описана ниже.
- `const mongoose = require('mongoose')` - подключение модуля `mongoose` для возможности работать с моделью `users`. <br/>
- `const {combi_streamer__rational} = require('../../../models/heating_equipment__rational/index')` - подключение модуля модели пароконвектомата `const {combi_streameer__rational}`.
- `require('../../../models/user.model')` - подключение модуля с моделью `users`. <br/>
- `const User = mongoose.model('users')` - присваивание переменной для модели `users`. <br/>
- `function show_favourite__combi_streamer__rational(chat_id, telegram_id) {})` - функция, которая переключает флаг актуальности и показывающая массив актуальных товаров типа `combi_streamer__rational`. Принимающая 2 параметра:
    - chat_id - ID чата пользователя с ботом.
    - telegram_id - ID пользователя в модели `User`
- `User.findOne({telegram_id})` -  метод `findOne` модели `User`, который находит пользователя по его ID. <br/>
- `then(user => {})` - модель `User` в случае успешного выполнения `Promise` возвращает объект `user` с последующим выполнением кода, написанным внутри метода `then`.
- `if (user) {}` - условие проверки существования пользователя. Если есть - выполняется код `combi_streamer__rational.find({uuid: {'$in': user.products}})`.
- `combi_streamer__rational.find({uuid: {'$in': user.products}})` - метод `find` модели `combi_streamer__rational`, который с помощью оператора `$in` выбирает массив данных в модели `user`, который совпадает с ID запроса. 
- `then(products => {})` - модель `combi_streamer__rational` в случае успешного выполнения `Promise` возвращает объект `user` с последующим выполнением кода, написанным внутри метода `then`. 
- `if (products.length) {}` - условие проверки длины массива.
- `html = products.map((p, i)` - строковый текст.
- `send_html(chat_id, html, 'home')` - функция преобразовывающая переменную `html` в нужный parse_mode и отправляющая сообщения пользователю с помощью метода `sendMessage` класса `bot`. Полный блок кода ниже:

*функция-преобразователь sendMessage*
Функция описанная в отдельном файле и имеет такую структуру кода:
```node
const bot = require('../init')
const keyboard = require('../keyboards/keyboards') 

function send_html(chat_id, html, kb_name = null) {
    const options = { parse_mode: 'HTML'}

    if (kb_name) {
        options['reply_markup'] = {
            keyboard: keyboard[kb_name]
        }
    }

    bot.sendMessage(chat_id, html, options)
}

module.exports = send_html
```
Где: <br/>
- `const bot = require('../init')` - подключение модуля с классом `bot` для реализации метода `sendMessage`. <br/>
- `const keyboard = require('../keyboards/keyboards') ` - подключение модуля с интерфейсами клавиатур. <br/>
- `function send_html(chat_id, html, kb_name = null)` - функция отправляющая клавиатуру. Принимающая 3 параметра: <br/>
    - `chat_id` - обязательный параметр. ID чата пользователя и бота. <br/>
    - `html` - обязательный параметр. Строковый текст. <br/>
    - `kb_name = null` - необязательный параметр. Принимает значение названия клавиатуры. По умолчанию - null. <br/>
- `const options = { parse_mode: 'HTML'}` - переменная с включение парсера 'HTML'. <br/>
- `if (kb_name) {}` - если `kb_name !== null`, то отправляет клавиатуру с определенным парсером. <br/>
- `bot.sendMessage(chat_id, html, options)` - метод `SendMessage` класса `bot` отправляющий пользователю сообщение. Принимающий 3 параметра: <br/>
    - `сhat_id` - обязательный параметр. ID чата бота и пользователя. Он же `msg.chat.id`. Он же `function__get_chat_id.get_chat_id(msg)`. <br/>
    - `html` - обязательный параметр. Текст сообщения.  <br/>
    - `options` - необязательный параметр. Объект принимающий параметры парсера и клавиатуры. <br/>

**Реализация кода**

[![3.gif](https://i.postimg.cc/qMYCpmjY/3.gif)](https://postimg.cc/4m6351Cb)

## Реестр проектов

#### Запуск главного меню

Команда отвечающая за запуск главного меню - `/start`, код которой подробно описан в разделе [Запуск бота](#). Код блока выглядит так: 
```node
bot.onText(/\/start/, msg => {
    if (msg.chat.username !== 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__cry)
        bot.sendMessage(chat_id, command_text__start__error)
    } else if (msg.chat.username === 'AveCardinal') {
        bot.sendSticker(chat_id, stickers.hot_cherry__hello)
        bot.sendMessage(chat_id, command_text__start_success, {
            reply_markup: {
                keyboard: keyboard.home,
                resize_keyboard: true
            }
        })
    }
})
```

**Реализация кода**

[![1.gif](https://i.postimg.cc/5ysSXbk1/1.gif)](https://postimg.cc/y3SZ54Hr)

#### Клавиша "Реєстр об'єктів"

Логика кода аналогична других клавишах главного меню, таким как [Проекти](#) или [Товари](#). Сам код клавиши "Реєстр об'єктів" представляет из себя следующее:
```node
bot.on('message', msg => {
        case kb.home.registry:
            bot.sendSticker(chat_id, stickers.hot_cherry__clips)
            bot.sendMessage(chat_id, command_text__registry, {
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
            break
    }
})
```
Где:
- `command_text__registry` - текст-ссылка на онлайн-Excel таблицу с реестром объектов. Сам код выглядит так:
```node
const command_text__registry = `<a href="https://docs.google.com/spreadsheets/d/1rqGGFdBZrPFx9JEMVqT6UoXnjozG1cUxp4TepiKA3wM/edit?usp=sharing">Реєстр об'єктів за 2021 рік  ${emodji.books}</a>`

module.exports = command_text__registry
```

**Реализация кода**

[![1.gif](https://i.postimg.cc/hG1DgTx6/1.gif)](https://postimg.cc/PLNsQLSQ)

## Статистика по объектам

Логика кода аналогична других клавишах главного меню, таким как [Проекти](#), [Товари](#) или [Реєстр об'єктів](#). Сам код клавиши "Статистика по об'єктам" представляет из себя следующее:
```node
bot.on('message', msg => {
        case kb.home.statistic:
            bot.sendSticker(chat_id, stickers.hot_cherry__clips)
            bot.sendMessage(chat_id, command_text__statistic, {
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
            break
    }
})
```
Где:
- `command_text__statistic` - текст-ссылка на онлайн-Excel таблицу с реестром объектов. Сам код выглядит так:
```
const command_text__statistic = `<a href="https://docs.google.com/spreadsheets/d/11osrviGjujYOF_7iiMYZmzlf9p1p9TU0384F1R6hCIk/edit?usp=sharing">Загальна статистика за 2021 рік ${emodji.books}</a>`

module.exports = command_text__statistic
```

**Реализация кода**

[![1.gif](https://i.postimg.cc/Vkt1W697/1.gif)](https://postimg.cc/zyq9JqcW)

# **Заключение**

README.md предполагает лишь разбор всех основных функций кода, чтобы сторонний разработчик мог понять тот или другой блок кода. Предполагается, что сторонний разработчик понимает, что такое module.exports и require, следовательно не нуждается в комментировании подключения различных модулей. За дополнительными вопросами можно обращаться ко мне в Telegram. Мой `username` `@AveCardinal` или писать на почту `vladislav.pestsov@gmail.com`.
