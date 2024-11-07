import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contatore: {count}</h1>
      <button onClick={increment}>Aumenta di uno</button>
    </div>
  );
}
