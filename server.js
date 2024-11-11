// server.js

// Import the necessary modules
const express = require('express');  // Express is the framework we'll use for the server
const cors = require('cors');       // Allows cross-origin requests, especially for React in development

// Initialize the app
const app = express();
const port = 5000; // Server will run on port 5000

// Middleware
app.use(cors());   // Enable CORS
app.use(express.json());  // To parse incoming JSON data

// Basic route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, welcome to the server!');
});

// Example route for user authentication (you can change this)
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Here you can check the credentials with your Appwrite API or local database
  if (email === 'test@example.com' && password === 'password123') {
    res.status(200).send('Login successful!');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
