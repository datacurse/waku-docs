'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((c) => c + 1);

  return (
    <div className="border-blue-400 rounded border border-dashed p-4">
      <div>Count: {count}</div>
      <button
        onClick={handleIncrement}
        className="rounded-sm bg-black px-2 py-0.5 text-sm text-white"
      >
        Increment
      </button>
    </div>
  );
};
