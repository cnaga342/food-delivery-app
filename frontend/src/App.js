// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Home from './pages/Home';
import RestaurantDetail from './pages/RestaurantDetail';
import Order from './pages/Order';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/Signup';

function App() {
  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
