const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  cuisine: { type: String, required: true },
  menu: [{ 
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true }
  }]
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
