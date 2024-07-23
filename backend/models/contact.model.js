const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  number: String,  // Note: Changed 'Number' to 'number' to match the form data
  subject: String
});

const Contact = mongoose.model('Contact', ContactSchema);
module.exports = Contact;
