import React from 'react';
import './Nav.css';
function Navbar() {
    return (
        <nav className="navbar">
            
            <div className="nav-links">
                <a href="/" className="nav-link">// home</a>
                <a href="/" className="nav-link">// expertise</a>
                <a href="/" className="nav-link">// work</a>
                <a href="/" className="nav-link">// projects</a>
                <a href="/" className="nav-link">// contact</a>
            </div>
            
           
        </nav>
    );
}

export default Navbar;