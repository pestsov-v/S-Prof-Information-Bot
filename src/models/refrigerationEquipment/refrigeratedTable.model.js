const mongoose = require('mongoose')
const Schema = mongoose.Schema

const refrigeratedTableSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    form: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true,
    },
    countryManufacturer: {
        type: String,
        required: true
    },
    series: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    numberPhases: {
        type: Number,
        default: 0
    },
    voltage: {
        type: Number,
        default: 0
    },
    power: {
        type: Number,
        default: 0,
        required: true
    },
    coldProduction: {
        type: Number,
        default: 0,
    },
    volume: {
        type: String,
        default: ''
    },
    width: {
        type: Number,
        required: true
    },
    depth: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    uuid: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        rquired: true
    },
    NecessaryCommunications: {
        electrical: {
            type: String,
            default: ''
        }
    }
})

mongoose.model('refrigeratedTable', refrigeratedTableSchema)