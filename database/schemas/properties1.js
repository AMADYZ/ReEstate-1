const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    title: {
      type: String
    },
    text: {
      type: String
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    title: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    condition: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    type: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    location: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    description: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    bedrooms: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    bathrooms: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    area: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    locationgps: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    urllocation: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    price: {
        type: mongoose.SchemaTypes.Number,
        required: true
    },
    code: {
        type: mongoose.SchemaTypes.String,
        required: true
    },
    adminmessage: {
        type: mongoose.SchemaTypes.String
    },
    comment: [commentSchema],
    Pending:
    {
        type:mongoose.SchemaTypes.String,
        required:true
    }

});

module.exports = mongoose.model('properties1', UserSchema);