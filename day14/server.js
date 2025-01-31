const express = require('express');
const server = express();
require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
const mongo_url = process.env.mongo_url;
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Connection error:", error));

// Schema definition
const productSchema = new mongoose.Schema({
  name: {

    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

const Item = mongoose.model('Item',itemSchema);

// Assign a port number
const port = 5004;

// Middleware to parse JSON bodies
server.use(express.json());

// Routes
server.get('/', (req, res) => {
  res.end("Server is running");
});

// Fetch all products from the database
server.get('/product', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add a new product to the database
server.post('/product', async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price
    });
    const savedProduct = await newProduct.save(); // Save to the database
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update an existing product in the database
server.put('/product/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, // Product ID
      { name: req.body.name, price: req.body.price }, // Updated fields
      { new: true, runValidators: true } // Return the updated product
    );
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json("Product not found");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


