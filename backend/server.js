const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const routes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurant');
const orderRoutes = require('./routes/order');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  app.get('/', (req, res) => {
    res.send('Welcome to the Weather Forecast API');
});
  
  app.use('/user', routes);
 
app.use('/restaurants', restaurantRoutes);
app.use('/orders', orderRoutes);
  
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
