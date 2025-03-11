const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/products", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Product Model
const Product = mongoose.model("Product", new mongoose.Schema({
  name: String,
  price: Number,
}));

// Add Product
app.post("/products", async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
});

// Get Products
app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(5002, () => console.log("Product Service running on port 5002"));
