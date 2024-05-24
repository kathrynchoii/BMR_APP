import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/homepage" className="navbar-brand">
            <img src="/favicon.ico" alt="Logo" className="navbar-logo" />
                Wellness Watcher
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item"><Link to="/homepage" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="/BMR" className="nav-link">BMR</Link></li>
                <li className="nav-item"><Link to="/BMI" className="nav-link">BMI</Link></li>
                <li className="nav-item"><Link to="/About" className="nav-link">About</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
