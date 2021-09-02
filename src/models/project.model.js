const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
    project_name: {
        type: String,
        required: true
    },
    object_name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    dwgLinks: {
        type: String
    },
    pdfLinks: {
        type: String
    },
    xslsLinks: {
        type: String
    },
    location: {
        latitude: {
            type: Number
        },
        longitude: {
            type: Number
        }
    },
    stamp: {
        type: String,
        required: true
    },
    uuid: {
        type: String,
        required: true
    }
})

mongoose.model('project', ProjectSchema)

