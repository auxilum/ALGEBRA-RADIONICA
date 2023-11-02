import React from "react";
import ConditionalRendering from "./ConditionalRendering";

function GlavnaKomponenta() {
  const number = "asdasd";
  return (
    <div>
      <ConditionalRendering number={number} />
    </div>
  );
}

export default GlavnaKomponenta;
