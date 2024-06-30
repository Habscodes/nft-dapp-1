import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NFTCard = ({ nft }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={nft.image} className="card-img-top" alt={nft.name} />
      <div className="card-body">
        <h5 className="card-title">{nft.name}</h5>
        <p className="card-text">{nft.description}</p>
      </div>
    </div>
  );
};

export default NFTCard;
