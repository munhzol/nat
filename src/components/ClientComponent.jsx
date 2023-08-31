"use client";

import { useState } from "react";

export default function ClientComponent({ children }) {
  const [counter, setCounter] = useState(1);

  return (
    <div>
      <h1>Client Component</h1>
      <p> Counter: {counter}</p>
      <button className="btn btn-blue" onClick={() => setCounter(counter + 1)}>
        Increase counter
      </button>

      <div>{children}</div>
    </div>
  );
}
