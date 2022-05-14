import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <div className="start-order">
      <p>Type your name here:</p>
      <input onChange={(e) => setOrderName(e.target.value)} />
    </div>
  );
}
