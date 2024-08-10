const express = require('express');
const router = express.Router();
const Property = require('./list.model');

// GET all properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET a single property by ID
router.get('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.json(property);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new property
router.post('/', async (req, res) => {
    const property = new Property({
        title: req.body.title,
        description: req.body.description,
        type: req.body.type,
        location: req.body.location,
        price: req.body.price,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        imageUrl: req.body.imageUrl
    });

    try {
        const newProperty = await property.save();
        res.status(201).json(newProperty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT (update) a property by ID
router.put('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        if (req.body.title) property.title = req.body.title;
        if (req.body.description) property.description = req.body.description;
        if (req.body.type) property.type = req.body.type;
        if (req.body.location) property.location = req.body.location;
        if (req.body.price) property.price = req.body.price;
        if (req.body.bedrooms) property.bedrooms = req.body.bedrooms;
        if (req.body.bathrooms) property.bathrooms = req.body.bathrooms;
        if (req.body.imageUrl) property.imageUrl = req.body.imageUrl;

        const updatedProperty = await property.save();
        res.json(updatedProperty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE a property by ID
router.delete('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        await property.remove();
        res.json({ message: 'Property deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
