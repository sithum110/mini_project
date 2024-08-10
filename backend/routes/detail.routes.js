const express = require('express');
const router = express.Router();
const Detail = require('../models/detail.model');

// Create a new property detail
router.post('/create', async (req, res) => {
    const { title, description, price, location, bedrooms, bathrooms, garage, area, type, buildYear, amenities, images, agent } = req.body;

    const detail = new Detail({ title, description, price, location, bedrooms, bathrooms, garage, area, type, buildYear, amenities, images, agent });
    try {
        await detail.save();
        res.status(201).json({ message: 'Property detail created successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error creating property detail' });
    }
});

// Get all property details
router.get('/', async (req, res) => {
    try {
        const details = await Detail.find();
        res.status(200).json(details);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching property details' });
    }
});

// Get a specific property detail by ID
router.get('/:id', async (req, res) => {
    try {
        const detail = await Detail.findById(req.params.id);
        if (!detail) {
            return res.status(404).json({ error: 'Property detail not found' });
        }
        res.status(200).json(detail);
    } catch (error) {
        res.status(400).json({ error: 'Error fetching property detail' });
    }
});

// Update a property detail by ID
router.put('/:id', async (req, res) => {
    try {
        const detail = await Detail.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!detail) {
            return res.status(404).json({ error: 'Property detail not found' });
        }
        res.status(200).json({ message: 'Property detail updated successfully', detail });
    } catch (error) {
        res.status(400).json({ error: 'Error updating property detail' });
    }
});

// Delete a property detail by ID
router.delete('/:id', async (req, res) => {
    try {
        const detail = await Detail.findByIdAndDelete(req.params.id);
        if (!detail) {
            return res.status(404).json({ error: 'Property detail not found' });
        }
        res.status(200).json({ message: 'Property detail deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting property detail' });
    }
});

module.exports = router;
