const express = require('express');
const router = express.Router();
const Owner = require('../models/owner.model'); // Assuming you have an Owner model

// GET route to fetch owner's details including properties
router.get('/api/owner/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const owner = await Owner.findOne({ email: email }).populate('properties'); // Assuming 'properties' is a field in the Owner model
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }
        res.json(owner);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// POST route to add or update owner's properties
router.post('/api/owner/:email/properties', async (req, res) => {
    try {
        const email = req.params.email;
        const propertiesData = req.body.properties; // Assuming properties data is sent in the request body

        let owner = await Owner.findOne({ email: email });
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }

        // Update the properties field with the new data
        owner.properties = propertiesData;
        await owner.save();

        res.json(owner);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
