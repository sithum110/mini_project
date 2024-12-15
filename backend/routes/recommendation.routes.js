const express = require('express');
const router = express.Router();
const forum = require('../models/forum.model');
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

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle
    while (currentIndex !== 0) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}





router.get('/getRecommendations', async (req, res) => {
    console.log('GET /getRecommendations');
    try {
        const recommendations = await forum.find();

        // Shuffle the recommendations
        const shuffledRecommendations = shuffleArray(recommendations);

        // Select 4 or 5 random recommendations
        const numToSelect = Math.floor(Math.random() * (5 - 4 + 1)) + 4;
        const selectedRecommendations = shuffledRecommendations.slice(0, numToSelect);

        res.json(selectedRecommendations);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching recommendations' });
    }
});

module.exports = router;
