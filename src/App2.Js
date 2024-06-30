// App2.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App2 = () => {
  const pageStyle = {
    backgroundColor: 'rgb(19, 19, 31)',
    color: 'white',
    minHeight: '100vh',
    paddingTop: '80px',
  };

  const buttonStyle = {
    background: 'linear-gradient(181.76deg, #1E3A8A 1.48%, #7C3AED 98.51%)',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div className="App" style={pageStyle}>
      <Navbar />

      {/* Homepage */}
      <section id="homepage" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Welcome to Our Website</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="gradient-button" style={buttonStyle} type="button">
                Explore Now
              </button>
            </div>
            <div className="col-md-6">
              <img src="/stackcard.png" className="img-fluid" alt="Stack Card" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App2;
