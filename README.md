# **S-Prof. Информационный бот**

Проект написан на библиотеке node-telegram-bot-api. Ниже Вы найдёте подробную инструкцию, как развернуть аналогичного бота у себя, а также подробную информацию о логике приложения. 

# **Оглавление**
  - [Предназначение](#)
  - [Как я могу развернуть проект у себя](#)
    - [Уникальные вводные данные](#)
    - [Получение токена Telegram Bot](#)
    - [Получение URL адреса MongoDB](#)
    - [Формируем config.js с уникальными данными](#)
    - [Загрузка данных в MongoDB](#)
  - [Возможности бота](#)
    - [Запуск бота](#)
    - [Найти проект](#найти-проект)
      - [Получение краткой информации о проекте](#)  
        - [Клавиша "Проекти"](#)
        - [Необходимый тип объекта](#)
        - [Выбор конкретного проекта исходя из ID](#)
        - [Краткая информация о проекте](#)
      - [Получение полной информации о проекте](#)
        - [Способы узнать шифр проекта](#)
        - [Полная информация о проекте](#)
    - [Найти оборудование](#)
        - [Клавиша "Товари"](#)
        - [Необходимый производитель](#)
        - [Необходимый тип товаров](#)
        - [Выбор конкретного товара исходя из ID](#)
    - [Актуальные товары](#)
        - [Добавление товара в актуальное](#)
        - [Отправка callback_data](#)
        - [Обработка callback_query](#)
        - [Клавиша "Актуальні товари](№)
    - [Реестр проектов](#)
        - [Запуск главного меню](#)
        - [Клавиша "Реєстр об'єктів"](#)
    - [Cтатистика по объектам](#)
        - [Запуск главного меню](#)
        - [Клавиша "Статистика по об'єктам"](#)
  - [Заключение](#заключение)


# **Предназначение**

S-Prof. Информационный бот - это закрытый Telegram bot для компании S-Prof food service solution. <br/>
Бот закрытый, поскольку предназначен для использования внутри компании, а конкретно способствует повышению эффективности в работе проектировщиков, менеджеров проекта и сервисного отдела и написанный на украинском языке, поскольку компания-потребитель находиться в городе Львове, Україна. <br/>
Концепция проекта проста и глобально выполняет следующую функцию - расположить все необходимые данные в одном, виртуальном месте, доступ к которому есть только у сотрудников компании. <br/>

# **Как я могу развернуть проект у себя**

## Уникальные вводные данные
Особенностью любых ботов созданных на платформе Telegram есть, в первую очередь, получения уникального токена, по которому сервера Telegram идентифицируют единую точку входа, запросы или же обновления бота. Это означает, что нельзя развернуть одного и того же бота с одинаковым токеном, а следовательно необходимо получить индивидуальный токен.<br/>

Поскольку бот использует NoSQL базу данных, а именно MongoDB, для хранения данных по проектам, объектам, гиперссылкам и сессиям отдельных пользователей в виде JSON-документов, то необходимо получить уникальный URL-адрес для успешной работы с базой данных, а следовательно успешного пользования приложением. К проекту я прилагаю файлы в формате JSON, в которых храняться достаточное количество данных, для успешного пользования приложением. Инструкция, как перебросить данных из файлов JSON в ваш аккаунт базы данных я подробно объясняю ниже, в разделе.

## Получение токена

Находим Bot Father в поисковике Telegram: <br/>
*Важно! Bot Father должен иметь сбоку синюю галочку, как верификация подлиности.*

[![1.png](https://i.postimg.cc/YCQd9ch5/1.png)](https://postimg.cc/0z2YWBGn)

Запускаем чат с Bot Father: <br/>

[![2.png](https://i.postimg.cc/nzh20C0x/2.png)](https://postimg.cc/94syfX6g)

Выбираем функцию "создать нового бота" (/newbot): <br/>

[![3.png](https://i.postimg.cc/sgCJbnww/3.png)](https://postimg.cc/HV35ytGy)

Вводим имя бота: <br/>

[![4.png](https://i.postimg.cc/t7QhQTtY/4.png)](https://postimg.cc/2LGqnCtD)

Вводим username бота
Username - это виртуальное, имя, которое используется, в основном как ссылка на бота. <br/>
*В примере для простоты username и имя бота одинаково, но Telegram позволяет разные имя и username у бота.*

[![5.png](https://i.postimg.cc/PfL9jRQj/5.png)](https://postimg.cc/bdh30L5C)

Получаем у Bot Father уникальный токен: <br/>

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


```
module.exports = {
    TOKEN: '1974489742:AAEvwm267ee6duI1FnbozyhHEYxlSs5sEdg',
    DB_URL: 'mongodb+srv://Sproftestbot111:Sproftestbot111@cluster0.b53ub.mongodb.net/Sproftestbot111'
}
```

Эти данные используются в файле init.js. <br/>
*Файл init.js это точка входа в приложение.*


Подключаем сonfig.js в наш главный файл index.js <br/>

```
const config = require('./config')
```

Проверяем первый аргумент класса TelegramBot: <br/>
```
const bot = new TelegramBot(config.TOKEN, {
    polling: true
})
```
Проверяем первый аргумент метода connect библиотеки mongoose: <br/>
```
const connect = mongoose.connect(config.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
```

## *Загрузка данных в MongoDB*

Практика показала, что организовывать загрузку данных через чат с Telegram ботом является не практичным решением, а формировать обработку загружаемых данных через CRUD это создание двух отдельных приложений, когда задача стоит - монолит.

---

Загрузка происходит через локальные файлы формата json. Они находятся в папке db поделены по соотвествующим разделам. <br/>
Проверяем их наличие:

[![1.png](https://i.postimg.cc/Mpsz60DR/1.png)](https://postimg.cc/MnjCtQgK)

Подключаем пакет mongoose и создаем модель для каждого файла db: <br/>

[![2.png](https://i.postimg.cc/rp3cW87w/2.png)](https://postimg.cc/Ny6Wvwg3)

Каждый файл состоит из подключаемой схем, в которой заполняется форма данных:

```
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

Подключаем все модели (или конкретную, если нужно исправить данные одного раздела) в файл index.js: <br/>
*В приложении, для дополнительной декомпозиции данных все данные собираются в один index.js, а после, с помощью деструктуризации подключаются к главному файлу index.js*.

```
require('./models/project.model')
const Project = mongoose.model('project')
```

Коппируем нужную функцию для конкретной коллекции. в главный файл index.js и сохраняем файл. После этого функция должна пробежаться по всем аргументам db файла и после сохранить их в MongoDB базе данных. <br/>
**После успешной загрузки данных, во избежания коппирования данных в базе данных, удалите функцию заполнения данных** <br/>
*Пример наведён для одного типа раздела данных*

[![3.png](https://i.postimg.cc/MK5S50g4/3.png)](https://postimg.cc/ppm4XjWY)

```
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

Вводим название "S-Prof.Інформаційний бот" в поисковик Telegram. Поскольку я уже его запускал, а после удалил чат с ботом, то Telegram предлагает мне перезапустить бота. Вам Telegram предложит начать. Нажимаем кнопку Start. <br/>

Поскольку бот должен быть закрытым, то все комманды покрываются условием, где истинна - это username сотрудников, а ложь - любой username не входящий в перечень сотрудников. <br/>

Логика кнопки Start: 
```
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

## Найти проект

Если необходимы короткая информация по объекту, в том числе и геоположение необходимо использовать путь через кнопку "Проекты". <br/>
Если необходимо получить полные данные об проекте необходимо использовать шифр проекта. <br/>

### Получение короткой информации о проекте

#### Клавиша "Найти проект" 

При нажатии на клавишу "Найти проект" срабатывает следующий блок кода: <br/>
```
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
- `bot.on('message', msg => {}` - прослушиватель события "message", экземпляра класса Telegram bot. <br/>
При срабатывании события emitter Telegram Bot отправляет на сервер следующие данные:  <br/>
    ```
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
- `function__get_chat_id.get_chat_id(msg)` - функция возвращающая `msg.chat.id`. `msg.chat.id` - это уникальный ID чата бота и пользователя.  <br/>
- `switch (msg.text)` - переключатель, который реагирует на значение `msg.text`. <br/>
- `bot.sendMessage(chat_id, command_text__projects, options)` - метод `SendMessage` класса `bot` отправляющий пользователю сообщение. Принимающий 3 параметра:
    - `сhat_id` - обязательный параметр. Уникальный ID чата бота и пользователя. Он же msg.chat.id. Он же function__get_chat_id.get_chat_id(msg). <br/>
    - `command_text__projects` - обязательный параметр. Текст сообщения.  <br/>
    - `options` - необязательный параметр. Объект принимающий ряд параметров. Подробнее о параметрам смотрите [Официальную документацию Telegram](https://core.telegram.org/bots/api#sendmessage).  <br/>
- `reply_markup` - параметр объекта `options`, добавляющий интерфейс клавиатур.  <br/>
- `keyboard` - подпараметр параметра `reply_markup` принимающий клавиатуру, в нашем примере `keyboard.projects`. Подробнее о клавиатурах смотрите [Официальную документацию Telegram](https://core.telegram.org/bots/api#replykeyboardmarkup).  <br/>
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
```
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
- `bot.on('message', msg => {})` - прослушиватель события "message", экземпляра класса Telegram bot. <br/>
- `function__get_chat_id.get_chat_id(msg)` - функция возвращающая `msg.chat.id`. `msg.chat.id` - это уникальный ID чата бота и пользователя.  <br/>
- `switch (msg.text)` - переключатель, который реагирует на значение `msg.text`.  <br/>
- `case kb.projects.finishing` - значение реагирующее на событие `msg.text`, когда `msg.text == 'Об\'єкти-Finishing'`.  <br/>
-  `send_project(chat_id, query)` - функция, отправляющая проект в зависимости от запроса (query). Функция принимает два параметра:  <br/>
    - `сhat_id` - обязательный параметр. Уникальный ID чата бота и пользователя. Он же msg.chat.id. Он же function__get_chat_id.get_chat_id(msg).  <br/>
    - `query` - обязательный параметр. Строка `msg.text`, которая принимается функцией `send_project` для применения внутри функции.  <br/>

Второй параметр функции `send_project(chat_id, { type: 'Finishing' })` под капотом реализовывает передачу `msg.text` в метод модели `Project` - find, который выполняет запрос в базу данных `Project` и выдаёт результат в виде всех объектов, где значение `'Finishing'` равно для ключа `type`.  <br/>

*Функция `send_project(chat_id, query)`* <br/> 

Функция описана в отдельном файле - send_project__by_query.js, полный блок кода выглядящий так: <br/>
```
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
- `const bot = require('../init')` - модуль класса bot, который необходим для обработки методов `sendSticker` и `sendMessage`. <br/>
- `const text_project_by_type__query = require('../message_text/text_project_by_type__query')` - модуль с текстом, для отправки сообщения с помощью метода `sendMessage`.<br/>
- `const mongoose = require('mongoose')` - модуль mongoose, который поддерживает методы `model` и `Schema`. <br/>
- `require('../models/project.model')` - модуль, подключающий `model` проектов. <br/>
- `const Project = mongoose.model('project')` - присваивание переменной `Project` метода `model`. <br/>

*Методи функции send_project(chat_id, query)* <br/>
- `Project.find(query)` - метод find формирующий результат выборки из массива объектов, у которых значения запроса совпадает с запросом документа в коллекции `Project`. <br/>
- `then(project => {})` - модели `mongoose` возвращают Promise. В случае успешного выполнения Promise возвращает resolve с массивом объектов, где название массива - `project`. <br/>
- `bot.sendSticker(chat_id, stickers.hot_cherry__presents)` - метод `sendSticker` класса `bot` отправляющий пользователю стикер. Примающий 2 параметра:  <br/>
    - `сhat_id` - обязательный параметр. Уникальный ID чата бота и пользователя. Он же msg.chat.id. Он же function__get_chat_id.get_chat_id(msg). <br/>
    - `stickers.hot_cherry__presents` - обязательный параметр. file_id стикера. <br/>
    *`file_id` - это уникальный идентификатор файла, который является разным для разных чатов, поэтому для формирования собственных file_id для стикеров необходимо добавить следующий код в главный файл index.js и отправить все необходимые стикеры для бота. В результате отправки Вы получите название стикера и его file_id. Также стоит добавить, что Telegram поддерживает различные способы отправки стикера. Подробнее об отправке стикеров смотрите в [официальной документации Telegram](https://core.telegram.org/bots/api#sendsticker)*.<br/>
    ```
    bot.on('message', msg => {
        console.log(msg.document.file_name)
        console.log(msg.document.file_id)
    })
    ```

- `bot.sendMessage(chat_id, text_project_by_type__query)` - метод `SendMessage` класса `bot` отправляющий пользователю сообщение. Принимающая 2 параметра:
    - `сhat_id` - обязательный параметр. Уникальный ID чата бота и пользователя. Он же msg.chat.id. Он же function__get_chat_id.get_chat_id(msg). <br/>
    - `text_project_by_type__query` - обязательный параметр. Текст сообщения. <br/>
- `const html = projects.map((k, i) => {})` - текст сообщения, который состоит из строчного текста и значений объектов массива развёрнутых методом `map`.

**Реализация кода**

[![2.gif](https://i.postimg.cc/L6vvrkgP/2.gif)](https://postimg.cc/PPpmDw4f)

#### **Выбор конкретного проекта исходя из ID**

---

Ранее мы смогли вывести массив объектов, где есть активная ссылка. Эта ссылка сформирована за счёт команды и уникального идентификатора документа в коллекции `Project`, а сама команда выводит сформированный объект информации о проекте. 

*Команда отправки конкретного проекта исходя из ID*

Код комманды состоит с включением функции создания активной ссылки и выгляди так:
```
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
- `get_item_uuid__function.get_item__with__two_letter_uuid(source)` - функция создания активной ссылки принимающая `source` - `msg.text` отправляемый пользователем при нажатии на ссылку уникального ID проекта. *Функция создания активной ссылки описана ниже*. <br/>
- `сhat_id` - обязательный параметр. Уникальный ID чата бота и пользователя. Он же msg.chat.id. Он же function__get_chat_id.get_chat_id(msg). <br/>
- `Project.findOne({ uuid: projectUuid })` - метод findOne формирующий результат выборки из объекта у которого значения запроса совпадает с запросом документа в коллекции `Project`. <br/>
- `then(project => {})` - модели `mongoose` возвращают Promise. В случае успешного выполнения Promise возвращает resolve с объектом, где название объекта - `project`. <br/>
- `bot.sendMessage(chat_id, project_text, {})` -  метод `SendMessage` класса `bot` отправляющий пользователю сообщение. Принимающий 3 параметра:
    - `сhat_id` - обязательный параметр. Уникальный ID чата бота и пользователя. Он же msg.chat.id. Он же function__get_chat_id.get_chat_id(msg). <br/>
    - `project_text` - обязательный параметр. Текст сообщения.  <br/>
    - `options` - необязательный параметр. Объект принимающий ряд параметров. Подробнее о параметрам смотрите [Официальную документацию Telegram](https://core.telegram.org/bots/api#sendmessage).  <br/>
- `text` - ключ принимающий значение сформированого текста `project_text` с данными из объекта `project`. <br/>
- `parse_mode: 'HTML'` - 'HTML' - режим разбора сущности текста `project_text`. <br/>
- `reply_markup` - параметр объекта `options`, добавляющий интерфейс клавиатур.  <br/>
- `inline_keyboard` - подпараметр параметра `reply_markup` принимающий встроенную клавиатуру. Подробнее о клавиатурах смотрите [Официальную документацию Telegram](https://core.telegram.org/bots/api#replykeyboardmarkup).  <br/>
- `text: 'Показати на карті'` - название клавиши встроеной клавиатуры.
- `callback_data: JSON.stringify({})` - данные обратного вызова. Используються для обработки запросов с встроенных клавиатур.
- `type: ACTION_TYPE.SHOW_PROJECTS_MAP` - тип данных обратного вызова. Нужен для обработки запросов с встроенных клавиатур и подробно рассматривается в подразделе [Краткая информация о проекте](#).
- `la: project.location.latitude` - данные обратного вызова. Координаты ширины местоположения объекта. 
- `lo: project.location.longitude` - данные обратного вызова. Координаты долготы местоположения объекта.

*Создание активной ссылки*
Активная ссылка создаётся путём вырезания части присылаемой строки, оставляя только текст комманды и ID проекта из коллекции `Project`. Код активной ссылки выглядит так: 
```
    get_item__with__two_letter_uuid(source) {
        return source.substr(2, source.length)
    }
```
Где:
- `get_item__with__two_letter_uuid(source)` - принимает строковое значения `source`.
- `source.substr(2, source.length)` - возвращает строковое значения `source`, начиная с третьего символа.

**Реализация кода**

[![3-15-fs.gif](https://i.postimg.cc/Jh7sSJJs/3-15-fs.gif)](https://postimg.cc/21JjZ10Y)

#### Краткая информация о проекте

Отправляем следующую краткую информацию согласно проекту:
- Название проекта.<br/>
- Шифр.<br/>
- Тип объекта.<br/>
- Адрес.<br/>
```
    Project.findOne({ uuid: projectUuid }).then(project => {
        const project_text = `<b>Назва проекту:</b> ${project.project_name}.
<b>Штамп:</b> ${project.stamp}.
<b>Тип об'єкта:</b> ${project.type}.
<b>Адреса:</b> ${project.city}, ${project.address}.`

```
Также отправляем сallback_data при нажатии на кнопку "Показати на карті":<br/>
- ACTION_TYPE.SHOW_PROJECTS_MAP - уникальный ID для привязки и опредения события. <br/>
- la: project.location.latitude - значение широты местоположения объекта.<br/>
- lo: project.location.longitude - значение долготы местоположения объекта.<br/>
```
callback_data: JSON.stringify({
    type: ACTION_TYPE.SHOW_PROJECTS_MAP,
    la: project.location.latitude,
    lo: project.location.longitude
})
```
Формируем уникальный ID для ACTION_TYPE:SHOW_PROJECTS_MAP<br/>
```
const ACTION_TYPE =  {
    SHOW_PROJECTS_MAP: 'spm'
}
```
Определяем событие "callback_query", которое реагирует на запросы со встроенных клавиатур.<br/>
- Парсим запрос.<br/>
- Деструктуризируем data приходящую с запросом.<br/>
- Деструктуризируем type из data.<br/>
- Формируем условие, при запросе определенного type выполняющую определенную логику.<br/>
- с помощью функции `bot.sendLocation(query.message.chat.id, lo, la)` отправляем геопозицию объекта.<br/>

```
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
**Реализация шага**

[![4.gif](https://i.postimg.cc/pXN4CBbJ/4.gif)](https://postimg.cc/XX8s7dvr)

### Получение полной информации о проекте
#### Способы узнать шифр проекта

Шифр проекта можем узнать двумя способами:
1. Через реестр объектов.

Выбираем комманду "Реестр объектов".

При нажатии на комманду "Реестр объектов" выполняется следующий код:
```
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

**Пройдёмся по неописанным ранее частям кода:**<br/>

`command_text__analytics`:<br/>
Подключаем текст, который выводится при успешной проверке условия и нажатии на комманду "Реестр объектов". <br/>
Достаём переменную со значением текста через деструктуризацию файла index.js, который находится в папке с остальными текстами базовых команд которых 4:<br/>
1. start. <br/>
2. help. <br/>
3. statistic. <br/>
4. registry. <br/>

```
const {command_text__analytics} = require('./message_text/command_text__start/index')
```

Сам код файла `command_text__analytics`:<br/>

```
const emodji = require('../../helpers/emoji')

const command_text__analytics = `<a href="https://docs.google.com/spreadsheets/d/1rqGGFdBZrPFx9JEMVqT6UoXnjozG1cUxp4TepiKA3wM/edit?usp=sharing">Реєстр об'єктів за 2021 рік  ${emodji.books}</a>`

module.exports = command_text__analytics
```

Где прямая ссылка на онлайн-Excel таблицу.

**Реализация шага**

[![1.gif](https://i.postimg.cc/hG1DgTx6/1.gif)](https://postimg.cc/PLNsQLSQ)

После нажимаем на гиперссылку и переходим в онлайн таблицу реестра объектов.

[![2.png](https://i.postimg.cc/NFY1NWTS/2.png)](https://postimg.cc/sQ6QxHT4)

2. Через команду "Проекты".

При быстром выборе объекта или при просмотре краткой информации об объекте - есть графа "шифр".

[![1.png](https://i.postimg.cc/NMvd82zs/1.png)](https://postimg.cc/p9kQRrv4)

#### Полная информация о проекте

При отправке шифра срабатывает следующий блок кода:

```
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

**Пройдёмся по неописанным ранее частям кода:**<br/>

`if (msg.text === file_id.p_021_2021.project__name)`<br/>
Условие, при котором вводимое название шифра определяет какие материалы будут отправлены. Можно было сделать и через switch case, но он уже немного надоел.<br/>

`bot.sendDocument(chat_id, file_id.p_021_2021.dwg, {caption: file_id.p_021_2021.dwg__filename})`<br/>
Метод `sendDocument` экземепляра класса TelegramBot, который отправляет документ. Метод принимает 3 аргумента:
1. chat_id. Обязательный параметр, описанный ранее.
2. file_id. Обязательный параметр, описаный ранее. Также может применяться локальный путь к файлу, но имеет ограничение в 15 Мб. 
3. options. Необязательный параметр. Объект состоящий из аргументов. Подробнее об аргументах смотрите в [официальной документации Telegram](https://core.telegram.org/bots/api#replykeyboardmarkup).<br/>

В условии указаны данные, которые подключаються в index.js
```
const file_id = require('./helpers/file_id')
```
А сам код файла file_id для конкретного примера:
```
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

**Реализация шага**

[![2.gif](https://i.postimg.cc/Xv7k3Mzb/2.gif)](https://postimg.cc/21MZFtYc)

## Найти желанный товар
#### Кнопка "Товари"

Код организован через switch case по аналогии с кнопкой "Проекти". Смотреть подробно про логику кнопки ["Проекти"](#)

**Реализация**

[![1.gif](https://i.postimg.cc/fThz8z9L/1.gif)](https://postimg.cc/WtXc3PSL)

#### Небходимый производитель

Блок кода

```
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

`bot.on('message', msg => {})`

`kb.manufacturer.elframo`

`bot.sendMessage(chat_id, manufacturer_elframo__text, {})`

`reply_markup: {}`

`keyboard: keyboard.rational`

`resize_keyboard: true`

`one_time_keyboard: true`


|  Меню  | Виробник  |
| :----: | :-------: |
| Товари |  Elframo  |
| Товари |  Samaref  |
| Товари | Rational  |
| Товари |Robot Coupe|
| Товари | RM Gastro |

[![2.gif](https://i.postimg.cc/MTmS4RRp/2.gif)](https://postimg.cc/BLbkPjMr)

#### Необходимый тип товаров

Блок кода

```
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

`bot.on('message', msg => {}`

`function__get_chat_id.get_chat_id(msg)`

`kb.rational.combi_streamer:`

`send_combi_streamer(chat_id, { form: 'Пароконвектомат' })`

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

[![3.gif](https://i.postimg.cc/Nfyn2mM2/3.gif)](https://postimg.cc/Tp60ZynT)

#### Выбор конкретного товара исходя из ID

Блок кода
```
send_combi_streamer(chat_id, { form: 'Пароконвектомат' })
```
Блок кода
```
const send_html = require('../../function__send_html')
const {combi_streamer__rational} = require('../../../models/heating_equipment__rational/index')

function send_combi_streamer(chat_id, query) {
    combi_streamer__rational.find(query).then(combi_streamers__rational => {
        const html = combi_streamers__rational.map((p, i) => {
            return `<strong>Серія: </strong> ${p.series}
<strong>Назва товара: </strong> ${p.name}
<strong>Деталі: </strong> /p${p.uuid}
`}).join('\n')

    send_html(chat_id, html, 'products')
    })
}

module.exports = send_combi_streamer
```
Блок кода
```
const {
    show_favourite__combi_streamer__rational,
    show_favourite__multi_pen__rational,
    send_combi_streamer,
    send_multi_pen__rational
} = require('./functions/product_function/heating_equipment__rational/index')
```

Блок кода
```
const show_favourite__combi_streamer__rational = require('./show_favourite__combi_streamer__rational')
const show_favourite__multi_pen__rational = require('./show_favourite__multi_pen__rational')
const send_combi_streamer = require('./send_combi_streamer__rational__by_query')
const send_multi_pen__rational = require('./send_multi_pen__rational__by_query')

module.exports = {
    show_favourite__combi_streamer__rational,
    show_favourite__multi_pen__rational,
    send_combi_streamer,
    send_multi_pen__rational
}
```
Блок кода
```
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
Блок кода
```
bot.onText(/\/p(.+)/, (msg, [source]) => {
    const product_uuid = get_item_uuid__function.get_item__with__two_letter_uuid(source)
    const chat_id = function__get_chat_id.get_chat_id(msg)
```
Блок кода
```
    Promise.all([
        combi_streamer__rational.findOne({ uuid: product_uuid }),
        User.findOne({telegram_id: msg.from.id})
    ])
```
Блок кода
```
.then(([combi_streamer__rational, user]) => {}
```
Блок кода
```
const caption = `Назва товара: <b>${combi_streamer__rational.name}.</b>
Серія: <b>${combi_streamer__rational.series}.</b>
Тип обладнання: <b>${combi_streamer__rational.type}.</b>
    ...
`
```

`bot.sendPhoto(chat_id, combi_streamer__rational.picture, {}`

`caption: caption`

`parse_mode: 'HTML'`

`reply_markup: {inline_keyboard: []}`

[![4.gif](https://i.postimg.cc/g0pt77K3/4.gif)](https://postimg.cc/MnsYMdNG)


## Актуальные товары

#### Добавление товара в актуальное

Блок кода
```
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
Блок кода
```
        let is_fav = false
        if (user) {
            is_fav = user.products.indexOf(product_uuid) !== -1
        }
        const fav_text = is_fav ? 'Видалити з актуального' : 'Додати в актуальне'

```
`is_fav`

`fav_text`

#### Отправка callback_data

Блок кода
```
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

`type: ACTION_TYPE.TOOGLE_FAV_COMBI_STREAMERS`
` product_uuid: product_uuid`
`is_fav: is_fav`

Блок кода
```
const ACTION_TYPE =  {
    ...
    TOOGLE_FAV_COMBI_STREAMERS: 'tfcomstr',
    ...
}
```

[![1.gif](https://i.postimg.cc/pL47YtkZ/1.gif)](https://postimg.cc/k2Nfqz06)

#### Обработка callback_query
Блок кода
```
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

`toogle_favourite_product(user_id, query.id, data)`

Блок кода
```
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
Блок кода
```
User.findOne({telegram_id: user_id})
```
Блок кода
```
if (user) {
            if (is_fav) {
                user.products = user.products.filter(pUuid => pUuid !== product_uuid)
            } else {
                user.products.push(product_uuid)
            }
            userPromise = user
```
Блок кода
```
else {
            userPromise = new User({
                telegram_id: user_id,
                products: [product_uuid]
            })
        }
```

[![2.gif](https://i.postimg.cc/bwxY4LM1/2.gif)](https://postimg.cc/RW0zH1v0)

#### Кнопка "Актуальні товари"

Блок кода 
```
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
Блок кода
```
show_favourite__combi_streamer__rational(chat_id, msg.from.id)
```
Подключаем блок
```
const {
    show_favourite__combi_streamer__rational,
    show_favourite__multi_pen__rational,
    send_combi_streamer,
    send_multi_pen__rational
} = require('./functions/product_function/heating_equipment__rational/index')

```
Блок кода
```
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
Блок кода
```
User.findOne({telegram_id})
    .then(user => {
        if (user) {
            combi_streamer__rational.find({uuid: {'$in': user.products}}).then(products => {
                let html
                if (products.length) {
                    html = products.map((p, i) => {
                        return `${p.form} ${p.manufacturer} ${p.name}  
Деталі: /p${p.uuid}`}).join('\n')
                } 
            })
        } 
    })
}
```
Блок кода
```
send_html(chat_id, html, 'home')
```

[![3.gif](https://i.postimg.cc/qMYCpmjY/3.gif)](https://postimg.cc/4m6351Cb)

## Реестр проектов

#### Запуск главного меню

Код отвечающий за выполнение комманды: 
```
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
Детальный разбор блока кода описан выше, в разделе [Функция закрытого бота](#)

**Реализация шага**

[![1.gif](https://i.postimg.cc/5ysSXbk1/1.gif)](https://postimg.cc/y3SZ54Hr)

#### Кнопка "Реєстр об'єктів"

При нажатии на комманду "Реестр об\'єктів" выполняется следующий код:
```
bot.on('message', msg => {
        case kb.home.analytics:
            bot.sendSticker(chat_id, stickers.hot_cherry__clips)
            bot.sendMessage(chat_id, command_text__registry, {
                parse_mode: 'HTML',
                disable_web_page_preview: true
            })
            break
    }
})
```

**Пройдёмся по неописанным ранее частям кода:**<br/>

`command_text__registry`:<br/>
Подключаем текст, который выводится при успешной проверке условия и нажатии на комманду "Реестр об\'єктів". <br/>
Достаём переменную со значением текста через деструктуризацию файла index.js, который находится в папке с остальными текстами базовых команд которых 4:<br/>
1. start. <br/>
2. help. <br/>
3. statistic. <br/>
4. registry. <br/>

```
const {command_text__registry} = require('./message_text/command_text__start/index')
```

Сам код файла `command_text__registry`:<br/>

```
const emodji = require('../../helpers/emoji')

const command_text__registry = `<a href="https://docs.google.com/spreadsheets/d/1rqGGFdBZrPFx9JEMVqT6UoXnjozG1cUxp4TepiKA3wM/edit?usp=sharing">Реєстр об'єктів за 2021 рік  ${emodji.books}</a>`

module.exports = command_text__registry
```

Где прямая ссылка на онлайн-Excel таблицу.

[![2.png](https://i.postimg.cc/NFY1NWTS/2.png)](https://postimg.cc/sQ6QxHT4)

**Реализация шага**

[![1.gif](https://i.postimg.cc/hG1DgTx6/1.gif)](https://postimg.cc/PLNsQLSQ)

## Статистика по объектам

#### Запуск главного меню

Код отвечающий за выполнение комманды: 
```
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
Детальный разбор блока кода описан выше, в разделе [Функция закрытого бота](#)

**Реализация шага**

[![1.gif](https://i.postimg.cc/5ysSXbk1/1.gif)](https://postimg.cc/y3SZ54Hr)

#### Кнопка "Статистика по об'єктам"

При нажатии на комманду "Статистика по об\'єктам" выполняется следующий код:

```
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
```
**Пройдёмся по неописанным ранее частям кода:**<br/>

`command_text__statistic`:<br/>
Подключаем текст, который выводится при успешной проверке условия и нажатии на комманду "Реестр об\'єктів". <br/>
Достаём переменную со значением текста через деструктуризацию файла index.js, который находится в папке с остальными текстами базовых команд которых 4:<br/>
1. start. <br/>
2. help. <br/>
3. statistic. <br/>
4. registry. <br/>

```
const {command_text__statistic} = require('./message_text/command_text__start/index')
```

Сам код файла `command_text__statistic`:<br/>

```
const emodji = require('../../helpers/emoji')

const command_text__statistic = `<a href="https://docs.google.com/spreadsheets/d/11osrviGjujYOF_7iiMYZmzlf9p1p9TU0384F1R6hCIk/edit?usp=sharing">Загальна статистика за 2021 рік ${emodji.books}</a>`

module.exports = command_text__statistic
```

Где прямая ссылка на онлайн-Excel таблицу.

[![1.gif](https://i.postimg.cc/Vkt1W697/1.gif)](https://postimg.cc/zyq9JqcW)

# **Заключение**

Несмотря на простую реализацию программного кода в результате можно получить довольно серьёзную программу по повышению эффективности бизнес-процессов, но при этом сами боты имеют свою специфику. Эта специфика выражается в том, какие задачи мы ставим перед Telegram ботами. Если эти задачи: чат с возможностью переключения на оператора, выжимка информации или последние этапы в воронках продаж, тогда это удобный сервис, но если мы подходим к чат ботам как к стандартный веб-приложениям, то они имеют ряд недостатков:
1. Middleware. node-tleegram-bot-api не позволяет писать middleware, а это выливается или в массовое оборачивание методов экземпляра класса TelegramBot или создание собственного костыля-обёртку, через которую необходимо прогонять будет весь код или же писать весь код, связанных с событиями в один файл и формировать большую партянку.
2. Аналитика и статистика. Если написать свои костыли по сбору информации можно: поставить счётчик кликов, получение первичных данных от пользователя, то эти костыли останутся в рамках одной компании. Это означает, что статистику такого рода не предоставить потенциальному инвестору, на предмет той же рекламы, а если и предоставить, то результат предоставления - это чистого рода вера. Единственный вариант это формировать URL-запросы и видоизменять общение бота с пользователям таким образом, чтобы пользователь сам заполнял все личные данные, а после эти данные прогонять через сторонее приложение.
3. Отсутствие гигиены. Заполняемые поля пользователем нельзя прогнать через внутренний валидатор Telegram бота, а следовательно это можно сделать в рамках middleware-сервиса или на стороне сервера. Таким образом мы или создаём допольнительное приложение или нагружаем сервер лишней работой, лишь для того, чтобы получить единый и слитный бизнес-процесс.




