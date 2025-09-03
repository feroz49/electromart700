import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import Logo from '../img/LOGO.png'; // Logo

const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
    alert('Product added to cart!');
  };

  const handleSubscribe = e => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  const handleShopNow = () => {
    navigate('/products'); // redirect to Product page
  };

  return (
    <div className="electromart-container">
      {/* Header Section */}
      <header className="electromart-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img src={Logo} alt="ElectroMart700 Logo" className="logo-img" />
              <div className="logo-text">ElectroMart700</div>
            </div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/categories">Categories</Link>
                </li>
                <li>
                  <Link to="/deals">Deals</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="header-actions">
              <div className="search-bar">
                <input type="text" placeholder="Search products..." />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </div>
              <button className="cart-btn" onClick={handleAddToCart}>
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-count">{cartCount}</span>
              </button>
              <button className="user-btn">
                <i className="fas fa-user"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to ElectroMart700</h1>
            <p>
              Discover the latest electronics with premium quality and
              unbeatable prices
            </p>
            <button className="cta-button" onClick={handleShopNow}>
              Shop Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <h2>Subscribe to Our Newsletter</h2>
          <p>
            Stay updated with the latest products, exclusive deals, and special
            promotions
          </p>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2025 ElectroMart700. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
