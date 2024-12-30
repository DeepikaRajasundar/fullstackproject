import React from 'react';
import '../../assets/css/NavBar.css'

var NavBar = ()=>{
    
    var styling={

        fontSize:"20px",
        color:"blue"
    };
      return ( <header>
        <h1 style={styling} >Welcome to navigaation bar</h1> 
        <h2 id="ideg">Testing Styling</h2>
        </header> 
      );
}
export default NavBar