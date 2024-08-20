const express = require('express');
const router = express.Router();
const List = require('../models/list.model');

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
    name: req.body.name,
    items: req.body.items
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
  if (req.body.name != null) {
    res.list.name = req.body.name;
  }
  if (req.body.items != null) {
    res.list.items = req.body.items;
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
    res.status(500).json({ message: err.message });
  }
});

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

module.exports = router;
