import React from 'react';
import './App.css';

import Home from "./Components/FunctionalComponents/Home.jsx";
import About from './Components/FunctionalComponents/About.jsx';
import Contact from './Components/FunctionalComponents/Contact.jsx';
import Gallery from './Components/FunctionalComponents/Gallery.jsx';
import NavBar from './Components/FunctionalComponents/NavBar.jsx';
import Form from './Components/FunctionalComponents/Form.jsx';
import UseEffect from './Components/FunctionalComponents/UseEffect.jsx';
import UseRef from './Components/FunctionalComponents/UseRef.jsx';
import UseContext from './Components/FunctionalComponents/UseContext.jsx';
import UseMemo from './Components/FunctionalComponents/UseMemo.jsx';
import Login from './Components/FunctionalComponents/Login.jsx'
import Signup from './Components/FunctionalComponents/Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from './Components/FunctionalComponents/Signup.jsx';

function App() {
    return (
        <div>
            <BrowserRouter>
                 
                <Routes>

                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<SignUpForm/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About college="Kongu engineering" clg1="Kongu arts" clg2="Naturopathy" district="Perundurai"/>} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/form" element={<Form/>}/>
                    <Route path="/UseEffect" element={<UseEffect/>}/>
                    <Route path="/use-ref" element={<UseRef/>}/>
                    <Route path="/UseContext" element={<UseContext/>}/>
                    <Route path="/UseMemo" element={<UseMemo/>}/>
                   

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
