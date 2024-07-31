const express = require('express');
const router = express.Router();
const Questionnaire = require('../models/forum.model');

router.post('/forum', async (req, res) => {
  const newQuestionnaire = new Questionnaire(req.body);
  try {
    const savedQuestionnaire = await newQuestionnaire.save();
    res.status(201).json(savedQuestionnaire);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;