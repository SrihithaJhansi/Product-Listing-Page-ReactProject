import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaCcVisa, FaCcMastercard, FaPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Subscribe Section */}
        <div className="subscribe-section">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        {/* Contact Section */}
        <div className="contact-section">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>
            <span className="currency">🇺🇸 USD</span>
            <br />
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        {/* Links Section */}
        <div className="footer-links">
          <div>
            <h4>mettā muse</h4>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>
          <div>
            <h4>QUICK LINKS</h4>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
        {/* Social & Payment Section */}
        <div className="social-payments">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaLinkedin />
          </div>
          <h4>mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <FaCcVisa />
            <FaCcMastercard />
            <FaPaypal />
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
