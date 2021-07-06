module.exports = {

    getChatId(msg) {
        return msg.chat.id
    },

    // bar equipment
    getCoffeeGrinderUuid(source) {
        return source.substr(3, source.length)
    },
    getCoffeeeMakerUuid(source) {
        return source.substr(3, source.length)
    },
    getJuicerUuid(source) {
        return source.substr(2, source.length)
    },
    getMilkFrotherUuid(source) {
        return source.substr(3, source.length)
    },

    getItemUuid(source) {
        return source.substr(2, source.length)
    },

    getProductUuid(source) {
        return source.substr(2, source.length)
    },

    getMultiPenUuid(source) {
        return source.substr(3, source.length)
    },

    getElframoDishwasherUuid(source) {
        return source.substr(5, source.length)
    },

    getElframoGlassWasherUuid(source) {
        return source.substr(4, source.length)
    },

    getElframoPotWashingMachineUuid(source) {
        return source.substr(5, source.length)
    },
    
    getSamarefRefrigeratedTableUuid(source) {
        return source.substr(3, source.length)
    },
    
    getSamarefRefrigeratiorCabinetUuid(source) {
        return source.substr(3, source.length)
    },

    getElframoShockFreezerUuid(source) {
        return source.substr(3, source.length)
    },

    getRmGastroGrillUuid (source) {
        return source.substr(3, source.length)
    },
    
    getRmGastroBainMarieUuid (source) {
        return source.substr(4, source.length)
    },

    getRmGastroDeepFryerUuid (source) {
        return source.substr(4, source.length)
    },

    getRmGastroFoodBoilerUuid (source) {
        return source.substr(4, source.length)
    },

    getRmGastroPastaCookerUuid (source) {
        return source.substr(4, source.length)
    },

    getRmGastroPenUuid (source) {
        return source.substr(4, source.length)
    },

    getRmGastroPlateUuid (source) {
        return source.substr(4, source.length)
    },

    getProductsByFourLittersUuid (source) {
        return source.substr(4, source.length)
    }
}