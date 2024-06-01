import React from 'react';
import { Link } from 'react-router-dom'; // For routing links
import './Nav.css';
function Navbar() {
    return (
        <nav className="navbar">
            <img src="https://tamalsen.dev/wp-content/uploads/2021/06/tamalsen_logo-dark.png" alt="logo" className="logo" />
            <div className="nav-links">
                <a href="/" className="nav-link">// home</a>
                <a href="/" className="nav-link">// expertise</a>
                <a href="/" className="nav-link">// work</a>
                <a href="/" className="nav-link">// experience</a>
                <a href="/" className="nav-link">// contact</a>
            </div>
            
           
        </nav>
    );
}

export default Navbar;