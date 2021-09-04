const emodji = require('../../helpers/emoji')

const command_text__help = `Я можу тобі бути корисний в наступному ${emodji.smillingFace}: 

${emodji.redBook} Щоб проглянути або скачати подрібну інформацію натисни /objects або на клавішу "Проекти" ${emodji.fileCabinet}.

${emodji.greenBook} Щоб проглянути товари, додати в актуальне або перейти на офіціальний сайт виробника ${emodji.package} – натисни на команду /products або натисни клавішу "Товари" . 

${emodji.blueBook} Чтобы просмотреть статистику ${emodji.chartIncreasing} отгружаемых товаров, их количестве, а также другую статистику ${emodji.barChart} нажмите на кнопку «Статистика» или нажмите на команду /statistic. Вы сможете выбрать необходимую онлайн Excel-таблицу, а также, в случае необходимости, внести правки по поводу объектов.

${emodji.orangeBook} С помощью функции «Добавить в актуальное» ${emodji.lightBulb}, Вы сможете быстро сформировать необходимую спецификацию из товаров.
`

module.exports = command_text__help