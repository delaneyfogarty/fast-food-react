import React from 'react';
import './App.css';

export default function OrderImages({ foodId, sideId, drinkId, dessertId }) {
  return (
    <div className="order">
      <img src={`food-${foodId}.png`} />
      <img src={`side-${sideId}.png`} />
      <img src={`drink-${drinkId}.png`} />
      <img src={`dessert-${dessertId}.png`} />
    </div>
  );
}
