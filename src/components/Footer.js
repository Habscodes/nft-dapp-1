import React from 'react';

const Footer = () => {
  return (
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
  );
};

export default Footer;
