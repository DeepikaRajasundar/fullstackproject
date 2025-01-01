import React from 'react';
import '../../assets/css/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="use-ref">UseRef</Link></li>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/UseEffect">UseEffect</Link></li>
                    <li><Link to="/UseContext">UseContext</Link></li>
                    <li><Link to="/UseMemo">UseMemo</Link></li>
                   
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;
