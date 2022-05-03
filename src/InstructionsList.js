import React from 'react';

export default function InstructionsList({ instructions }) {
  return (
    <section>
      <h2>Your Order Instructions:</h2>
      <div>
        {instructions.map((instruction, i) => (
          <p key={instruction + i}>{instruction}</p>
        ))}
      </div>
    </section>
  );
}
