const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  contactNumber: { type: String }, // Optional: Owner's contact number
  properties: [
    {
      propertyName: { type: String, required: true },
      address: { type: String, required: true },
      propertyType: { type: String }, // e.g., Apartment, House, Condo
      rent: { type: Number, required: true },
      numberOfRooms: { type: Number },
      amenities: { type: [String] }, // e.g., ['Pool', 'Gym', 'Wi-Fi']
      availabilityStatus: { type: String, enum: ['Available', 'Not Available'], default: 'Available' },
      description: { type: String }, // Description of the property
    }
  ],
  preferences: {
    petsAllowed: { type: Boolean, default: false },
    smokingAllowed: { type: Boolean, default: false },
    preferredTenantGender: { type: String }, // Optional: Preferred tenant gender
    maximumOccupants: { type: Number } // Optional: Maximum number of occupants allowed
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

ownerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
