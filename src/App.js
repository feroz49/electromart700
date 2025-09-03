import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import Product from './pages/Product';
import Category from './pages/Category';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import UserProfilePage from './pages/UserProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page should come first */}
        <Route path="/" element={<HomePage />} />

        {/* Authentication Pages */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* Other Pages */}
        <Route path="/products" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
