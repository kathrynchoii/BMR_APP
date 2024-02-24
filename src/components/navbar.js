import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">BMR Calculator</a></li>
                <li><a href="/about">About</a></li>
                {/* Add more navigation items as needed */}
            </ul>
        </nav>
    );
};

export default Navbar;
