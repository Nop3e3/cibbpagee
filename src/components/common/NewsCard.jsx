
import React from 'react';
import './NewsCard.css';
import Imagenews from'../../Assets/newsss.png';
export default function NewsCard() {
  return (
    <div className="news-card">
        <img className='borderr' src={Imagenews} alt="News Image" />
        <div className='news-content'>
               <div className='paara'>08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI <br/>
                Capital to Successfully Closes the Seventh Securitization Bond Issuance for <br/>
                Halan Consumer Finance, Worth EGP 3.4 Billion
               </div>
   <h1 className='tttl'>Commercial International Bank (CIB) Has Partnered 
    with CI Capital to Successfully Closes the Seventh 
    Securitization Bond Issuance for Halan Consumer Finance, Worth EGP 3.4 Billion
    Finance, Worth EGP 3.4 Billion
   </h1>
   <div className='paara'>
    CIB, Egypt's leading and largest private sector bank, has successfully partnered <br/>
    with CI Capital to complete the seventh issuance for Halan Consumer Finance, <br/>
    valued at EGP 3.4 billion.
   </div>
 </div>
    </div>
  );
}
