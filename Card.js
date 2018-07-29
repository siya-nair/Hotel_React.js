import React from 'react';

const Card = ({ name, city, id }) => {
  return (
    <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5'>
      <div>
      <list>
        <h2>{name}</h2>
        <p>Location:{city}</p>
        </list>
      </div>
    </div>
  );
}

export default Card;