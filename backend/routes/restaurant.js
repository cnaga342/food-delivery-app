const express = require('express');
const Restaurant = require('../models/Restaurant');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const restaurantRoutes = express.Router();

// Create a new restaurant (requires admin access)
restaurantRoutes.post('/', async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  
  // Verify token
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if user is admin
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: "Admin access required" });
    }

    const { name, description, address, cuisine, menu } = req.body;
    const newRestaurant = new Restaurant({ name, description, address, cuisine, menu });
    await newRestaurant.save();
    res.status(201).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Get all restaurants (public access)
restaurantRoutes.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = restaurantRoutes;
