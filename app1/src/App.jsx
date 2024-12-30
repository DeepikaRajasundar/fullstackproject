import React from 'react';
import './App.css';
import ClassComp from "./Components/ClassComponents/ClassComp.jsx";
import NavBar from "./Components/FunctionalComponents/NavBar.jsx"; // Corrected import name

function App() {
    return (
        <div>
            <NavBar />
            <ClassComp/> 
        </div>
    );
}

export default App;
