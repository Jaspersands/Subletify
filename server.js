const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

const uri = 'mongodb://localhost:27017/SubletifyDB';
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Call the connectDB function to establish the connection
connectDB();

// Start the server after the database connection is established
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});