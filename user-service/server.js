const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/user-service', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(bodyParser.json());

// User model
const User = mongoose.model('User', new mongoose.Schema({ name: String }));

// API endpoint to get users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// API endpoint to create users
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send(user);
});

// Start the server
app.listen(3000, () => {
  console.log('User service running on port 3000');
});
