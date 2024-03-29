const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Starting APP
const app = express();

// Staring DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser: true });
requireDir('./src/models');

// Routes
app.use('/api', require('./src/routes'));

app.listen(3000);