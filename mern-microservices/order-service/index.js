const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/orders", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Order Model
const Order = mongoose.model("Order", new mongoose.Schema({
  userId: String,
  productId: String,
  quantity: Number,
}));

// Create Order
app.post("/orders", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  // Validate User
  const userResponse = await axios.get(`http://localhost:5001/user/${userId}`);
  if (!userResponse.data) return res.status(400).json({ error: "User not found" });

  // Validate Product
  const productResponse = await axios.get(`http://localhost:5002/products/${productId}`);
  if (!productResponse.data) return res.status(400).json({ error: "Product not found" });

  // Save Order
  const order = new Order({ userId, productId, quantity });
  await order.save();
  res.json(order);
});

app.listen(5003, () => console.log("Order Service running on port 5003"));
