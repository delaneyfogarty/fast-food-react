import React from 'react';

export default function DessertDropdown({ setDessertId }) {
  return (
    <div>
      <h3>Dessert</h3>
      <select onChange={(e) => setDessertId(e.target.value)}>
        <option value="dessert-1">Green Tea Tiramisu</option>
        <option value="dessert-2">Matcha Mochi</option>
      </select>
    </div>
  );
}
