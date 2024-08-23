const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req, res) => {
  const { username, email, password,role } = req.body;

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 8);

  const user = new User({ username, email, password: hashedPassword,role});
  try {
    await user.save();
    res.status(201).json({ message: 'User signed up' }); // Return JSON response
  } catch (error) {
    res.status(400).json({ error: 'Error signing up' }); // Return JSON error response
  }
});

router.post('/login', async (req, res) => {
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
  res.status(200).json({ auth: true, token, role: user.role  });
});



// router.put('/api/renter/:email', (req, res) => {
//   const email = req.params.email;
//   const updatedData = req.body;

//   // Find and update the renter by the decoded email
//   Renter.findOneAndUpdate({ email: decodeURIComponent(email) }, updatedData, { new: true })
//     .then(updatedRenter => {
//       if (!updatedRenter) {
//         return res.status(404).send('Renter not found');
//       }
//       res.json(updatedRenter);
//     })
//     .catch(err => {
//       res.status(500).send(err.message);
//     });
// });





module.exports = router;
