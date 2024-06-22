// components/OrderForm.js
import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [restaurantId, setRestaurantId] = useState('');
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:5000/orders',
        { restaurantId, items, total, deliveryAddress },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log('Order placed successfully:', response.data);
      // Optionally, redirect to order tracking or confirmation page
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="container">
      <h2>Place Order</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for restaurant selection, items, total, and delivery address */}
        <button type="submit" className="btn btn-primary">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
