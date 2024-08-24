const express = require('express');
const router = express.Router();
const Accommodation = require('../models/accommodation.model');

// Endpoint to add new accommodation
router.post('/add', async (req, res) => {
    const { location, price, amenities, type, availableFrom, availableTo } = req.body;
    const accommodation = new Accommodation({
        location, price, amenities, type, availableFrom, availableTo
    });
    try {
        await accommodation.save();
        res.status(201).json(accommodation);
    } catch (err) {
        res.status(500).json({ error: 'Error adding accommodation' });
    }
});

module.exports = router;
