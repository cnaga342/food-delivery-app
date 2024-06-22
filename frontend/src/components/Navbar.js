// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS file for navbar styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
      
        <ul className="navbar-nav">
        <Link className="navbar-brand" to="/">Food Delivery App</Link>
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link" to="/">RestaurantDetail</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/order">Order</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signup">SignUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
