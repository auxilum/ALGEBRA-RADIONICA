var footer = document.getElementById("footer");
console.log(footer);
var description = document.querySelector(".description");
console.log(description);

var d = document.createElement("div"); //kreirati novi element
footer.appendChild(d); //dodijeliti novi element postojećem
description.parentNode.removeChild(description); //brisanje elementa. parentNode - postavljam se na parent element elemnta koji želim obrisati

//DZ:
// HTML rijeke.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// 	- se na početak doda h1 element
// 	- ispod diva sa klasom "description" se umetne novi div sa klasom "info"
// 	- lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata - koristiti petlju!

// https://developer.mozilla.org/en-US/docs/Web/API/Document/prepend
// https://developer.mozilla.org/en-US/docs/Web/API/Element/className
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode
