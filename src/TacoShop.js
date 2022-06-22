import React from 'react';

export default function TacoShop({ name,
  address,
  menu }) {
  return (
    <div className='shop'>
      <h3>{name}</h3>
      <p>{address}</p>
      <p>Menu for: <a href={`${menu}`}>{name}</a></p>
    </div>
  );
}

