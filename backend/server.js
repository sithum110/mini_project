
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user.routes');
const forumRoutes = require('./routes/forum.routes');
const contactRoutes = require('./routes/contact.routes');
const accommodationModel = require('./models/accommodation.model');
const recommendationRoutes = require('./routes/recommendation.routes');
const accommodationRoutes = require('./routes/accommodation.routes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/colive', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', userRoutes);
app.use('/api', forumRoutes);
app.use('/api', contactRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/accommodations', accommodationRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
