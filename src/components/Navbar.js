import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: 'rgb(26, 26, 38)',
  };

  const gradientButtonStyle = {
    background: 'linear-gradient(181.76deg, #1E3A8A 1.48%, #7C3AED 98.51%)',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={navbarStyle}>
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
            <button className="btn" style={gradientButtonStyle}>Get Your Card Now</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
