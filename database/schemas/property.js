const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertySchema = new Schema({
    type: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    propertySize: {
        type: Number,
        required: true
    },
    propertyDescription: {
        type: String
    },
    agent: {
        type: String
    },
    listingDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Available', 'Pending', 'Sold'],
        default: 'Available'
    },
    images: {
        type: [String]
    }

})