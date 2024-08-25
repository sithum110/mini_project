const express = require('express');
const router = express.Router();
const Property = require('../models/property.model');
const Owner = require('../models/owner.model');

// GET route to fetch all properties
router.get('/api/properties', async (req, res) => {
    try {
        const properties = await Property.find().populate('owner', 'email name contactNumber'); // Populate owner details
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// GET route to fetch a single property by its ID
router.get('/api/property/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id).populate('owner', 'email name contactNumber');
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// POST route to create a new property
router.post('/api/property', async (req, res) => {
    try {
        const { ownerEmail, ...propertyData } = req.body;

        // Find the owner by email
        const owner = await Owner.findOne({ email: ownerEmail });
        if (!owner) {
            return res.status(404).json({ message: 'Owner not found' });
        }

        // Create and save the new property
        const property = new Property({
            ...propertyData,
            owner: owner._id
        });

        await property.save();

        // Update the owner's properties
        owner.properties.push(property._id);
        await owner.save();

        res.status(201).json(property);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// PUT route to update an existing property
router.put('/api/property/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// DELETE route to remove a property
router.delete('/api/property/:id', async (req, res) => {
    try {
        const property = await Property.findByIdAndDelete(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        // Remove the property from the owner's properties array
        await Owner.findByIdAndUpdate(property.owner, { $pull: { properties: property._id } });

        res.json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
