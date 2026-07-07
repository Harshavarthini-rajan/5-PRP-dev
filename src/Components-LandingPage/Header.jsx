import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>EduHire</h1>
      </div>
      <div className="header-btns">
        <Link to=""><button className="btn-login">Log In</button></Link>
        <Link to="/PRP/UserRegistration"><button className="btn-get-started">Get Started</button></Link>
      </div>
    </header>
  );
};

export default Header