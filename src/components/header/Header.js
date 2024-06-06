import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><a href="/about-us">About Us</a></li>
      <li><Link to="/contact-us">Contact Us</Link></li>
    </ul>
  </nav>
);

export default Header;
