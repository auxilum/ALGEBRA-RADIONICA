let footer = document.getElementById("footer");

console.log(footer);

let description = document.querySelector(".description");

console.log(description);

let d = document.createElement("div");

footer.appendChild(d);

//description.remove();

description.parentNode.removeChild(description);
//brisanje elementa. parentNode - postavljam se na parent element
//elementa  koji zelim obrisati
