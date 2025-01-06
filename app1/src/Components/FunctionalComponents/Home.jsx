import React from 'react';
import NavBar from './NavBar';  // Import the NavBar component
import '../css/Home.css';

const Home = () => {  // Change to capital "H"
  var styling = {
    textDecoration: "underline",
    fontSize: "30px",
    color: "blue",
  };

  return (
    <>
      <NavBar />  {/* Ensure this is placed correctly */}
      <div>
        <h1 id="idegg" style={styling}>Welcome to home page</h1>
        <img
          src="https://wallpaperaccess.com/full/3214373.jpg"
          alt="welcome"
          height="600px"
          width="100%"
          style={{ padding: "20px", margin: "30px 0" }}
        />
        <p className="box-model">
          Thank you for visiting! Explore our site to find more interesting content.
        </p>
        <footer className="footer">
          <p>&copy; 2024 Your Website Name. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
