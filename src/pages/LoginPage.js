import React, { useState } from "react";
import "../styles/LoginPage.css";
import { Link } from "react-router-dom"; //import Link

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">⌘</div>
          <h1 className="logo-text">ElectroMart700</h1>
        </div>

        {/* Title */}
        <h2 className="title">SIGN IN</h2>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Forgot Password link */}
          <div className="forgot-link">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit">Sign in</button>
        </form>

        {/* Signup link */}
        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
