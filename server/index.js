const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import your routes
const authRoutes = require('./auth'); // Ensure this file exists and exports the routes
const eventRoutes = require('./events'); // Ensure this file exists and exports the routes

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client/build')));

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
