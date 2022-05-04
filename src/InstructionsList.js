import React from 'react';

export default function InstructionsList({ instructions }) {
  return (
    <section>
      <div>
        {instructions.map((instruction, i) => (
          <p key={instruction + i}>{instruction}</p>
        ))}
      </div>
    </section>
  );
}
