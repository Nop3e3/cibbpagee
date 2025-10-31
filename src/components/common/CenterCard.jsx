import React from 'react';
import './CenterCard.css';

export default function CenterCard({imgSrc,title}) {
  return (
    <div className="centcardd">
      <img src={imgSrc} alt={title} />
 <div className='conn'>
      <h2 className='context'>{title}</h2>
      <p className='readmore'>read more</p></div>
    </div>
  );
}
