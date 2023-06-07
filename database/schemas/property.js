const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    // status: {
    //     type: String,
    //     enum: ['Available', 'Pending', 'Sold'],
    //     default: 'Available'
    // },
    // images: {
    //     type: [String]
    // }
    
}, {timestamps: true} )

module.exports=mongoose.model('property',propertySchema);