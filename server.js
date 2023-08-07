// Import the required modules
const express = require('express');
const app = express();
const port = 3000; // You can choose any available port number

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
