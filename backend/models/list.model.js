const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  neighborhood: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    enum: ['Family House', 'Apartment', 'Condo'],
    required: true
  },
  bedrooms: {
    type: Number,
    required: true
  },
  bathrooms: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['For Rent', 'For Sale'],
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  availability: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('List', listSchema);
