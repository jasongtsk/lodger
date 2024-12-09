const mongoose = require('mongoose');

const lodgeSchema = new mongoose.Schema({
    imageURL: String,
    name: String,
    city: String,
    country: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    description: String,
    bedrooms: {
        type: Number,
    },
    bathrooms: {
        type: Number,
    },
    createdOn: {
        type: Date,
        'default': Date.now
    }
});


mongoose.model('lodge', lodgeSchema);