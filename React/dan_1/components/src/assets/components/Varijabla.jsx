import React from "react";

function Varijabla({ user }) {
  // const user = "Ivan Horvat";

  const greetings = user.startsWith("Ivan") ? (
    <p>Hello Friend!</p>
  ) : (
    <p>Hello Stranger!</p>
  );

  return <div>{greetings}</div>;
}

export default Varijabla;
