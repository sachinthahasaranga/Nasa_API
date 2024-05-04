const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const connectDB = require('./config/dbConn.js');

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use(cors()); 
app.use(express.json());

app.use('/user', require('./routes/Users.routes.js'));
app.use('/auth', require('./routes/Auth.routes.js'));


// Middleware to handle preflight requests
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    // Respond to OPTIONS requests with 200 OK
    res.sendStatus(200);
  } else {
    // Continue to the next middleware
    next();
  }
});

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

console.log('Connected to MongoDB');
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
