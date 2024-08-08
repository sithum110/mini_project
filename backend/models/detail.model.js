const mongoose = require('mongoose');

const DetailSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    garage: { type: Boolean, required: true },
    area: { type: Number, required: true },
    type: { type: String, required: true },
    buildYear: { type: Number, required: true },
    amenities: { type: [String], required: true },
    images: { type: [String], required: true },
    agent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },  // Reference to the user (agent)
}, {
    timestamps: true
});

const Detail = mongoose.model('Detail', DetailSchema);
module.exports = Detail;
