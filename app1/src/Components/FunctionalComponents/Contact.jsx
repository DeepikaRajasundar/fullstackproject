import React from 'react';
import NavBar from "./NavBar";


const Contact = () => {
  return (
    <div>
      <NavBar/>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        This is my contact page
      </h1>
      <h3>For queries contact: deepikar.22it@kongu.edu</h3>
      <label style={{ fontSize: "20px" }}>Feedback</label>
      <textarea
        name="textarea_name"
        rows="3"
        cols="70"
        placeholder="Enter your feedback"
        style={{ margin: "10px", padding: "20px" }}
      ></textarea>
      <button
        type="submit"
        style={{
          margin: "20px",
          backgroundColor: "red",
          fontStyle: "revert-layer",
          fontSize: "20px",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
      <footer className="footer">
        <p>&copy; 2024 Your Website Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
//how root is convert into components
//coding in inline and internal how it converts into vennila css
