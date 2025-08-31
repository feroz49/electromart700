import React, { useState } from 'react';
import '../styles/HomePage.css';

const HomePage = () => {
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState('');

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
    alert('Redirecting to products page...');
  };

  return (
    <div className="electromart-container">
      {/* Header Section */}
      <header className="electromart-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img
                src="src\img\LOGO.png"
                alt="ElectroMart700 Logo"
                className="logo-img"
              />
              <div className="logo-text">ElectroMart700</div>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Deals</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact</a>
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
              <button className="cart-btn">
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

      {/* Categories Section */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Shop by Category</h2>
          <div className="category-grid">
            <div className="category-card">
              <div className="category-img">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <div className="category-content">
                <h3>Smartphones</h3>
                <p>Latest models from top brands</p>
              </div>
            </div>
            <div className="category-card">
              <div className="category-img">
                <i className="fas fa-laptop"></i>
              </div>
              <div className="category-content">
                <h3>Laptops</h3>
                <p>Powerful machines for work and play</p>
              </div>
            </div>
            <div className="category-card">
              <div className="category-img">
                <i className="fas fa-tv"></i>
              </div>
              <div className="category-content">
                <h3>TV & Audio</h3>
                <p>Immersive entertainment experiences</p>
              </div>
            </div>
            <div className="category-card">
              <div className="category-img">
                <i className="fas fa-camera"></i>
              </div>
              <div className="category-content">
                <h3>Cameras</h3>
                <p>Capture your precious moments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose ElectroMart700?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <i className="fas fa-shipping-fast"></i>
              <h3>Free Shipping</h3>
              <p>On all orders over $99</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-shield-alt"></i>
              <h3>2-Year Warranty</h3>
              <p>On all electronic products</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-headset"></i>
              <h3>24/7 Support</h3>
              <p>Dedicated customer service</p>
            </div>
            <div className="feature-card">
              <i className="fas fa-undo"></i>
              <h3>Easy Returns</h3>
              <p>30-day money-back guarantee</p>
            </div>
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
          <div className="footer-content">
            <div className="footer-column">
              <h3>ElectroMart700</h3>
              <p>
                Your trusted destination for premium electronics and gadgets
                since 2010.
              </p>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Shop</h3>
              <ul>
                <li>
                  <a href="#">Smartphones</a>
                </li>
                <li>
                  <a href="#">Laptops & Computers</a>
                </li>
                <li>
                  <a href="#">TV & Audio</a>
                </li>
                <li>
                  <a href="#">Cameras</a>
                </li>
                <li>
                  <a href="#">Wearables</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Customer Service</h3>
              <ul>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Shipping & Returns</a>
                </li>
                <li>
                  <a href="#">Warranty</a>
                </li>
                <li>
                  <a href="#">Track Order</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <i className="fas fa-map-marker-alt"></i> 123 Tech Street,
                  Dhaka
                </li>
                <li>
                  <i className="fas fa-phone"></i> +880 1XXX-XXXXXX
                </li>
                <li>
                  <i className="fas fa-envelope"></i> info@electromart700.com
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 ElectroMart700. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
