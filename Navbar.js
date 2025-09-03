import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HomePage.css';
import './styles/HeaderActions.css';
import Logo from './img/LOGO.png';

const Navbar = ({ cartCount = 0, onAddToCart }) => (
  <header className="electromart-header">
    <div className="container">
      <div className="header-content">
        <div className="logo">
          <img src={Logo} alt="ElectroMart700 Logo" className="logo-img" />
          <div className="logo-text">ElectroMart700</div>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="header-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search products..." />
            <button>
              <i className="fa-solid fa-search"></i>
            </button>
          </div>
          <div className="auth-cart">
            <div className="auth-buttons">
              <Link to="/login" className="auth-btn">Sign In</Link>
              <Link to="/signup" className="auth-btn signup">Sign Up</Link>
            </div>
            <button className="cart-btn" onClick={onAddToCart}>
              <i className="fas fa-shopping-cart" style={{ marginRight: '5px' }}></i>
              Cart ({cartCount})
            </button>
          </div>
          <button className="user-btn">
            <i className="fas fa-user"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
