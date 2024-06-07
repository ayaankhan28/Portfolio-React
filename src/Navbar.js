import React from 'react';
import './Nav.css';
function Navbar() {
    return (
        <nav className="navbar">
            
            <div className="nav-links">
                <a href="#home" className="nav-link">// home</a>
                <a href="#expert" className="nav-link">// expertise</a>
                <a href="#work" className="nav-link">// work</a>
                
                <a href="#last" className="nav-link">// contact</a>
            </div>
            
           
        </nav>
    );
}

export default Navbar;