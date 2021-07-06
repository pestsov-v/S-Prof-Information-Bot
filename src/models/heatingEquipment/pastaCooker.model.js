const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pastaCookerSchema = new Schema({
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
        type: String
    },
    name: {
        type: String,
        required: true
    },
    article: {
        type: String,
        default: ''
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

mongoose.model('pastaCooker', pastaCookerSchema)