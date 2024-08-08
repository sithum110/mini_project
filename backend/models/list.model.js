const mongoose = require('mongoose');

// Define the schema for a property listing
const PropertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    type: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    listedDate: {
        type: Date,
        default: Date.now,
    }
});

// Create the model from the schema
const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;
