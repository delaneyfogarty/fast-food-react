import React from 'react';

export default function OrderNameInput({ setOrderName }) {
  return (
    <div>
      <input onChange={(e) => setOrderName(e.target.value)} />
    </div>
  );
}
