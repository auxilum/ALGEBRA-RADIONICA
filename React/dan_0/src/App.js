import React from "react";
import Header from "./components/Header";
import RandomQuote from "./components/RandomQuote";
import person from "./Person";
import { num1, num2 } from "./Utility";
import { sum as zbroj } from "./Utility";
import * as Math from "./Utility";
// import Component1 from "./components/Component1";
// import Component2 from "./components/Component2";
// import Component3 from "./components/Component3";
import { Component1, Component2, Component3 } from "./components";

function App() {
  return (
    <>
      <h1>Bok {person.name}</h1>
      <p>Prvi broj: {num1}</p>
      <p>Drugi broj: {num2}</p>
      <p>
        Zbroj {num1} i {num2} je: {zbroj(num1, num2)}
      </p>
      <hr />
      <p>Zbroj brojeva je: {Math.sum(Math.num1, Math.num2)}</p>
      <hr />
      <Component1 />
      <Component2 />
      <Component3 />
      <Header />
      <RandomQuote />
      <h1>Moja prva aplikacija</h1>
      <h2>Moj prvi naslov :)</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora ea, in
        laboriosam quam voluptatibus quisquam! Magni quidem facilis obcaecati!
        Quidem!
      </p>
    </>
  );
}

export default App;

// 1.	Napraviti novu React aplikaciju
// 	2.	Unutar App komponente napraviti dvije varijable koje sadrže neki string
// 	3.	Napraviti JSX element koji će prikazati neki tekst na ekranu
// 	4.	Napraviti JSX element koji će prikazati neki tekst na ekranu + vrijednost jedne od varijabli
// 	5.	Napraviti JSX element koji će prikazati obje varijable odvojene razmakom
