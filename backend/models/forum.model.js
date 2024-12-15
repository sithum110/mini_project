const mongoose = require('mongoose');

const QuestionnaireSchema = new mongoose.Schema({

  userid: String,
  name: String,
  email: String,
  gender: String,
  tyyp: String,
  birthDay: Date,
  budget: Number,
  location: String,
  coLivingType: String,
  amenities: String,
  lifestyle: String,
  roommatePreferences: String,
  quietEnvironment: String,
  socialGatherings: String,
  dietaryRestrictions: String,
  petsInHouse: String
});

const Questionnaire = mongoose.model('Questionnaire', QuestionnaireSchema);
module.exports = Questionnaire;
