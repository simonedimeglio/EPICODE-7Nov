import React, { useState } from "react";

export default function Messaggio() {
  const [mostraMessaggio, setMostraMessaggio] = useState(false);

  const toggleMessaggio = () => {
    setMostraMessaggio(!mostraMessaggio);
  };

  return (
    <div>
      {mostraMessaggio && <h1>Benvenuti nel club react</h1>}
      <button onClick={toggleMessaggio}>
        {mostraMessaggio ? "Nascondi messaggio" : "Mostra messaggio"}
      </button>
    </div>
  );
}
