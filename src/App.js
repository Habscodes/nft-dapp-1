import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const pageStyle = {
    backgroundColor: 'rgb(19, 19, 31)',
    color: 'white',
    minHeight: '100vh',
    paddingTop: '80px',
  };

  return (
    <div className="App" style={pageStyle}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ backgroundColor: 'rgb(26, 26, 38)' }}>
        <div className="container navbar-center">
          <a className="navbar-brand" href="#">NFTGlobal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-center">
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link features-nav-link" href="#features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#marketplace">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
            </ul>
            <form className="d-flex ms-auto">
              <button className="gradient-button" type="button">Get Your Card Now</button>
            </form>
          </div>
        </div>
      </nav>

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

      {/* Footer section */}
      <footer className="footer bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            {/* First div */}
            <div className="col-md-3 mb-3 mb-md-0">
              <h4>NFTGLOBAL</h4>
              <p>
                <a href="#"><i className="bi bi-facebook"></i></a>
                &nbsp;
                <a href="#"><i className="bi bi-twitter"></i></a>
                &nbsp;
                <a href="#"><i className="bi bi-instagram"></i></a>
                &nbsp;
                <a href="#"><i className="bi bi-linkedin"></i></a>
              </p>
            </div>

            {/* Second div */}
            <div className="col-md-3 mb-3 mb-md-0">
              <h4>Contact Us</h4>
              <p>Random Address<br />City, Country</p>
            </div>

            {/* Third div */}
            <div className="col-md-3 mb-3 mb-md-0">
              <h4>Reach Out</h4>
              <ul className="list-unstyled">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms and Conditions</a></li>
              </ul>
            </div>

            {/* Fourth div */}
            <div className="col-md-3 mb-3 mb-md-0">
              <h4>Subscribe</h4>
              <form>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search..." aria-label="Search" />
                  <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Add more sections as needed */}
    </div>
  );
};

export default App;
