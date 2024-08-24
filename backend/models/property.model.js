const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Owner', required: true }, // Reference to the owner
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['Rent', 'Sale'], required: true },
  type: { type: String, enum: ['House', 'Apartment'], required: true },
  rooms: { type: Number, required: true },
  price: { type: Number, required: true },
  area: { type: Number, required: true }, // Area in Sqft
  media: {
    images: [{ type: String }], // URLs or paths to uploaded images
    videos: [{ type: String }]  // URLs or paths to uploaded videos
  },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    latitude: { type: String }, // Optional: Google Maps Latitude
    longitude: { type: String } // Optional: Google Maps Longitude
  },
  buildingAge: { type: String, enum: ['0-5 Years', '5-15 Years', '15-30 Years', '30-50 Years', '50-70 Years'] }, // Optional: Building age
  bedrooms: { type: Number }, // Optional: Number of bedrooms
  bathrooms: { type: Number }, // Optional: Number of bathrooms
  features: [{ type: String }], // List of features e.g., ['Air Conditioning', 'Swimming Pool']
  contactInformation: {
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

propertySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
