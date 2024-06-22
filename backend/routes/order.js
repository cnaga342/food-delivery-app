const express = require('express');
const Order = require('../models/Order');
const { verifyToken } = require('../middleware/auth');

const orderRoutes = express.Router();

orderRoutes.post('/', verifyToken, async (req, res) => {
  const { restaurantId, items, total, deliveryAddress } = req.body;
  const customerId = req.userId;

  try {
    const newOrder = new Order({ customerId, restaurantId, items, total, deliveryAddress });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

orderRoutes.get('/user', verifyToken, async (req, res) => {
  const customerId = req.userId;
  try {
    const orders = await Order.find({ customerId });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = orderRoutes;
