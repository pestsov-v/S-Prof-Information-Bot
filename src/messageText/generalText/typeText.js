const emoji = require('../../emoji')

const keycapOne =  '\u{0031}'


const typeText = `Объекты пищевого производства делятся на следующие типы:

<strong>1.</strong> Детский сады любого типа ${emoji.emodji.hotel}.

<strong>2.</strong> Разнообразные общеобразовательные учереждения: школы, учебно-воспитательные комплексы (НВК), школы-интернаты и другие ${emoji.emodji.school}.

<strong>3.</strong> Высшие учебные заведения: университеты и институты ${emoji.emodji.departmentStore}.

<strong>4.</strong> Пищеблоки санитарно-оздоровительных учереждений: больниц, санаториев, пансионатов и другие ${emoji.emodji.hospital}.

<strong>5.</strong> Учереждения общественного питания: рестораны, кафе, бары и другие ${emoji.emodji.officeBuilding}.

<strong>6.</strong> Выставки ${emoji.emodji.departmentStore}.

<strong>7.</strong> Finishing-объекты ${emoji.emodji.hotel}.

<strong>8.</strong> Фабрики-кухни ${emoji.emodji.factory}.

Для того чтобы получить список проектов определенного типа нажмите на /objects
`
module.exports = {
    typeText
}