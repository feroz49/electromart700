import React from 'react';
import '../styles/HomePage.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to Our Shop</h1>
        <p className="home-subtitle">Find your favorite books and more!</p>
      </header>

      <section className="home-products">
        <div className="product-card">
          <img
            src="https://via.placeholder.com/200x250"
            alt="Book 1"
            className="product-image"
          />
          <h3 className="product-name">Data Communication</h3>
          <p className="product-price">৳ 500</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="product-card">
          <img
            src="https://via.placeholder.com/200x250"
            alt="Book 2"
            className="product-image"
          />
          <h3 className="product-name">Algorithm Design</h3>
          <p className="product-price">৳ 650</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        <div className="product-card">
          <img
            src="https://via.placeholder.com/200x250"
            alt="Book 3"
            className="product-image"
          />
          <h3 className="product-name">Operating System</h3>
          <p className="product-price">৳ 700</p>
          <button className="buy-btn">Buy Now</button>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2025 Rokomari Clone | All Rights Reserved.</p>
      </footer>
    </div>
  );
}
