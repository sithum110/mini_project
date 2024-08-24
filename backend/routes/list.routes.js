const express = require('express');
const router = express.Router();
const List = require('../models/list.model');

// Middleware to get a list by ID
async function getList(req, res, next) {
  let list;
  try {
    list = await List.findById(req.params.id);
    if (list == null) {
      return res.status(404).json({ message: 'Cannot find list' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.list = list;
  next();
}

// Get all lists
router.get('/', async (req, res) => {
  try {
    const lists = await List.find();
    res.json(lists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific list by ID
router.get('/:id', getList, (req, res) => {
  res.json(res.list);
});

// Create a new list
router.post('/', async (req, res) => {
  const list = new List({
    neighborhood: req.body.neighborhood,
    location: req.body.location,
    propertyType: req.body.propertyType,
    bedrooms: req.body.bedrooms,
    bathrooms: req.body.bathrooms,
    image: req.body.image,
    status: req.body.status,
    price: req.body.price,
    currency: req.body.currency,
    availability: req.body.availability
  });

  try {
    const newList = await list.save();
    res.status(201).json(newList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a list by ID
router.put('/:id', getList, async (req, res) => {
  if (req.body.neighborhood != null) {
    res.list.neighborhood = req.body.neighborhood;
  }
  if (req.body.location != null) {
    res.list.location = req.body.location;
  }
  if (req.body.propertyType != null) {
    res.list.propertyType = req.body.propertyType;
  }
  if (req.body.bedrooms != null) {
    res.list.bedrooms = req.body.bedrooms;
  }
  if (req.body.bathrooms != null) {
    res.list.bathrooms = req.body.bathrooms;
  }
  if (req.body.image != null) {
    res.list.image = req.body.image;
  }
  if (req.body.status != null) {
    res.list.status = req.body.status;
  }
  if (req.body.price != null) {
    res.list.price = req.body.price;
  }
  if (req.body.currency != null) {
    res.list.currency = req.body.currency;
  }
  if (req.body.availability != null) {
    res.list.availability = req.body.availability;
  }

  try {
    const updatedList = await res.list.save();
    res.json(updatedList);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a list by ID
router.delete('/:id', getList, async (req, res) => {
  try {
    await res.list.remove();
    res.json({ message: 'Deleted List' });
  } catch (err) {
    res.status(500).json({ message: err
