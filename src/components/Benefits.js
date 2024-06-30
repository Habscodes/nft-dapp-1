import React from 'react';
import '../App.css';

const Benefits = () => {
  return (
    <section id="benefits" className="section">
      <div className="container">
        <h2 className="section-title">Benefits</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card benefit-box">
              <div className="card-body">
                <h5 className="card-title">Benefit 1</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card benefit-box">
              <div className="card-body">
                <h5 className="card-title">Benefit 2</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card benefit-box">
              <div className="card-body">
                <h5 className="card-title">Benefit 3</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card benefit-box">
              <div className="card-body">
                <h5 className="card-title">Benefit 4</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
