import React from 'react';

export default function SideDropdown({ setSideId }) {
  return (
    <div>
      <h3>Side Order</h3>
      <select onChange={(e) => setSideId(e.target.value)}>
        <option value="side-1">Seaweed Salad</option>
        <option value="side-2">Miso Soup</option>
        <option value="side-3">Crab Rangoons</option>
      </select>
    </div>
  );
}
