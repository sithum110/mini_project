const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express application
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/realestate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Property schema and model
const propertySchema = new mongoose.Schema({
  title: String,
  type: String,
  location: String,
  country: String,
  price: Number,
  bedrooms: Number,
  bathrooms: Number,
  imageUrl: String,
  status: String,
});

const Property = mongoose.model('Property', propertySchema);

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Real Estate API');
});

// Get all properties
app.get('/properties', async (req, res) => {
  const properties = await Property.find();
  res.json(properties);
});

// Get property by ID
app.get('/properties/:id', async (req, res) => {
  const property = await Property.findById(req.params.id);
  res.json(property);
});

// Create a new property
app.post('/properties', async (req, res) => {
  const newProperty = new Property(req.body);
  await newProperty.save();
  res.json(newProperty);
});

// Update a property
app.put('/properties/:id', async (req, res) => {
  const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedProperty);
});

// Delete a property
app.delete('/properties/:id', async (req, res) => {
  await Property.findByIdAndDelete(req.params.id);
  res.json({ message: 'Property deleted' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
