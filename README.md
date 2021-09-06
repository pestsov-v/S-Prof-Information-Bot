# **S-Prof. Информационный бот**

Проект написан на библиотеке node-telegram-bot-api. Ниже Вы найдёте подробную инструкцию, как развернуть аналогичного бота у себя, а также подробную информацию о логике приложения. 

# **Оглавление**
  - [Предназначение](#предназначение)
  - [Как я могу развернуть проект у себя](#как-я-могу-развернуть-проект-у-себя)
    - [Получение токена](#получение-токена)
    - [Получение URL адреса](#получение-url-адреса)
    - [Формируем config.js с уникальными данными](#формируем-configjs-с-уникальными-данными)
    - [Загрузка данных в MongoDB](#загрузка-данных-в-mongodb)
  - [Функции](#функции)
    - [Найти проект](#найти-проект)
    - [Найти желанный товар](#найти-желанный-товар)
    - [Посмотреть реестр проектов](#посмотреть-реестр-проектов)
    - [Просмотреть статистику по объектам](#просмотреть-статистику-по-объектам)
    - [Быстрый доступ к нужным товарам](#быстрый-доступ-к-нужным-товарам)
  - [Заключение](#заключение)


# **Предназначение**

S-Prof. Информационный бот - это закрытый, информационный, telegram bot для компании S-Prof food service solution. Бот закрытый, поскольку предназначен для пользования внутри компании, а конкретно способствует повышению эффективности в работе проектировщиков, менеджеров проекта и сервисного отдела и написанный на украинском языке, поскольку компания-потребитель находиться в городе Львове, Україна. <br/><br/>Концепция проекта проста и глобально выполняет следующую функцию - расположить все необходимые данные в одном, виртуальном месте, доступ к которому есть только у сотрудников компании.

# **Как я могу развернуть проект у себя**

## *Уникальные вводные данные*
Особенностью любых ботов созданных на платформе Telegram есть, в первую очередь, получения уникального токена, по которому сервера Telegram идентифицируют единую точку входа, запросы или же обновления бота. Это означает, что нельзя развернуть одного и того же бота с одинаковым токеном, а следовательно необходимо получить индивидуальный токен.<br/><br/>Поскольку бот использует NoSQL базу данных, а именно MongoDB, для хранения данных по проектам, объектам, гиперссылкам и сессиям отдельных пользователей в виде JSON-документов, то необходимо получить уникальный URL-адрес для успешной работы с базой данных, а следовательно успешного пользования приложением. К проекту я прилагаю файлы в формате JSON, в которых храняться достаточное количество данных, для успешного пользования приложением. Инструкция, как перебросить данных из файлов JSON в ваш аккаунт базы данных я подробно объясняю ниже, в разделе [Загрузка данных в MongoDB](#загрузка-данных-в-mongodb).

## *Получение токена*

Первый шаг. Находим Bot Father в поисковике Telegram. <br/>
*Важно! Bot Father должен иметь сбоку синюю галочку, как верификация подлиности.*

[![1.png](https://i.postimg.cc/52GgVY5w/1.png)](https://postimg.cc/4Y6Vv3Sd)

Второй шаг. Запускаем чат с Bot Father.

[![2.png](https://i.postimg.cc/K8K7JcX4/2.png)](https://postimg.cc/SnhzKhxp)

Третий шаг. Выбираем функцию "создать нового бота" (/newbot).

[![3.png](https://i.postimg.cc/6q5nRtLW/3.png)](https://postimg.cc/2bM1NpKM)

Четвертый шаг. Вводим имя бота. Аналог имени у человека.

[![4.png](https://i.postimg.cc/8CR60jZk/4.png)](https://postimg.cc/wtBMtTKn)

Пятый шаг. Вводим username бота. Username - это виртуальное, имя, которое используется, в основном как ссылка на бота. <br/>
*В примере для простоты username и имя бота одинаково, но Telegram позволяет разные имя и username у бота.*

[![5.png](https://i.postimg.cc/MTzdPkb4/5.png)](https://postimg.cc/zLPCvcQS)

Шестой шаг. Получаем у Bot Father уникальный токен и сохраняем его. Он нам пригодится чуть позже.

[![6.png](https://i.postimg.cc/wT1sdWwG/6.png)](https://postimg.cc/F7QKyx5y)

## *Получение URL адреса*

Первый шаг. Находим официальный сайт MongoDB в Google.

[![1.png](https://i.postimg.cc/mZpG04p7/1.png)](https://postimg.cc/Z0NgdGSq)

Второй шаг. Заходим в аккаунт. 

[![2.png](https://i.postimg.cc/DzP953bJ/2.png)](https://postimg.cc/p9ycX7CR)

Третий шаг. Если Вы уже используете MongoDB, можете зайти напрямую в аккаунт. <br/>
*Ниже инструкция, как пройти быструю регистрацию в MongoDB через Ваш Google-аккаунт.*

[![3.png](https://i.postimg.cc/RVrzMd90/3.png)](https://postimg.cc/z3kQ7nym)

Четвертый шаг. Выбираем Ваш существующий аккаунт, в который вы вошли в системе Google Chrome.

[![4.png](https://i.postimg.cc/52gcSMzH/4.png)](https://postimg.cc/0zzH9Fcx)

Пятый шаг. Принимаем политику конфиденциальности и условия обслуживания. 

[![5.png](https://i.postimg.cc/KYpdCrJx/5.png)](https://postimg.cc/Tym7Dbz4)

Шестой шаг. Выбираем бесплатный вариант виртуального облака. <br/>
*Срок жизни подобного облака порядка 2 месяцев, после чего MongoDB заблокируем просмотр базы данных, стимулируя Вас поменять бесплатный тариф на платный.* <br/>
*Важно! Для регистрации в MongoDB не нужно вводить данные банковских карт, поэтому не стоит переживать за то, что у Вас спишутся средства.*

[![7.png](https://i.postimg.cc/4yVq7CZx/7.png)](https://postimg.cc/Lg4Nwbnc)

Седьмой шаг. Создаём виртуальное облако выполняя следующие пункты:
1. Проверяем Бесплатный тариф. 
2. Выбираем желаемый облачный сервис. 
3. Выбираем месторасположение ближайшего сервера. 
4. Бесплатный тариф позволяет выбрать объём не больше 512 Мб поэтому пропускаем пункт.
5. Бесплатный тариф не предоставляет Backup так что пропускаем пункт.
6. Выбираем название виртуального облака или оставляем название по умолчанию. 
7. Проверяем, чтобы оставалась надпись "Free" и подтверждаем создание виртуального облака.

[![imgonline-com-ua-2to1-Rr-JJw-FDrc-Ug-Q.png](https://i.postimg.cc/Gm77p3Yj/imgonline-com-ua-2to1-Rr-JJw-FDrc-Ug-Q.png)](https://postimg.cc/ts6tSjB1)

Восьмой шаг. Ожидаем пока сформируется база данных. <br/>
*Создание виртуального облака может занимать от 3 до 5 минут.*

[![9.png](https://i.postimg.cc/Vk6g2yT0/9.png)](https://postimg.cc/mtv7FnTT)

Девятый шаг. После того, как сформируется база данных, переходим в графу "Доступ к базе данных".

[![10.png](https://i.postimg.cc/CxQ7gPTP/10.png)](https://postimg.cc/v45f7vmf)

Десятый шаг. Создаём нового пользователя.

[![11.png](https://i.postimg.cc/DZqP17WH/11.png)](https://postimg.cc/1n3FQhrr)

Одинадцатый шаг. Вводим логин и пароль пользователя. <br/>
*Остальные параметры оставляем по умолчанию.*

[![12.png](https://i.postimg.cc/L52BTGLX/12.png)](https://postimg.cc/hzZd4yCW)

Двенадцатый шаг. Переходим в графу "Доступ адресов".

[![12.png](https://i.postimg.cc/mk43ZKr4/12.png)](https://postimg.cc/G8MTq7Yg)

Тринадцатвый шаг. Добавляем новый IP-adress.

[![14.png](https://i.postimg.cc/W1hmXGFM/14.png)](https://postimg.cc/Xr6yvygJ)

Четырнадцатый шаг. Выбираем вариант IP-adress, с которого возможен вход в базу данных. <br/>
*Вы можете выбрать кнопку "Add current in adress" если хотите добивить только IP-adress вашего местоположения.* <br/>
*В примере выбрана кнопка "Allow access from anywhere", для простоты доступа к базе данных.*

[![15-6.png](https://i.postimg.cc/pVCDvGKf/15-6.png)](https://postimg.cc/8sFFBbKc)

Пятнадцатый шаг. Проверяем статус IP-adress и переходим в базу данных.
*Статус должен быть изменен с "pending" на "active".*

[![16.png](https://i.postimg.cc/Fsn3dYW1/16.png)](https://postimg.cc/rKxK7wLL)

Шестнадцатый шаг. Нажимай на кнопку "Connect" (подключиться).

[![17.png](https://i.postimg.cc/6p2RdBgc/17.png)](https://postimg.cc/RWmNmxMJ)

Семнадцатый шаг. Выбираем пункт "Connect to your application" (подключиться к Вашему приложению).

[![18.png](https://i.postimg.cc/Pq1wR2t8/18.png)](https://postimg.cc/675q7V49)

Восемнадцатый шаг. Коппируем URL-ссылку подключения к базе данных MongoDB. Она нам понадобиться позже. <br/>

[![19.png](https://i.postimg.cc/76VTxhJH/19.png)](https://postimg.cc/k625snyz)

*Заместо < password> нужно ввести Ваш пароль.* <br/>
*При желаии можно изменить название базы данных. Делается это следующим образом:* <br/>
*1. Берём наш URL mongodb+srv://Sproftestbot111:< password>@cluster0.b53ub.mongodb.net/myFirstDatabase?retryWrites=true&w=majority.* <br/>
*2. Стираем часть URL-адреса - myFirstDatabase?retryWrites=true&w=majority.* <br/>
*3. Добавляем своё название базы данных заместо myFirstDatabase.* <br/>
*4. Конечный вид URL-адреса должен иметь следующий вид - mongodb+srv://Sproftestbot111:Sproftestbot111@cluster0.b53ub.mongodb.net/Sproftestbot.* <br/>

## *Формируем config.js с уникальными данными*

Cоздаём файл config.js.

[![1.png](https://i.postimg.cc/sgBR4LVs/1.png)](https://postimg.cc/HrCKpBch)

Вносим уникальные данные ([подробно о уникальных данных](#уникальные-вводные-данные)), а именно токен ([инструкция как получить токен Telegram bot](#получение-токена)) и URL-адрес доступа в базу данных ([инструкция как получить URL-адрес доступа в MongoDB](#получение-url-адреса)). В результате Вы должны получить следующий блок кода.

```
module.exports = {
    TOKEN: '1960495189:AAG2B1a8UY4J_eM2RYrgfnWNBbB85-eiGQU',
    DB_URL: 'mongodb+srv://Sproftestbot111:Sproftestbot111@cluster0.b53ub.mongodb.net/Sproftestbot111'
}
```

Эти данные используются в файле init.js. <br/>
*Файл init.js это точка входа в приложение.*

1. Подключаем файл config.js с нашими уникальными данными.
```
const config = require('./config')
```
2. Проверяем первый аргумент класса TelegramBot.
```
const bot = new TelegramBot(config.TOKEN, {
    polling: true
})
```
3. Проверяем первый аргумент метода connect библиотеки mongoose.
```
const connect = mongoose.connect(config.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
```

## *Загрузка данных в MongoDB*
<br/>

**Сперва ответы на вопросы:** <br/>
Во-первых почему бы не сделать загрузку через чат с Telegram бот? Практика показала, что это банально не удобно. <br/>
Во-вторых можно было сделать CRUD, но в результате выйдет два раздельных приложения, а задача стояла - монолит. <br/>
<br/>

**Методика:** <br/>
Первый шаг. Загрузка происходит через локальные файлы формата json. Они находятся в папке db поделены по соотвествующим разделам. <br/>
Проверяем их наличие.

[![1.png](https://i.postimg.cc/Mpsz60DR/1.png)](https://postimg.cc/MnjCtQgK)

Второй шаг. Подключаем пакет mongoose и создаем модель для каждого файла db.

[![2.png](https://i.postimg.cc/rp3cW87w/2.png)](https://postimg.cc/Ny6Wvwg3)

Каждый файл состоит из подключаемой схем, в которой заполняется форма данных.

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

Третий шаг. Подключаем все модели (или конкретную, если нужно исправить данные одного раздела) в файл index.js <br/>
*В приложении, для дополнительной декомпозиции данных все данные собираются в один index.js, а после, с помощью деструктуризации подключаются к главному файлу index.js*

```
require('./models/project.model')
const Project = mongoose.model('project')
```


Четвертый шаг. Коппируем нужную функцию для конкретной коллекции. в главный файл index.js и сохраняем файл. После этого функция должна пробежаться по всем аргументам db файла и после сохранить их в MongoDB базе данных. <br/>
**Замечу, что после успешной загрузки данных, во избежания коппирования данных в базе данных - удалите функцию заполнянения данных** <br/>
*Пример наведён только для одного типа раздела данных*

[![3.png](https://i.postimg.cc/MK5S50g4/3.png)](https://postimg.cc/ppm4XjWY)
```
const db_project__school = require('./db/db_projects/db_projects__school.json')
db_project__school.projects__school.forEach(p => new Project(p).save().catch(e => console.log(e)))
```
*Замечу, что при большом количестве данных лучше разделять данные на дополнительные коллекции, чтобы избежать перенасыщения документами и следовательно не усложнять запросы выборки.*

---

Итоговый результат должен быть таким:

[![4.png](https://i.postimg.cc/rpjjYJSd/4.png)](https://postimg.cc/5HH8X8K1)

# **Функции**

Задачи проекта состоят из следующей целей:<br/>
1. Иметь доступ ко всем материалов проектов, которые реализовываются сейчас или реализовались в прошлом закрытой группе сотрудников, которые находятся на выезде. <br/>
2. Иметь доступ к оборудованию, которое поставляется компанией. <br/>
3. Иметь доступ к реестру проектов. Реестр проектов - это онлайн Excel таблица, которая заполняется разными сотрудниками параллельно, регистрируя там изменения или етапы выполнения конкретных проектних продаж. <br/>
4. Иметь доступ к статистике проектов. Статистика проектов - это онлайн Excel таблица, которая заполняется разными соттрудниками паралельно, регистрируя уровень продаж тех или иных продуктов компании, а также другие виды статистики по товарам, такие как поставки по регионам и так далее.

## Запускаем бота

Вводим название "S-Prof.Інформаційний бот" в поисковик Telegram. Поскольку я уже его запускал, а после удалил чат с ботом, то Telegram предлагает мне перезапустить бота. Вам Telegram предложит начать. Нажимаем кнопку Start. <br/>


### Функция закрытого бота

Поскольку бот должен быть закрытым, то все комманды покрываются условием, где истинна - это username сотрудников, а ложь - любой username не входящий в перечень сотрудников.<br/>
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

В случае истины пользователь получит:

[![1.gif](https://i.postimg.cc/s2T4s4wt/1.gif)](https://postimg.cc/qtC3GyfL)

В случае лжи пользователь получит:

[![2.gif](https://i.postimg.cc/43v2Rc9c/2.gif)](https://postimg.cc/5H0Sw6p9)

Аналогичные условия добавлены во все комманды, через которые может получить доступ пользователь, а конкретно их 4: 
1. start
```
bot.onText(/\/start/, msg => {
  ...
})
```
2. help
```
bot.onText(/\/help/, msg => {
  ...
})
```
3. statistic
```
bot.onText(/\/statistic/, msg => {
  ...
})
```
4. registry 
```
bot.onText(/\/registry/, msg => {
  ...
})
```

## *Найти проект*

Проект можно найти двумя методами исходя из целей: <br/> 
Первый метод - построить быстрый маршрут к местоположению объекта и узнать штамп объекта.<br/> 
Второй метод - получить полные данные: спецификацию объекта, его PDF и DWG форматы.

### Получить данные по проекту с помощью команды. 

Первый шаг. Нажимай на кнопку "Проекты". 

Код организован через switch case, чтобы перебрать все пункты главного меню, а именно:
1. Проекты.
2. Товары.
3. Статистика товаров.
4. Реестр товаров.
5. Скачать проект.
6. Актуальные товары.

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
**Пройдёмся по неописанным ранее частям кода:**<br/>
`chat_id`<br/>
Подключаем функцию function__get_chat_id в index.js поскольку первым аргументом в методе ssendMessage является ID того пользователя, кому нужно отправить данные.
```
const function__get_chat_id = require('./functions/get_chat_id__function')
```
Код самой функции:
```
    get_chat_id(msg) {
        return msg.chat.id
    }
```
`kb.home.projects`<br/>
Подключаем файл kb в index.js.<br/>
```
const kb = require('../src/keyboards/keyboard-buttons')
```
Файл состоит из блоков с вложеностью, где блок - это меню, а вложенность - перечень комманд входящее в это меню. Конкретно для меню home (главное меню), блок кода выглядит так:<br/>

```
module.exports = {
    home: {
        projects: 'Проекти',
        statistic: 'Статистика об\'єктів',
        analytics: 'Реєстр об\'єктов',
        products: 'Товари',
        download: 'Скачати проект',
        actualy: 'Актуальні товари'
    }
}
```
При нажатии пользователем любой из комманды, пользователь отправляет на сервер Telegram запрос: <br/>
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
case реагирует на событие ключ-значение: "text: 'Проекти'.<br/>

`bot.sendMessage(chat_id, command_text__projects, options)`<br/>
Метод sendMessage класса bot возвращает Promise и принимает 3 аргумента:<br/>
1. сhat_id - обязательный параметр. ID чата, которому нужно отправить сообщение.<br/>
2. command_text__projects - обязательный параметр. Текст, который отправляется ID чату в ответ на событие.<br/>
3. options - необязательный параметр. Объект состоящий из аргументов, полный перечень которых можно узнать в [официальной документации Telegram](https://core.telegram.org/bots/api#sendmessage).<br/>

`reply_markup: {}` <br/>
reply_markup - объект клавиатуры, состоящий из аргументов, полный перечень которых можно узнать в [официальной документации Telegram](https://core.telegram.org/bots/api#replykeyboardmarkup).<br/>

`keyboard: keyboard.projects`<br/>
keyboard - ключ принимающий тип клавиатуры.<br/>
Типы клавиатур подключаются в index.js<br/>

```
const keyboard = require('../src/keyboards/keyboards')
```
А сама клавиатура для меню комманд "Проект" выглядит так:
```
const kb = require('./keyboard-buttons')

module.exports = {
    home: [
        [kb.home.projects, kb.home.products],
        [kb.home.statistic, kb.home.analytics],
        [kb.home.download, kb.home.actualy]
    ]
}
```

Подробнее об составлении клавиатур и размещении комманд внутри клавиатур можно узнать в [официально документации Telegram](https://core.telegram.org/bots/api#replykeyboardmarkup).<br/>

`resize_keyboard: true`<br/>
Метод позволяющий оптимизировать размер клавиатура под тип экрана пользователя путём вертикальной подгонки.<br/>

`one_time_keyboard: true`<br/>
Метод позволяющий скрывать клавиатуру после того, как она будет использована.<br/>
*Логика для обработки других меню аналогичная.*

[![1.gif](https://i.postimg.cc/9FRYd9Jh/1.gif)](https://postimg.cc/1fSFPfkC)


Второй шаг. Выбираем желаемый тип объекта. Всего типов объектов есть:
1. Детские садики.
2. Школы.
3. Учебно-воспитальные комплексы и учебно-воспитательные объеденения (спрощено УВК и УВО соответственно).
4. Лицеи.
5. Колледжи.
6. Об\`екты Finishing.
7. Фабрики-кухни.
8. Выставки.

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
**Пройдёмся по неописанным ранее частям кода:**<br/>

`send_project(chat_id, { type: 'Finishing' })` <br/>
Функция принимающая два параметра:
1. chat_id - обязательный параметр. Описан ранее.<br/>
2. {type: 'Finishing'} - обязательный параметр. Являет собой запрос, который принимает функция при получении события (нажатием пользователем, в нашем примере на клавишу Об`єкти-Finishing), после чего данный запрос передаётся в функцию send_project.<br/>

`function send_project(chat_id, query) {}`

Подключаем функцию send_project в файл index.js:<br/>
```
const send_project = require('./functions/send_project__by_query')
```
Логика описана ниже:<br/>
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
Функция принимающая два параметра:<br/>
1. chat_id - обязательный параметр. Описан ранее.<br/>
2. {query} - обязательный параметр. Являет собой запрос, который принимает функция при получении события (нажатием пользователем, в нашем примере на клавишу Об`єкти-Finishing).<br/>

Запрос передаётся в метод find модели Project. Подробнее об методах mongoose можно узнать в [официальной документации MongoDB](https://docs.mongodb.com/manual/tutorial/query-documents/).<br/>

`Project.find(query)`<br/>
Модели в mongoose являют собою Promise, при успешном возвращении которого мы получаем объект projects, аргументы которого - это поля каждого документа коллекции Project в нашей базе данных MongoDB.<br/>

`bot.sendSticker(chat_id, stickers.hot_cherry__presents)`<br/>
Чтобы использовать методы класса bot необходимо подключить класс bot в файл<br/>
```
const bot = require('../init')
```
Метод sendSticker отправляет пользователю стикер. Чтобы отправить стикер необходимо передать в метод два обязательных аргумента:<br/>
1. chat_id - обязательный параметр. Описан ранее.<br/>
2. file_id - обязательный параметр. Являет собой уникальный ID стикера, хранимый на серверах Telegram. Подробнее об file_id и методах отправки стикеров можно узнать в [официальной документации Telegram](https://core.telegram.org/bots/api#file)<br/>
В нашем случае мы подключаем файл stickers.js. stickers.js - это файл с перечнем уникальных file_id стикеров.<br/>
```
const stickers = require('./helpers/stickers')
```
Ключ-значения hot_cherry__presents:<br/>
```
const stickers = {
    hot_cherry__presents: 'CAACAgIAAxkBAAIbuGDkeNJaZV-af3GWmTZRXFesgpKnAAIdAAPANk8TXtim3EE93kggBA'
}

module.exports = stickers
```
**Важно! Возможны ошибки с file_id стикеров**<br/>
**file_id является не только уникальным для конретного документа, но и уникальным для конкретного чата из-за чего необходимо сформировать собственные file_id при использовании собственного бота**<br/>

Чтобы узнать собственный file_id:<br/>
1. Добавьте следующий блок кода в файл index.js:<br/>
```
bot.on('message', msg => {
    console.log(msg.sticker.set_name)
    console.log(msg.sticker.file_id)
})
```
2. Отправьте стикер в чат вашего бота, который действует.<br/>
3. Обновите file_id у конкретного стикера в файле stickers.js<br/>

`const html = projects.map((k, i) => {}`:<br/>
Формируем переменную из массива, созданного методом map. Метод map разворачивает массив объектов для каждого элемента массива projects.<br/><br/>
*Для других типов объектов логика аналогичная.*

[![2.gif](https://i.postimg.cc/L6vvrkgP/2.gif)](https://postimg.cc/PPpmDw4f)

Третий шаг. Выводим данным исходя из уникального ID проекта (uuid)

Комманда отвечающая за это включена в index.js и выглядит:
```
bot.onText(/\/k(.+)/, (msg, [source]) => {
    const projectUuid = helper.get_item__with__two_letter_uuid(source)
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

`bot.onText(/\/k(.+)/, (msg, [source]) => {})`:<br/>
Функция, позволяющая развернуть результат выборки `Project.findOne({ uuid: projectUuid })`, где source это результат выполнения выражения (k.)

`const projectUuid = get_item_uuid__function.get_item__with__two_letter_uuid(source)`:<br/>
Подключаем функцию helper в файл index.js 
```
const get_item_uuid__function = require('./functions/get_item_uuid__function')
```
Файл состоит из функций, которые укорачивают uuid запроса на количество символов этого uuid для избежания дублирования строки при обработке компиллятором.
```
module.exports = {
    get_item__with__two_letter_uuid(source) {
        return source.substr(2, source.length)
    }
}
```

`Project.findOne({ uuid: projectUuid })`:<br/>
1. В метод findOne вкладываем условие, при котором, uuid запроса дёргает projectUuid проекта с таким же самым значением после чего возращает Promise. 
2. После успешного выполнения Promise. 
3. Формируем метод then в который получает объект project, аргументы которого выводим в желаемое сообщение о проекте.
4. Выводим все необходимые данные в переменную `project_text`.

`bot.sendMessage(chat_id, project_text, {reply_markup}`:<br/>
Метод sendMessage класса bot возвращает Promise и принимает 3 аргумента:<br/>
1. сhat_id - обязательный параметр. ID чата, которому нужно отправить сообщение.<br/>
2. project_text - обязательный параметр. Текст, который отправляется ID чату в ответ на событие.<br/>
3. reply_markup - объект клавиатуры. Ранее описан.

`inline_keyboard: []`:<br/>
Объект встроенной клавиатуры применяющий массив массив массивов клавиш. В нашем случае массив состоящий из одной клавиши `text`.

`text: 'Показати на карті'`:<br/>
Присваиваем значением ключу `text`.<br/>

`callback_data: JSON.stringify({})`:<br/>
Данные, которые отправляются в запросе обратного вызова боту при нажатии кнопки. <br/>
**Важно! callback_data - это строка, которая может иметь размер не больше 64 байт.**<br/>

[![3.gif](https://i.postimg.cc/PrfQzLV5/3.gif)](https://postimg.cc/PNcDdqkg)

[![3-15-fs.gif](https://i.postimg.cc/Jh7sSJJs/3-15-fs.gif)](https://postimg.cc/21JjZ10Y)

Четвертый шаг. Отправляем следующую краткую информацию согласно проекту:<br/>
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

[![4.gif](https://i.postimg.cc/tgX6Mnt7/4.gif)](https://postimg.cc/gxTrwJ7P)

### Получить данные по проекту с помощью шифра проекта.




## *Найти желанный товар*

## *Посмотреть реестр проектов*

## *Просмотреть статистику по объектам*

## *Быстрый доступ к нужным товарам*

# **Заключение**
