const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dishwasher_elframo__schema = new Schema({
    type: {
        type: String,
        required: true
    },
    form: {
        type: String,
        required: true
    },
    subform: {
        type: String,
        default: ''
    },
    appointment: {
        type: String,
        default: ''
    },
    manufacturer: {
        type: String,
        required: true,
    },
    country_manufacturer: {
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
    article: {
        type: String,
        default: ''
    },
    number_phases: {
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
    inner_dimensions: {
        type: String,
        default: ''
    },
    alternative_volume: {
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
    necessary_communications: {
        electrical: {
            type: String
        },
        water_supply: {
            type: String
        },
        sewerage: {
            type: String
        },
        ventilation: {
            width: {
                type: Number
            },
            depth: {
                type: Number
            },
            height: {
                type: Number
            }
        }
    }
})

mongoose.model('dishwasher__elframo', dishwasher_elframo__schema)