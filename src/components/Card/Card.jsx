import React from 'react';
import './Card.css';

function Card({ title, description, imageUrl, buttonText, onButtonClick, price }) {
  let date = new Date();
  date.setDate(date.getDate() + 5);
  date = date.toLocaleDateString();

  return (
    <div className="card">
      {/* Si se proporciona url de image, se renderiza la imagen, sino no. */}
      {imageUrl && <img src={imageUrl} alt={title} className='card-image' />}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className='card-price-container'>
        <p className="card-price">{price*0.89}$</p>
        <p className="card-price-discount">{price}$</p>
        </div>
        <p className='shipment'><span className='color-success'>Envío gratis</span> Recíbelo antes de {date} </p>

       { /* Si se proporciona un texto para el botón, se renderiza el botón, sino no.*/}
        {buttonText && (
            <button className="card-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
    </div>
    </div>
  );
}

export default Card;