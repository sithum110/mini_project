const express = require('express');
const router = express.Router();
const Property = require('../models/property.model');

// POST: Submit a new property
router.post('/submit', async (req, res) => {
  const { title, description, status, type, rooms, price, area, address, city, state, country, lat, lng, features } = req.body;

  // Create a new property instance
  const property = new Property({
    title,
    description,
    status,
    type,
    rooms,
    price,
    area,
    address,
    city,
    state,
    country,
    coordinates: { lat, lng },
    features
  });

  try {
    await property.save();
    res.status(201).json({ message: 'Property submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Error submitting property', details: error });
  }
});

// GET: Fetch all properties
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching properties', details: error });
  }
});

// GET: Fetch a single property by ID
router.get('/:id', async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.status(200).json(property);
  } catch (error) {
    res.status(400).json({ error: 'Error fetching property', details: error });
  }
});

module.exports = router;
