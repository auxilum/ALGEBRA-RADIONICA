import React from "react";

function ConditionalRendering({ number }) {
  console.log(number);
  function isNumber(number) {
    return typeof number === "number";
  }

  console.log(isNumber());

  return <div>{`${isNumber()}` && <p>Broj je {number}</p>}</div>;
}

export default ConditionalRendering;
