const emodji = require('./emoji')

// projects__stamp
const p_001_2021 = {
    project__name: 'П-001-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIehWD1iQq1S-9N69UWRoYWt4v5rLrTAAIVDwACvGiwS2-MqcwINLR8IAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIeiGD1ijxSs1LNLvreBjzldRwDcZiiAAIZDwACvGiwSzA96bFdNIdRIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIeiWD1ilS3UGLFUM-Zrm14bqUc8FXsAAIaDwACvGiwS0Iz4f6N8RwfIAQ',
    caption: `Повний перелік інформації за об'єктом: "Загальноосвітня школа I - III ступенів № 15", яка знаходиться за адресою: вул. Новоросійська 12, Приморський район, м. Маріуполь, Донецька область`
}

const p_002_2021 = {
    project__name: 'П-002-2021',
    dwg__filename_pz: 'Пояснювальна записка в DWG',
    dwg_pz: 'BQACAgIAAxkBAAIohWEfabq1_nlR_RTacVkj5Q_bSNNZAAIODQACbY74SC3EFEwXDmriIAQ',
    dwg__filename_zp: 'Завдання проектній органінізації на влаштування комунікацій в DWG',
    dwg_zp: 'BQACAgIAAxkBAAIoh2Efas0tTOIgyXSHvARkV4g5FnhSAAIVDQACbY74SJrWA2lvBsZKIAQ',
    dwg__filename_tx: 'Основні креслення розділу ТХ в DWG',
    dwg_tx: 'BQACAgIAAxkBAAIoiWEfbRd-sxaBoy-BLZJMH9vGESWhAAIhDQACbY74SNYGqvayHjmpIAQ',
    dwg__filename_zz: 'Завдання заводу на розробку обладнання з нержавіючої сталі в DWG',
    dwg_zz: 'BQACAgIAAxkBAAIoimEfbWJqOYRSqSJDtrBTwKQP9o5_AAIjDQACbY74SMdH4JDjajJwIAQ',
    pdf__filename_pz: 'Пояснювальна записка в PDF',
    pdf_pz: 'BQACAgIAAxkBAAIohmEfajq6qUu2WcFrIs7UitPC5N0lAAITDQACbY74SIKCTQKaCCkFIAQ',
    pdf__filename_tx: 'Розділ ТХ в PDF',
    pdf_tx: 'BQACAgIAAxkBAAIoiGEfbHxSOOQNLSU6yRnkRXo0VhmYAAIYDQACbY74SGYcTxkkDP9bIAQ',
    xlsx__filename: 'Cпецифікація розділу ТХ в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIohGEfaWIWnlwwX4n4O9A_Uk32gXobAAIJDQACbY74SG-Avn-MyNHRIAQ',
    caption: `Повний перелік інформації за об'єктом: "Фабрика-кухня, яка знаходиться в приміщеннях харчоблоку №4", який знаходиться за адресою: вул. Лісова 1В, м. Нетішин, Славутський район, Хмельницька область.`
}

const p_003_2021 = {
    project__name: 'П-003-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoW2EfXov51q-reX57IK5yeyPd0Jy6AALBDAACbY74SFCa4GTE7DTcIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoXGEfXpMsUU1yDxCtr0DyJhc6gbsJAALCDAACbY74SDD8I2AT6DZBIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoWmEfXoJr9Zw1FyUW2a-iIwQxFBH0AALADAACbY74SH6ql9v3PXlEIAQ',
    caption: `Повний перелік інформації за об'єктом: "Луцький базовий фаховий медичний коледж", який знаходиться за адресою: вул. Лесі Українки 12, м. Луцьк, Луцький район, Волинська область.`
}

const p_004_2021 = {
    project__name: 'П-004-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoVWEfXFQzNLELCmLj1Y0hi-TnHGVFAAK7DAACbY74SNh6hx_A3wyFIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoVmEfXMPWBD5lIh8VDXpHHFgKiUflAAK8DAACbY74SM3a7iLST5_AIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoVGEfW5S_HoM_nHdoN9dOlqEr8CYpAAK6DAACbY74SJ-zl67EPgzYIAQ',
    caption: `Повний перелік інформації за об'єктом: "Київський спортивний ліцей-інтернат", який знаходиться за адресою: б. Вацлава Гавела 46, Солом'янський район, м. Київ, Київська область.`
}

const p_005_2021 = {
    project__name: 'П-005-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIooWEfhPuwpSnw6ZB0gGD6NIIYsW1TAAKIDQACbY74SFqzG8viHQpTIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIooGEfhJj91GkD49sC5i-gT5zkNbwAA4YNAAJtjvhIvdBwcju2pdogBA',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoomEfhPzS52V9yp4lxmoYueO5wgxvAAKJDQACbY74SC_ZlHBfonCUIAQ',
    caption: `Повний перелік інформації за об'єктом: "Ресторан "Острів", який знаходиться в районі м. Львова`
}

const p_006_2021 = {
    project__name: 'П-006-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoI2EeglEROKP8EzzIUKJE2OwpM_DvAAI7DwACbY7wSOy4KMPMsv8HIAQ',
    pdf_v1__filename: 'Проект в форматі PDF. Варіант № 1',
    pdf_v1: 'BQACAgIAAxkBAAIoIWEeghEdHPURWRjDCEwurqrtLeuMAAI4DwACbY7wSMQkoSEV5cidIAQ',
    pdf_v2__filename: 'Проект в форматі PDF. Варіант № 2',
    pdf_v2: 'BQACAgIAAxkBAAIoImEegi5UaRHhd-rMqBMUz0EtHV6JAAI6DwACbY7wSEzXV1_n3MR5IAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoIGEegfIzhfIUOeRhC8OxNEZOHIOoAAI3DwACbY7wSBjzu8l9e3brIAQ',
    caption: `Повний перелік інформації за об'єктом: "Загальноосвітня школа I - III ступенів", яка знаходиться за адресою: м. Станиця-Луганська, Станично-Луганський район, Донецька область.`
}

const p_007_2021 = {
    project__name: 'П-007.98-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoZ2EfYmiatIpvBwABYaRWHG9bN-3FPAAC3wwAAm2O-EhebiJXBP6fziAE',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoaGEfYnoeW1VFsaMzGwzxgX-QfHYlAALgDAACbY74SPwcMg7mZ_ANIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoZmEfYgwTU05WXSgwrjlziM8biOb4AALcDAACbY74SGbvooA2XK8yIAQ',
    caption: `Повний перелік інформації за об'єктом: об'єкт-Finishing "Спеціалізована школа I - III ступенів № 98 з поглибленим вивченням англійської мови", яка знаходиться за адресою: вул. Микитенка 7, Дніпровський район, м. Київ, Київська область.`
}

const p_008_2021 = {
    project__name: 'П-008.120-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoamEfYve4MztrMFu2pid1Ykrja_OtAALiDAACbY74SOg1VlmzGjvbIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoa2EfYwyQw_yG6bFzVdm8rN4rtzXpAALjDAACbY74SJGnpyPa9O9PIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoaWEfYqeNEhAX547mp6KcN4UfQrbMAALhDAACbY74SLUhpr30XRTgIAQ',
    caption: `Повний перелік інформації за об'єктом: об'єкт-Finishing "Спеціалізована школа № 120, з поглибленим вивченням предметів природничо-математичного циклу", яка знаходиться за адресою: вул. Райдужна 17-б, Дніпровський район, м. Київ, Київська область`
}

const p_009_2021 = {
    project__name: 'П-009.158-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIobWEfY21KqIXdRcboD2o28qTLeYuSAALlDAACbY74SHHUNFUUA_u5IAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIobmEfY4DGKbb0rTxcEhGCWOG2YtymAALmDAACbY74SGm_slM89ngoIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIobGEfYzaI4V1YGZXNeNvNkrN7WYcWAALkDAACbY74SPD9NZzXsk49IAQ',
    caption: `Повний перелік інформації за об'єктом: об'єкт-Finishing "Середня загальноосвітня школа № 158 I - III ступенів", яка знаходиться за адресою: вул. Стальського 12, Дніпровський район, м. Київ, Київська область.`
}

const p_010_2021 = {
    project__name: 'П-010.180-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIocGEfZBuZAAH0h-eWVGIC_kiiKnArYQAC6wwAAm2O-EhweGr-SWYtXyAE',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIocWEfZC7DNdwfdbKcaj3jiJ-h_JrpAALtDAACbY74SGjHJHXhOjDkIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIob2EfY6xOeR4AAQ0Z-LGJh_puIbb96gAC5wwAAm2O-Eg3iLrkS0ddWyAE',
    caption: `Повний перелік інформації за об'єктом: об'єкт-Finishing "Середня загальноосвітня школа № 180 I - III cтупенів", яка знаходиться за адресою: вул. Перова 21, Дніпровського району, м. Київ, Київська область.`
}

const p_011_2021 = {
    project__name: 'П-011.184-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoc2EfZKeaGyDkmw8sGhDQnvLBJvjOAALwDAACbY74SJWy3_RIK1F9IAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIodGEfZLtbGlm_ky1Sy_7mV9gBohi6AALxDAACbY74SGW8BSCvEPbWIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIocmEfZHZGxTclvnu5BAJaCW03Y7XsAALvDAACbY74SMnZ7U6MMUEbIAQ',
    caption: `Повний перелік інформації за об'єктом: об'єкт-Finishing "Середня загальноосвітня школа № 184 I - III ступенів", яка знаходиться за адресою: вул. Вільде 5, Дніпровського району, м. Київ, Київська область.`
}

const p_012_2021 = {
    project__name: 'П-012.201-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIodmEfZQUUfXjLcQ0jPoDsBoMXgz4fAALzDAACbY74SPnsSJEg-N6yIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIod2EfZRgGUKQaKLmuYGe3p13zHuvOAAL0DAACbY74SBblKFXvgbY-IAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIodWEfZNNDs2OBEpj9cek-woApDHsvAALyDAACbY74SJM7f1EuLn7FIAQ',
    caption: `Повний перелік інформації за об'єктом: об'єкт-Finishing "Середня загальноосвітня школа № 201 I - III cтупенів", яка знаходиться за адресою: б. Перова 14-а, Дніпровський район, м. Київ, Київська область.`
}

const p_013_2021 = {
    project__name: 'П-013.224-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoeWEfZWbAIVcGUT5bL5cYqhtb8ZugAAL2DAACbY74SHp0Cj5QzleTIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoemEfZXj9Hl-O_1WTtCpU00M4LEqZAAL3DAACbY74SBFSsxVtQkw4IAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoeGEfZSPnp0W1pcuUoFvzRTKIpLMIAAL1DAACbY74SHmRUw5xezrzIAQ',
    caption: `Повний перелік інформації за об'єктом: об'єкт-Finishing "Середня загальноосвітня № 224 I - III ступенів", яка знаходиться за адресою: вул. М. Кибальчича 5, Дніпровський район, м. Київ, Київська область.`
}

const p_014_2021 = {
    project__name: 'П-014.234-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIofGEfZdTDGbjconm_gaNYtimx16QRAAL5DAACbY74SJ5MQUWJHznhIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIofWEfZedBLcy6rse-RWYZWiJxRbGSAAL6DAACbY74SLjplsTcztrxIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoe2EfZadEZlFXIijyDkyHh032oD0rAAL4DAACbY74SH8SpCJD0xKxIAQ',
    caption: `Повний перелік інформації за об'єктом: об'єкт-Finishing "Спеціалізована школа № 234 I - III ступенів з поглибленим вивченням економіки та права", яка знаходиться за адресою: вул. Райдужна 12, Дніпровський район, м. Київ, Київська область.`
}

const p_015_2021 = {
    project__name: 'П-015.246-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIof2EfZlit-783aEvrdS4nFoGKq0nvAAL-DAACbY74SHf2Ipy0ZooHIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIogGEfZmgryXaoNKF8RCBD1XsV7jo2AAL_DAACbY74SOX2zv6VF4R_IAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIofmEfZhvoY4k-ydtuR2f4lu7SNBY0AAL7DAACbY74SHmKQumQPz4CIAQ',
    caption: `Повний перелік інформації за об'єктом: об'єкт-Finishing "Cередня загальноосвітня школа № 246 I - III cтупенів", яка знаходиться за адресою: вул. Кибальчича 7, Дніпровський район, м. Київ, Київська область.`
}

const p_016_2021 = {
    project__name: 'П-016.265-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIogmEfZvVktQlKqUynZjUuOW4cdj-yAAIDDQACbY74SC-w4vNY7e7EIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIog2EfZwiROmpqFzI4nkAm2OJtQSw6AAIEDQACbY74SOPILjEEvvtgIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIogWEfZnPSdXJDDysh3DzkiJ93sKxyAAMNAAJtjvhIUkKZfPkAAYlQIAQ',
    caption: `Повний перелік інформації за об'єктом: об'єкт-Finishing "Спеціалізована школа № 265 I - III ступенів з поглибленим вивченням предметів художно-естетичного циклу", яка знаходиться за адресою: вул. Райдужна 53, Дніпровський район, м. Київ, Київська область.`
}

const p_017_2021 = {
    project__name: 'П-017-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoD2Eee6aX6kA44oXOrvsZD8oI59h2AAILDwACbY7wSAa9IGiPBcH0IAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoEGEee9TUsfWeK6RHXjy3qEJetfZHAAIMDwACbY7wSOW4rn5r6CLRIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoDmEeelJLJaT6tmPqo45oOkIVwopSAAIBDwACbY7wSAzXp2Fa-6YZIAQ',
    caption: `Повний перелік інформації за об'єктом: "Дошкільний навчальний заклад № 497", який знаходиться за адресою: вул. Академіка Корольова 5-а, Святошинський район, м. Київ, Київська область.`
}

const p_018_2021 = {
    project__name: 'П-018-2021',
    dwg__filename_pz: 'Пояснювальна записка в DWG',
    dwg_pz: 'BQACAgIAAxkBAAIojWEfb8gitxVTsN3DbqtpZjYOtxc2AAIsDQACbY74SO0HJwaQSC84IAQ',
    dwg__filename_tx: 'Основні креслення розділу ТХ в DW',
    dwg_tx: 'BQACAgIAAxkBAAIoi2EfbvqDOVBnMNGF-Ej29kEBQsuhAAIqDQACbY74SCreZqyNHN_gIAQ',
    dwg__filename_zp: 'Завдання проектній органінізації на влаштування комунікацій в DWG',
    dwg_zp: 'BQACAgIAAxkBAAIojmEfcDRZCOw-Pmae42X4dyhFtKv5AAItDQACbY74SD_fMYCokmiQIAQ',
    dwg__filename_zz: 'Завдання заводу на розробку обладнання з нержавіючої сталі в DW',
    dwg_zz: 'BQACAgIAAxkBAAIojGEfb0vbg6rxFEEIhkEjBjUxB4t3AAIrDQACbY74SLeHumMaho4IIAQ',
    pdf__filename_pz: 'Пояснювальна записка в PDF',
    pdf_pz: 'BQACAgIAAxkBAAIokWEfcnl7Nl4F2_WCEH6E3Y_5zSY1AAI2DQACbY74SIRl3uuy-rhRIAQ',
    pdf__filename_tx: 'Розділ ТХ в PDF',
    pdf_tx: 'BQACAgIAAxkBAAIokGEfcfCTcWgCmZgxTktx8ql8BCF2AAIxDQACbY74SNAMnMNDm_YkIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoj2EfcDXdYQUFPVpM8mxrdBoxwNahAAIuDQACbY74SG0q4pI0AWa7IAQ',
    caption: `Повний перелік інформації за об'єктом: "Фабрика-кухня, яка розташована в приміщеннях загальноосвітньої школи на вул. Соломії Крушильницької", яка знаходиться за адресою: вул. ж / м Осокорки - Північні, Дарницький район, м. Київ, Київська область.`
}

const p_019_2021 = {
    project__name: 'П-019-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoJWEegs2XFBWC5cXIhN_TS_fT1cZrAAJBDwACbY7wSOmQ8JUj5Sv-IAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoJmEeguELsT5vuvrdt65naZVg_jE1AAJDDwACbY7wSDREtb3rWojGIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoJGEegoZCVmCr2kA4SqiR_9ZQFNMCAAI-DwACbY7wSHaddmxC-Iq2IAQ',
    caption: `Повний перелік інформації за об'єктом: "Середня загальноосвітня школа № 103 I - III ступенів", яка знаходиться за адресою: вул. Алматинська 89, Дніпровський район, м. Київ, Київська область.`
}

const p_020_2021 = {
    project__name: 'П-020-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIolGEfcv687gABGU5v8J2fmvlXngKOkgACPQ0AAm2O-Ei26FbNItpiniAE',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIok2EfcuyAl3hNggjF_nW5zE5tCALYAAI8DQACbY74SMKAcTDxt2k1IAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIokmEfcstMnJBP8CZSGTqu-PFrkDyAAAI7DQACbY74SH_Y_TW61nanIAQ',
    caption: `Повний перелік інформації за об'єктом: "Дошкільний навчальний заклад № 452", який знаходиться за адресою: вул. Ентузіастів 41 / 2, Дніпровський район, м. Київ, Київська область.`
}

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

const p_022_2021 = {
    project__name: 'П-022-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIqbWEtFigcywe2riBjfXFprqWC45jfAAJFEwACkyNpSepw58E5AAFU5SAE',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIqbmEtFlFxR1kkA-YhlmFbur-l6MQUAAJIEwACkyNpSTce7iLZ1JbdIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIqb2EtFlh6b71jIn5FXr9t1S9VemoNAAJJEwACkyNpSVoug0VFBLOpIAQ',
    caption: `Повний перелік інформації за об'єктом: "Дошкільний навчальний заклад № 619", який знаходиться за адресою: в. Сосницька 8-а, Дніпровський район, м. Київ, Київська область.`
}

const p_023_2021 = {
    project__name: 'П-023-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoSmEfWHxdKVNkyjwPGxm6T_Bj2BswAAKuDAACbY74SG4maKIiRNgqIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIqh2EtFx_Lh8UhCS7ShG88XhdNHPqgAAJSEwACkyNpSVZWX6GpyBOIIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIqiGEtFyxOqHN7TK2eq2o9cuYGxOLEAAJTEwACkyNpSaJIURxHZw6mIAQ',
    caption: `Повний перелік інформації за об'єктом: "Навчально-виховний комплекс № 167 з поглибленим вивченням іноземних мов", який знаходиться за адресою: проспект Соборності 12-в, Дніпровський район, м. Київ, Київська область.`
}

const p_024_2021 = {
    project__name: 'П-024-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoS2EfWLrJVQOagM5Xo0LgY0YZkX2TAAKvDAACbY74SA7Lek3ybo4lIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoTGEfWNlatfsRBd4rQbMreur6Tfw0AAKwDAACbY74SF0bvwabxuOtIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoTWEfWQjuMosbZtyJhksZEM4zuAvxAAKxDAACbY74SNgiQ9VkCyDPIAQ',
    caption: `Повний перелік інформації за об'єктом: "Навчально-виховний комплекс № 183 "Фортуна" з поглибленим вивченням іноземних мов", який знаходиться за адресою: в. Юності 5, Дніпровський район, м. Київ, Київська область.`
}

const p_025_2021 = {
    project__name: 'П-025-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoKGEeg7P2HTpHTOks2uJ2ghkONtSrAAJKDwACbY7wSMMUKZ5cK58tIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoKWEeg9LOCmjlm8Iz3z-5xtjWHaxhAAJMDwACbY7wSC3MD3btEIevIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoJ2Eeg1cNEaywjnTM4EWzIr4iorJfAAJHDwACbY7wSH7LfE-PFex1IAQ',
    caption: `Повний перелік інформації за об'єктом: "Середня загальноосвітня школа № 184 I - III ступенів", яка знаходиться за адресою: "вул. Вільде 5, Дніпровський район, м. Київ, Київська область.`
}

const p_026_2021 = {
    project__name: 'П-026-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoK2EehDZ6HvPs7oIscrHjKZlKotaQAAJSDwACbY7wSEzIeHNJvoLgIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoLGEehFmSiDVrexQbxbxCI0Ph7xvZAAJTDwACbY7wSAABeak6zHZrHyAE',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoKmEehCLUj2OsR_Y2T8n_3zl3Yh4NAAJQDwACbY7wSJO_F2A8_2Y2IAQ',
    caption: `Повний перелік інформації за об'єктом: "Середня загальноосвітня школа № 228 I - III ступенів", яка знаходиться за адресою: в. Березняківська 34, Дніпровський район, м. Київ, Київська область.`
}

const p_027_2021 = {
    project__name: 'П-027-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoLWEehHM2-HdCRVOHlh6dpxeua0XgAAJUDwACbY7wSERZbGYUTdefIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoLmEehI-Coh5ag7fH8eJaEzxFXGssAAJWDwACbY7wSE5xLkvN5BNMIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoL2EehLvKHiUfDneyt7fIGA06Q7CsAAJZDwACbY7wSKNIN_hjyfbPIAQ',
    caption: `Повний перелік інформації за об'єктом: "Середня спеціалізована школа № 65 I - III ступенів з поглибленим вивченням іноземних мов", яка знаходиться за адресою: в. Челябінська 5, Дніпровський район, м. Київ, Київська область.`
}

const p_028_2021 = {
    project__name: 'П-028-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIquWEtGGSBXC-Z42DZ2PCYIxBUJUxkAAJVEwACkyNpSfwvLbqKaVVBIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIqvGEtGIifaZJvmkwsyid8uW7ygtyAAAJYEwACkyNpSaGS7cH_3BNjIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIqumEtGGz596GoxCRnE2pezdp10gGsAAJWEwACkyNpSchJUvY50MeYIAQ',
    caption: `Повний перелік інформації за об'єктом: "Дошкільний навчальний заклад № 454", який знаходиться за адресою: в. Березняківська 26-а, Дніпровський район, м. Київ, Київська область.`
}

const p_029_2021 = {
    project__name: 'П-029-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoMWEehSZGJ0MvEzIVOb7gI3nt5yCtAAJjDwACbY7wSKcYLuJJSeTlIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoMmEehUDGawn4AeJulU_Ig7jcKXuKAAJlDwACbY7wSOSeEyPoQmkkIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoMGEehOyjhQwPqC3wIw-_SiCi5LtsAAJfDwACbY7wSD6tspdxnv16IAQ',
    caption: `Повний перелік інформації за об'єктом: "Середня спеціалізована школа № 127 I - III ступенів", яка знаходиться за адресою: вул. Алтинська 13, Дарницький район, м. Київ, Київська область.`
}

const p_030_2021 = {
    project__name: 'П-030-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoUGEfWWV8e6qDmLNjCkaqOJZk0A0XAAK0DAACbY74SJRehmg00rG-IAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoT2EfWVcyL4pRE2Esq7Bsf6LyQEYvAAKzDAACbY74SGB4ev5H-Bz9IAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoTmEfWTozAqQb6aM-YCjyftkq0nowAAKyDAACbY74SCA2m_2Y5teJIAQ',
    caption: `Повний перелік інформації за об'єктом: "Комунальний заклад Зазимьскої сільської ради Броварського району Київської області "Пухівське навчально-виховне об'єднання", яке знаходиться за адресою: в. Поштова 13, Броварський район, с. Пухівка, Київська область.`
}

const p_031_2021 = {
    project__name: 'П-031-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoUmEfWcNhFjEhxqm3gKKSW74zAAGFDQACtgwAAm2O-EjaT1R-vjRD6SAE',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoU2EfWevoZic96QgeiOpAJY6D00ztAAK4DAACbY74SKEmjmFdxpQkIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoUWEfWac9-Vs7hZ-dpjOG8Ofm_KEtAAK1DAACbY74SGrpf0ZC3aSDIAQ',
    caption: `Повний перелік інформації за об'єктом: "Навчально-виховний комплекс "ЗАгальноосвітня школа I - II ступенів - дошкільний навчальний заклад", який знаходиться за адресою: в. Свободи 70, с. Рожни, Броварський район, Київська область.`
}

const p_032_2021 = {
    project__name: 'П-032-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoM2Eehf0ePtQm57IcCqrov2EHNJK3AAJsDwACbY7wSMk16rTNz2Z1IAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoNGEehhw9GBQ9IXJskFdHWtxLCxjIAAJtDwACbY7wSBRSkXuol3TiIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoNWEehkc6qZOfmg3OHcECZXMgajVqAAJwDwACbY7wSMOaUK0bC58DIAQ',
    caption: `Повний перелік інформації за об'єктом: "Спеціалізована загальноосвітня школа № 274 I - III ступенів", яка знаходиться за адресою: в. Харківське шосе 168-і, Дарницький район, м. Київ, Київська область.`
}

const p_033_2021 = {
    project__name: 'П-033-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoN2Eehp1-oUI9gk-wOLSevpEeqbb8AAJ0DwACbY7wSMyIUiEeDV1WIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoOGEehrviu8fJEjTyTIwY1dvgEbenAAJ2DwACbY7wSJl4pG5-SdIjIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoNmEehnt4SffyOE4cWnuBDuVBJHclAAJzDwACbY7wSOf0NxAqsLghIAQ',
    caption: `Повний перелік інформації за об'єктом: "Петропавлівська-Борщагівська загальноосвітня школа", яка знаходиться за адресою: "вул. Соборна 30, с. Петропавлівська-Борщагівка, Києво-Святошинський район, Київська область.`
}

const p_034_2021 = {
    project__name: 'П-034-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoOmEehu2nsqql2RVWkpVhgwthLDr4AAJ6DwACbY7wSAdz49yd-2OOIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoO2Eehv72zVbfO1ipH8v4yFUShFkOAAJ8DwACbY7wSFG8fAmr1bpPIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoOWEehtJSovHAj8Nc-Z2sSUWudNc1AAJ3DwACbY7wSKdoulOZOoWPIAQ',
    caption: `Повний перелік інформації за об'єктом: "Загальноосвітня школа № 308 I - III ступенів",яка знаходиться за адресою: в. Гадинська 6-б, Деснянський район, м. Київ, Київська область.`
}

const p_035_2021 = {
    project__name: 'П-035-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoPmEeh4JO-UOlglkwPkO4bMoXfEYzAAKBDwACbY7wSA9O0cu6sBKnIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoPWEeh2DKbZWH6lOhGnkmz6stbucEAAKADwACbY7wSMfwmS5501X6IAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoPGEehzROey5sAgmEk_baTpX1r8YiAAJ-DwACbY7wSO8SZO_gnNatIAQ',
    caption: `Повний перелік інформації за об'єктом: "Загальноосвітня школа № 34 I - III ступенів", яка знаходиться за адресою: в. Текстильників 27, м. Чернігів, Чернігівський район, Чернігівська область.`
}

const p_036_2021 = {
    project__name: 'П-036-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoP2EfVmOuBPM7zwzxYO9LIRT2gJw5AAKfDAACbY74SLmSL3qnfbggIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoQGEfVoWD6w8IUTSK3RxSIx8Za9MoAAKhDAACbY74SCImOkIFrGDxIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoQWEfVobD6ZrHqO5USKlUdmYgGB8kAAKiDAACbY74SHmYIlydmN0CIAQ',
    caption: `Повний перелік інформації за об'єктом: "Спеціалізована школа № 255 I - III ступенів " 255 з поглибленим вивченням природничо-математичних предметів", яка знаходиться за адресою: в. Архітектора Вербицького 26-в, Дарницький район, м. Київ, Київська область.`
}

const p_037_2021 = {
    project__name: 'П-037-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoXmEfXuhYg4UXe1c4PrY-AxNYJ5UxAALEDAACbY74SE4ZezqviA0iIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoX2EfXws5zTN6Q_Jry1wxEEautJNCAALFDAACbY74SOugL9Pi0Q4SIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoXWEfXtlsgsPoDBC0-RqknoLMGclYAALDDAACbY74SPo3yII3HV2IIAQ',
    caption: `Повний перелік інформації за об'єктом: "Гімназія № 261", яка знаходиться за адресою: в. Вербицького 7, Дарницький район, м. Київ, Київська область.`
}

const p_038_2021 = {
    project__name: 'П-038-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIonmEffnZulvj0wNzGk-1y0aYH-hMYAAJ3DQACbY74SP_xxOYzFKQvIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIon2Effngzx4KE0FNOgRw4N_yisol9AAJ4DQACbY74SJw_5ECUPcDNIAQ',
    xlsx__filename_v1: 'П-038-2021.C1.xlsx',
    xlsx_v1: 'BQACAgIAAxkBAAIolWEffh2fT4mSg7lGizArjMZJxepdAAJtDQACbY74SOhsJW2Ui4MyIAQ',
    xlsx__filename_v2: 'П-038-2021.C2.xlsx',
    xlsx_v2: 'BQACAgIAAxkBAAIolmEffh4pQKVPyOBW2ubr6TuFn2l5AAJuDQACbY74SGWjB5saSo4cIAQ',
    xlsx__filename_v3: 'П-038-2021.C3.xlsx',
    xlsx_v3: 'BQACAgIAAxkBAAIol2EffiBuiXx3mH802zq-PBCuayBPAAJvDQACbY74SJ4Tcct5nkdgIAQ',
    xlsx__filename_v4: 'П-038-2021.C4.xlsx',
    xlsx_v4: 'BQACAgIAAxkBAAIomGEffiHVfKyGFBmzFcxBVkDdDay6AAJwDQACbY74SHkjdrgrGgZIIAQ',
    xlsx__filename_v5: 'П-038-2021.C5.xlsx',
    xlsx_v5: 'BQACAgIAAxkBAAIomWEffilyT_zLui2kQngKEmmbEwrOAAJxDQACbY74SDSstHnJwuVPIAQ',
    xlsx__filename_v6: 'П-038-2021.C6.xlsx',
    xlsx_v6: 'BQACAgIAAxkBAAIommEffimPgyUfgqMqVWe3nDgJ6mWTAAJyDQACbY74SBxsMLRtg7KoIAQ',
    xlsx__filename_v7: 'П-038-2021.C7.xlsx',
    xlsx_v7: 'BQACAgIAAxkBAAIom2EffiqwlBg7VzywfDaxui3UK1IeAAJzDQACbY74SCkJ-UQ5OxB_IAQ',
    xlsx__filename_v8: 'П-038-2021.C8.xlsx',
    xlsx_v8: 'BQACAgIAAxkBAAIonGEffir18uAsrT3b9PhasrANCV3lAAJ0DQACbY74SPytv1y-FZD-IAQ',
    xlsx__filename_v9: 'П-038-2021.C9.xlsx',
    xlsx_v9: 'BQACAgIAAxkBAAIonWEffip4_R5MPiMaEGt_aH9dlXKnAAJ1DQACbY74SHvlYhYnYql1IAQ',
    caption: `Повний перелік інформації за об'єктом: група ресторанів "Фудкорти", які знаходиться на території міста Львова.`
}

const p_039_2021 = {
    project__name: 'П-039-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIrLGEtGVGsq9XT7YZeAAExO8PY0H5gZwACXBMAApMjaUnO12EXuP0nEiAE',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIrK2EtGU6yqt9gTFO-J_hhC_mRFvpGAAJaEwACkyNpSbX1e2cGJaX1IAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIrNGEtGYTuknj9L9LYoeNr72xi7-mcAAJeEwACkyNpSaezuk3SmJoZIAQ',
    caption: `Повний перелік інформації за об'єктом: "Спеціалізована школа № 305 I - III ступенів з поглибленим вивченням іноземної мови", яка знаходиться за адресою: в. Євгена Харченка 53, Дарницький район, м. Київ, Київська область.`
}

const p_040_2021 = {
    project__name: 'П-040-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoV2EfXgq67BHgbm1fa-KJinLbcEONAAK9DAACbY74SJ3QeWICYE77IAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoWGEfXitAsPE9QaGhxhEh8gqP0bvOAAK-DAACbY74SID_Dv61qlPPIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoWWEfXiuZgoeUWPMAAQ3cJkQNMw8C9QACvwwAAm2O-Ejy88CxtYlyuSAE',
    caption: `Повний перелік інформації за об'єктом: "Ліцей "Наукова зміна", який знаходиться за адресою: проспект Петра Григоренка 12-в, Дарницький район, м. Київ, Київська область.`
}

const p_041_2021 = {
    project__name: 'П-041-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoQmEfVr_MZs07CQcNLTU37LkStLGqAAKkDAACbY74SMYiGrPLadX7IAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoQ2EfVxUPeVcMbmzKg71XR61hSnVBAAKmDAACbY74SLGt1n5yHKadIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoRGEfVzZOwUjzv_PrERnUUFWNJLQeAAKnDAACbY74SD_NtetsgdQgIAQ',
    caption: `Повний перелік інформації за об'єктом: "Спеціалізована школа № 23", яка знаходиться за адресою: "в. Торська, м. Слов'янськ, Констянтинівський район, Донецька область.`
}

const p_042_2021 = {
    project__name: 'П-042-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoRmEfV6WJ6sRNiGtXY9WW5GyNbvBvAAKqDAACbY74SKViwYt_6-zlIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoR2EfWAy_us-BKEV42CwuXpvCKr5XAAKrDAACbY74SFw0jB7ziK7dIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoRWEfV3p6NKIjkwABm9-gISdF_lv1DAACqAwAAm2O-EhwcWRkGblobiAE',
    caption: `Повний перелік інформації за об'єктом: "Загальноосвітня школа № 18 I - III ступенів", яка знаходиться за адресою: в. О. Кошового 18, м. Краматорськ, Краматорський район, Донецька область.`
}
const p_043_2021 = {
    project__name: 'П-043-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoYGEfX4WJPWssRsYJk4WeQIh-3xd4AALGDAACbY74SP-XPEy0fbzZIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoYWEfX6dZMc2ykD_UI7cVPL-OlNNHAALHDAACbY74SIchUJLu7EayIAQ',
    xlsx__filename: 'Cпецифікація в форматі xlsx',
    xlsx: 'BQACAgIAAxkBAAIoYmEfX9FkQEV2C_VuJwzHLDO49teGAALIDAACbY74SMsBZf7vtG_9IAQ',
    caption: `Повний перелік інформації за об'єктом: "Гімназія № 34 "Либідь" ім. В. Максименка", яка знаходиться за адресою: в. Межова 22, Подільский район, м. Київ, Київська область.`
}

const p_044_2021 = {
    project__name: 'П-044-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAIoZGEfYAdk0QNifwZo2o4DsmnelCFcAALKDAACbY74SFsl9UXVHKR9IAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAIoZWEfYCkKm-zzFfqgAAGs4-PQ_dS6qwACywwAAm2O-EjeDloXGkPXnCAE',
    xlsx__filename: 'Cпецифікація в форматі xlsx ',
    xlsx: 'BQACAgIAAxkBAAIoY2EfX_UNylzBlTDssPrE6oNTgvJpAALJDAACbY74SM7D_etEDA5iIAQ',
    caption: `Повний перелік інформації за об'єктом: "Гімназія "Діалог", яка знаходиться за адресою: в. Кошиця Олександра 6, Дарницький район, м. Київ, Київська область.`
}

const p_045_2021 = {
    project__name: 'П-045-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAI6d2EyEzEkpMUEYaQNjg2Zw3aqtnqJAAIEEQACJHaQSWDtvG3DIBBbIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAI6eGEyE0ZvSfwOzXD4yabmSszuqc8uAAIFEQACJHaQSekJ3vLG2uu4IAQ',
    xlsx__filename: 'Cпецифікація в форматі PDF',
    xlsx: 'BQACAgIAAxkBAAI6dmEyEynCfE1LItdRCkshlubJTGjIAAIDEQACJHaQSbR99k9Q6sRNIAQ',
    caption: `Повний перелік інформації за об'єктом: "Влаштування технологічного, кухонного, обладнання в приміщеннях харчоблоку санаторно-оздоровчого центру соціальної реабілітації "Смарагдове місто", яке знаходиться за адресою: вул. Лісна 1-а, с. Соснове, смт Ярова, Лиманський район, Донецька область.`
}

const p_046_2021 = {
    project__name: 'П-045-2021',
    dwg__filename: 'Проект в форматі DWG',
    dwg: 'BQACAgIAAxkBAAI6emEyE7hs3gq3IulF7qJGMxRxNTGDAAIJEQACJHaQScoNajI7_BlWIAQ',
    pdf__filename: 'Проект в форматі PDF',
    pdf: 'BQACAgIAAxkBAAI6eWEyE7RR5L-C15x-csG-tUKHu7pAAAIIEQACJHaQSYrliM6fgT6YIAQ',
    xlsx__filename: 'Cпецифікація в форматі PDF',
    xlsx: 'BQACAgIAAxkBAAI6e2EyE7y1WNaAt6wBvWqMyS-JaPiUAAIKEQACJHaQSec1FAI4o-viIAQ',
    caption: `Повний перелік інформації за об'єктом: "Влаштування кухонного, технологічного обладнання, обладнання в приміщеннях харчоблоку спеціалізованої, загальноосвітної школи № 291 з поглибленим вивченням іноземної мови", яка знаходиться за адресою: вул. Тростянецька 19, Дарницький район, м. Київ, Київська область.`
}


module.exports = {
    p_001_2021,
    p_002_2021,
    p_003_2021,
    p_004_2021,
    p_005_2021,
    p_006_2021,
    p_007_2021,
    p_008_2021,
    p_009_2021,
    p_010_2021,
    p_011_2021,
    p_012_2021,
    p_013_2021,
    p_014_2021,
    p_015_2021,
    p_016_2021,
    p_017_2021,
    p_018_2021,
    p_019_2021,
    p_020_2021,
    p_021_2021,
    p_022_2021,
    p_023_2021,
    p_024_2021,
    p_025_2021,
    p_026_2021,
    p_027_2021,
    p_028_2021,
    p_029_2021,
    p_030_2021,
    p_031_2021,
    p_032_2021,
    p_033_2021,
    p_034_2021,
    p_035_2021,
    p_036_2021,
    p_037_2021,
    p_038_2021,
    p_039_2021,
    p_040_2021,
    p_041_2021,
    p_042_2021,
    p_043_2021,
    p_044_2021,
    p_045_2021,
    p_046_2021
}