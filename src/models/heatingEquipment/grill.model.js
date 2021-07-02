const mongoose = require('mongoose')
const Schema = mongoose.Schema

const grillSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    form: {
        type: String,
        required: true
    },
    appointment: {
        type: String,
        default: ''
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
    specializedData: {
        typeofBurners: {
            type: String,
            default: ''
        },
        numberAndPowerOfBurners: {
            type: String,
            default: '0'
        },
        materialOfBurners: {
            type: String,
            default: ''
        },
        latticeSize: {
            type: String,
            default: ''
        },
        typeOfCoating: {
            type: String,
            default: ''
        },
    },
    alternativeVolume: {
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
    options: {
        type: [String],
        default: []
    },
    NecessaryCommunications: {
        electrical: {
            type: String,
            default: ''
        },
        ventilation: {
            width: {
                type: Number,
                default: 0
            },
            depth: {
                type: Number,
                default: 0
            },
            height: {
                type: Number,
                default: 0
            }
        }
    }
})

mongoose.model('grill', grillSchema)