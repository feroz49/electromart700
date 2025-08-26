import React, { useState } from "react";
import "../styles/ForgotPasswordPage.css";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleReset = e => {
    e.preventDefault();
    console.log('Reset link sent to:', email);
    alert('If this email is registered, a reset link has been sent.');
    //Connect to backend to send reset email
  };
  //this is comment..........................
  return (
    <div className="forgot-container">
      <div className="forgot-box">
        {/* Logo*/}
        <div className="logo">
          <img src={logo} alt="App Logo" className="logo-img" />
          <h1 className="logo-text">ElectroMart700</h1>
        </div>

        {/* Title */}
        <h2 className="title">Forgot Password</h2>
        <p className="subtitle">
          Enter your email address and we’ll send you an OTP.
        </p>

        {/* Form */}
        <form onSubmit={handleReset}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <button type="submit">Send OTP</button>
        </form>

        {/* Back to login */}
        <p className="back-text">
          Remember your password? <a href="/">Sign in</a>
        </p>
      </div>
    </div>
  );
}
