import React from 'react';
import '../../assets/css/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/" target='blank'>Home</Link></li> {/* Unique paths for links */}
                    <li><Link to="/about" target='blank'>About</Link></li>
                    <li><Link to="/gallery" target='blank'>Gallery</Link></li>
                    <li><Link to="/contact" target='blank'>Contact</Link></li>
                    <li><Link to="/form" target='blank'>Form</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
