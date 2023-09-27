let naslov = document.getElementById("crveni");
console.log(naslov);
naslov.style.color = "red";

let paragraph = document.getElementsByName("p");
console.log(paragraph);

const element = document.getElementById("test");

//https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
//prihvacanje
const cssObj = window.getComputedStyle(element, null);
console.log(cssObj);

//
let bgColor = cssObj.getPropertyValue("background-color");
console.log(bgColor);

//className dodjeljujemo klase elementu
element.className = "containerElement containerElement--left";
console.log(element.classList); //ispis klasa u obliku array

element.classList.add("hide"); // dodavanje klase u array
console.log(element.classList);

element.classList.remove("hide"); //brisanje klase iz arraya
