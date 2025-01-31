const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const server = express();
server.use(express.json());

const mongo_url =
  process.env.mongo_url ||
  "mongodb+srv://mohanprasath:0110@cluster0.4gcqj.mongodb.net/product?retryWrites=true&w=majority&appName=Cluster0";

// MongoDB Connection
mongoose
  .connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Atlas connected"))
  .catch((error) => console.error("Connection error: " + error));

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Product = mongoose.model("Product", productSchema);

// Default route
server.get("/", (req, res) => {
  res.send("Server is running");
});

// GET all products from MongoDB
server.get("/product", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
});

// POST to add a new product
server.post("/product", async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Error saving product", error });
  }
});

// PUT (Update) a product by ID
server.put("/product/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name, price: req.body.price },
      { new: true }
    );
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error updating product", error });
  }
});

// DELETE a product by ID
server.delete("/product/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      res.json({ message: "Product deleted successfully", deletedProduct });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "Error deleting product", error });
  }
});

// Start the server
const port = 5007;
server.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);