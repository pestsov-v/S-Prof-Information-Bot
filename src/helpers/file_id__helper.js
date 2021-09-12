const file_id = require('./fileId')
const stickers = require('./stickers')

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
        bot.sendDocument(chat_id, file_id.p_024_2021.pdf, {caption: file_id.p_023_2021.pdf__filename})        
        bot.sendDocument(chat_id, file_id.p_024_2021.xlsx, {caption: file_id.p_023_2021.xlsx__filename})
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