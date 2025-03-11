const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/task-service', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(cors());
app.use(bodyParser.json());


