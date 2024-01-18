const express = require('express');
const app = express();
const port = process.env.PORT || 8888;

app.get('/', (req, res) => {
  console.log('Welcome to the Health Check App!');
  res.send('Welcome to the Health Check App!');
});

// First health check endpoint
app.get('/health', (req, res) => {
  console.log('/health return reponse code 200');
  res.status(200).send('OK');
});

// Second health check endpoint
app.get('/deep-health', (req, res) => {
  // Add additional checks if needed
  console.log('/deep-health return reponse code 200');
  res.status(200).send('Deep Health Check OK');
});

// Second health check endpoint
app.get('/test', (req, res) => {
  // Add additional checks if needed
  console.log('/test return reponse code 403');
  res.status(403).send('403 Check OK');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
