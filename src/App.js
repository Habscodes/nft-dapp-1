import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Benefits from './components/Benefits';

const App = () => {
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

      <section id="explore-cards" className="section">
        <div className="container">
          <h1 className="section-title">Explore Our Card Options</h1>
          <p className="section-paragraph">Unlock the full potential of your transactions with our Virtual and Physical Cards</p>
        </div>
      </section>

      <section id="card-options" className="section">
        <div className="container">
          <div className="row">
            {/* Original layout */}
            <div className="col-md-6 order-2 order-md-1">
              <h3>Virtual Card</h3>
              <p>Lorem ipsum dolor sit amet, consectet.</p>
            </div>
            <div className="col-md-6 order-1 order-md-2">
              <img src="/stackcard.png" className="img-fluid" alt="Stack Card" />
            </div>
          </div>

          {/* Switched layout */}
          <div className="row mt-5">
            <div className="col-md-6">
              <img src="/stackcard.png" className="img-fluid" alt="Stack Card" />
            </div>
            <div className="col-md-6">
              <h3>Physical Card</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <form className="mt-3">
                <button className="gradient-button" style={buttonStyle} type="button">Get Your Card Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <Benefits />

      {/* New section with images */}
      <section id="new-section" className="section">
        <div className="row">
          <div className="col-md-12">
            <img src="/ribbon0.png" className="img-fluid" alt="Ribbon 0" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="dummy-text">
              <p>Dummy text below Image 6</p>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <img src="/ribbon.png" className="img-fluid" alt="Ribbon" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
