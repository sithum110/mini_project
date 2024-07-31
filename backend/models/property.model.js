const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  type: { type: String, required: true },
  rooms: { type: Number, required: true },
  price: { type: Number, required: true },
  area: { type: Number, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  features: [String]
});

module.exports = mongoose.model('Property', PropertySchema);
