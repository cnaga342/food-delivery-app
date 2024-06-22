import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Restaurant.css'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://localhost:5000/restaurants');
        setRestaurants(response.data); // Assuming response.data is an array of restaurant objects
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center', margin: '20px 0' }}>Restaurants</h2>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.description}</p>
                <p className="card-text"><strong>Address:</strong> {restaurant.address}</p>
                <p className="card-text"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                <h6>Menu:</h6>
                <ul className="menu-list">
                  {restaurant.menu.map((item, index) => (
                    <li key={index}>
                      <strong>{item.name}</strong> - ${item.price.toFixed(2)}
                      <p>{item.description}</p>
                    </li>
                  ))}
                </ul>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
