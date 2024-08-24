const express = require('express');
const router = express.Router();
const Renter = require('../models/renter.model'); // Assuming you have a Renter model

// GET route to fetch renter's details including preferences
router.get('/api/renter/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const renter = await Renter.findOne({ email: email }).populate('preferences'); // Assuming 'preferences' is a field in the Renter model
        if (!renter) {
            return res.status(404).json({ message: 'Renter not found' });
        }
        res.json(renter);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// POST route to add or update renter's preferences
router.post('/api/renter/:email/preferences', async (req, res) => {
    try {
        const email = req.params.email;
        const preferencesData = req.body.preferences; // Assuming preferences data is sent in the request body

        let renter = await Renter.findOne({ email: email });
        if (!renter) {
            return res.status(404).json({ message: 'Renter not found' });
        }

        // Update the preferences field with the new data
        renter.preferences = preferencesData;
        await renter.save();

        res.json(renter);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
