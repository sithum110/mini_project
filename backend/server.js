const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors()); 

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/signup_DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// Routes
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 8);

  const user = new User({ username, email, password: hashedPassword });
  try {
    await user.save();
    res.status(201).json({ message: 'User signed up' }); // Return JSON response
  } catch (error) {
    res.status(400).json({ error: 'Error signing up' }); // Return JSON error response
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Received email:', email);
  console.log('Received password:', password);

  const user = await User.findOne({ email });

  if (!user) {
    console.log('User not found');
    return res.status(401).json({ error: 'User not found' });
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  console.log('Password is valid:', passwordIsValid);

  if (!passwordIsValid) {
    console.log('Invalid password');
    return res.status(401).json({ auth: false, token: null });
  }

  const token = jwt.sign({ id: user._id }, 'your_secret_key', { expiresIn: '1h' });

  res.status(200).json({ auth: true, token });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
