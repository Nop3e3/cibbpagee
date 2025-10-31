
import React from 'react';
import './Card.css';

export default function Card({imgSrc,title}) {
  return (
    <div className="cardd">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}
