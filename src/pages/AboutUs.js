import React from 'react';
// AboutUs.js
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className="about-page">
      <h1>About ElectroMart700</h1>
      <p>
        At ElectroMart700, we bring you the latest and most reliable electronics
        at unbeatable prices. Our mission is to make technology accessible,
        affordable, and exciting for everyone.
      </p>
      <div className="about-highlights">
        <div className="about-card">✅ Premium Quality</div>
        <div className="about-card">🚀 Fast Delivery</div>
        <div className="about-card">💳 Secure Payments</div>
        <div className="about-card">🤝 Trusted Service</div>
      </div>
    </div>
  );
}

export default AboutUs;
