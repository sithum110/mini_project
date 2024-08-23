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

router.get('/forum/:id', async (req, res) => {
  try {
      const forumId = req.params.id;
      const forum = await Questionnaire.findById(forumId); // Use `Questionnaire` instead of `Forum`
      if (!forum) {
          return res.status(404).json({ message: 'Forum not found' });
      }
      res.json(forum);
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
});


module.exports = router;