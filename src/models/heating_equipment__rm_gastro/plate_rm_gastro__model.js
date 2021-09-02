const mongoose = require('mongoose')
const Schema = mongoose.Schema

const plate_rm_gastro__schema = new Schema({
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
    country_manufacturer: {
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
    specialized_data: {
        type_of_burners: {
            type: String,
            default: ''
        },
        number_and_power_of_burners: {
            type: String,
            default: '0'
        },
        material_of_burners: {
            type: String,
            default: ''
        },
        lattice_size: {
            type: String,
            default: ''
        }
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

mongoose.model('plate__rm_gastro', plate_rm_gastro__schema)