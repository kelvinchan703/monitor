const express = require('express');
const app = express();
const port = process.env.PORT || 8888;

app.get('/', (req, res) => {
  res.send('Welcome to the Health Check App!');
});

// First health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Second health check endpoint
app.get('/deep-health', (req, res) => {
  // Add additional checks if needed
  res.status(200).send('Deep Health Check OK');
});

// Second health check endpoint
app.get('/test', (req, res) => {
  // Add additional checks if needed
  res.status(403).send('403 Check OK');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
