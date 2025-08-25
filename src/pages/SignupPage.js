import React, { useState } from "react";
import "./SignupPage.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    // TODO: Send signup data to backend
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        {/* Logo */}
        <div className="logo">
          <div className="logo-icon">⌘</div>
          <h1 className="logo-text">ElectroMart700</h1>
        </div>

        {/* Title */}
        <h2 className="title">SIGN UP</h2>

        {/* Form */}
        <form onSubmit={handleSignup}>
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

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit">Sign up</button>
        </form>

        {/* Login link */}
        <p className="login-text">
          Already have an account? <a href="/">Sign in</a>
        </p>
      </div>
    </div>
  );
}
