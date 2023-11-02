import React from "react";

function Logoperator(props) {
  // const user = "Ivan Horvat";
  // const {user} = props;
  const user = props.user;

  const isFriend = user.startsWith("Ivan");

  return (
    <div>
      {isFriend && <p>Hello Amigo!</p>}
      {!isFriend && <p>Hello Foe!</p>}
    </div>
  );
}

export default Logoperator;

// 1.	Potrebno je napraviti dvije komponente
// 	2.	Glavna komponenta poziva drugu komponentu ConditionalRendering sa svojstvom (props) number
// 	3.	U ovisnusti o poslanom broju treba ispisati drukčiji tekst
// 	4.	Ako se pošalje nedefinirani broj, komponenta ConditionalRendering ništa ne ispisuje
