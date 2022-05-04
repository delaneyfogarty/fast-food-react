import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  return (
    <div>
      <h3>Entree</h3>
      <select onChange={(e) => setFoodId(e.target.value)}>
        <option value="1">Nigiri</option>
        <option value="2">Shrimp Tempura Roll</option>
        <option value="3">Spicy Tuna Hand Rolls</option>
      </select>
    </div>
  );
}
