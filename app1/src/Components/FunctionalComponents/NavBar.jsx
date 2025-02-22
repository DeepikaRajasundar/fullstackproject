import React from 'react';
import '../css/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/Use-ref">UseRef</Link></li>
                    <li><Link to="/UseEffect">UseEffect</Link></li>
                    <li><Link to="/usecontext">UseContext</Link></li>
                    <li><Link to="/usememo">UseMemo</Link></li>
                    
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
