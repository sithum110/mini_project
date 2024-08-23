const express = require('express');
const router = express.Router();
const Recommendation = require('../models/recommendation.model');
const Accommodation = require('../models/accommodation.model');

// Endpoint to get recommendations based on user preferences
router.post('/getRecommendations', async (req, res) => {
    const { location, budget, amenities } = req.body;
    try {
        // Simple content-based filtering logic
        const accommodations = await Accommodation.find({
            location: location,
            price: { $lte: budget },
            amenities: { $in: amenities }
        });
        res.json(accommodations);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching recommendations' });
    }
});

module.exports = router;
