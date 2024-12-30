import React from 'react';
import './App.css';

import Home from "./Components/FunctionalComponents/Home.jsx";
import About from './Components/FunctionalComponents/About.jsx';
import Contact from './Components/FunctionalComponents/Contact.jsx';
import Gallery from './Components/FunctionalComponents/Gallery.jsx';
import NavBar from './Components/FunctionalComponents/NavBar.jsx';
import Form from './Components/FunctionalComponents/Form.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar /> 
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Unique paths */}
                    <Route path="/about" element={<About college="Kongu engineering" clg1="Kongu arts" clg2="Naturopathy" district="Perundurai"/>} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/form" element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
