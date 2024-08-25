const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    location: { type: String, required: true },
    budget: { type: Number, required: true },
    amenities: [String],
    lifestyle: String,
    roommatePreferences: String,
    quietEnvironment: Boolean,
    socialGatherings: Boolean,
    dietaryRestrictions: Boolean,
    petsInHouse: Boolean
});

module.exports = mongoose.model('Recommendation', RecommendationSchema);
