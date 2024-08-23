// const mongoose = require('mongoose');

// const renterSchema = new mongoose.Schema({
//     email: { type: String, required: true, unique: true },
//     name: { type: String, required: true },
//     gender: { type: String },
//     birthDay: { type: Date },
//     // Preferences
//     budget: { type: Number },
//     location: { type: String },
//     apartment: { type: Boolean, default: false },
//     house: { type: Boolean, default: false },
//     amenities: { type: String },
//     lifestyle: { type: String },
//     roommatePreferences: { type: String },
//     quietEnvironment: { type: String },
//     socialGatherings: { type: String },
//     dietaryRestrictions: { type: String },
//     petsInHouse: { type: String },
// });

// const Renter = mongoose.model('Renter', renterSchema);

// module.exports = Renter;



const mongoose = require('mongoose');

const renterSchema = new mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  birthDay: Date,
  budget: Number,
  location: String,
  coLivingType: [String],
  amenities: String,
  lifestyle: String,
  roommatePreferences: String,
  quietEnvironment: String,
  socialGatherings: String,
  dietaryRestrictions: String,
  petsInHouse: String
});

const Renter = mongoose.model('Renter', renterSchema);
module.exports = Renter;



