import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const pageStyle = {
    backgroundColor: 'rgb(19, 19, 31)',
    color: 'white',
    minHeight: '100vh',
    paddingTop: '80px',
  };

  return (
    <div className="App" style={pageStyle}>
      <Navbar />

      <section id="explore-cards" className="section">
        <div className="container">
          <h1>Explore Our Card Options</h1>
          <h2>Unlock the full potential of your transactions with our Virtual and Physical Cards</h2>
        </div>
      </section>

      <section id="card-options" className="section">
        <div className="container">
          <div className="row">
            {/* Original layout */}
            <div className="col-md-6">
              <h3>Virtual Card</h3>
              <p>Lorem ipsum dolor sit amet, consectet.</p>
            </div>
            <div className="col-md-6">
              <img src="/image.png" className="img-fluid" alt="Card Option" />
            </div>
          </div>

          {/* Switched layout */}
          <div className="row mt-5">
            <div className="col-md-6">
              <img src="/image6.png" className="img-fluid" alt="Card Option" />
            </div>
            <div className="col-md-6">
              <h3>Physical Card</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <form className="mt-3">
                <button className="gradient-button" type="button">Get Your Card Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section id="benefits" className="section ">
        <div className="container">
          <h2 className="text-center mb-4">Benefits</h2>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Benefit 1</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Benefit 2</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Benefit 3</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Benefit 4</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New section with images */}
      <section id="new-section" className="section">
        <div className="container">
          <h2 className="text-center mb-4">New Section with Images</h2>
          <div className="row">
            <div className="col-md-6">
              <img src="/image5.png" className="img-fluid" alt="Image 5" />
            </div>
            <div className="col-md-6">
              <img src="/image4.png" className="img-fluid" alt="Image 4" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
