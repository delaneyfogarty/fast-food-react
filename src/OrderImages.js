import React from 'react';
import './App.css';

export default function OrderImages({ foodId, sideId, drinkId, dessertId }) {
  return (
    <div className="order">
      <img src={`${foodId}.png`} />
      <img src={`${sideId}.png`} />
      <img src={`${drinkId}.png`} />
      <img src={`${dessertId}.png`} />
    </div>
  );
}
