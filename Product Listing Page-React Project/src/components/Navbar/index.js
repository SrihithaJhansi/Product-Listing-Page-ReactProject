import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <header className="navbar-wrapper">
      <div className="nav-top">
        <div className="nav-logo">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="App Logo"
          >
            {/* SVG path retained */}
            <path d="M1.54286 28.8C0.257146..." fill="black" />
          </svg>
        </div>

        <div className="nav-title">
          <h1>LOGO</h1>
        </div>

        <div className="nav-icon-group">
          <CiSearch className="nav-icon" aria-label="Search" />
          <AiOutlineHeart className="nav-icon" aria-label="Wishlist" />
          <AiOutlineShoppingCart className="nav-icon" aria-label="Cart" />
          <AiOutlineUser className="nav-icon" aria-label="Profile" />

          {isLoggedIn ? (
            <button className="nav-auth-btn" onClick={onLogout}>Logout</button>
          ) : (
            <button className="nav-auth-btn" onClick={() => navigate('/')}>Login</button>
          )}

          <div className="nav-lang-dropdown">
            <span>ENG</span>
            <ul className="lang-options">
              <li>ENG</li>
              <li>ESP</li>
              <li>FRA</li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="nav-bottom">
        <ul className="nav-links">
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#stories">STORIES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
