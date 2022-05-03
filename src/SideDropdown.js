import React from 'react';

export default function SideDropdown({ setSideId }) {
  return (
    <div>
      <select onChange={(e) => setSideId(e.target.value)}>
        <option value="1">Seaweed Salad</option>
        <option value="2">Miso Soup</option>
        <option value="3">Crab Rangoons</option>
      </select>
    </div>
  );
}
