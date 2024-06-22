// pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RestaurantList from '../components/RestaurantList';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="container mt-4">
      <RestaurantList restaurants={restaurants} />
    </div>
  );
};

export default Home;
