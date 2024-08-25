const express = require('express');
const router = express.Router();
const Questionnaire = require('../models/forum.model');
const authenticateJWT = require('../midlware');

router.post('/forum',authenticateJWT, async (req, res) => {
  const newQuestionnaire = new Questionnaire(req.body);
  try {
    const savedQuestionnaire = await newQuestionnaire.save();
    res.status(201).json(savedQuestionnaire);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/forum/:id',authenticateJWT,  async (req, res) => {
  console.log(req.userId);

  try {
      const forumId = req.params.id;
      const forum = await Questionnaire.findOne({ userid: forumId }); // Use `Questionnaire` instead of `Forum`
      if (!forum) {
          return res.status(404).json({ message: 'Forum not found' });
      }
      res.json(forum);
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
});


module.exports = router;