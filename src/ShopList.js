import React from 'react';
import TacoShop from './TacoShop';

export default function TacosList({ tacoShops }) {
  return (
    <div className='shop-list'>
      {
        tacoShops.map((tacoShop, i) => <TacoShop key={tacoShop.name + i + tacoShop.id} {...tacoShop} />)
      }
    </div>
  );
}

