//DZ:
// HTML rijeke.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// 	- se na početak doda h1 element
// 	- ispod diva sa klasom "description" se umetne novi div sa klasom "info"
// 	- lista u footer elementu na kraju mora sadrzavati 5 praznih <li> elemenata - koristiti petlju!

let headerOne = document.createElement("h1");
headerOne.innerText = "Naslov";

document.body.prepend(headerOne);

let description = document.querySelector(".description");
let newDiv = document.createElement("div");
newDiv.setAttribute("class", "info");
newDiv.style.backgroundColor = "yellow";
newDiv.innerText = "Hello";
description.appendChild(newDiv);

let footer = document.querySelector("#footer");
let uList = footer.firstElementChild;
let unorderedList = uList.children.length;

let addLiItem = (ul, num) => {
  for (let i = 0; i < num; i++) {
    if (ul.children.length < num) {
      let lItem = document.createElement("li");
      ul.appendChild(lItem);
    }
  }
};

addLiItem(uList, 5);
