import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  return (
    <div>
      <h3>Beverage</h3>
      <select onChange={(e) => setDrinkId(e.target.value)}>
        <option value="1">Sake</option>
        <option value="2">Coca Cola</option>
        <option value="3">Green Tea</option>
      </select>
    </div>
  );
}
