import React from "react";

export default function ListaNomi() {
  const nomi = ["Simone", "Spongebob", "Ciao", "Bob", "Voliamo"];

  return (
    <ul>
      {nomi.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
}
