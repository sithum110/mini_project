const mongoose = require('mongoose');

const AccommodationSchema = new mongoose.Schema({
    location: { type: String, required: true },
    price: { type: Number, required: true },
    amenities: [String],
    type: { type: String, required: true },  // Apartment, House, etc.
    availableFrom: { type: Date, required: true },
    availableTo: { type: Date }
});

module.exports = mongoose.model('Accommodation', AccommodationSchema);