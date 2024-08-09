const express = require('express');
const router = express.Router();
const Contact = require('../models/contact.model');

router.post('/contact', async (req, res) => {
  const newContact = new Contact(req.body);
  try {
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

