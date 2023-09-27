// 2. HTML index.html-a treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// 	- h1 element sadrži tekst "Karlovac"
// 	- span u description div-u je zamijenjen h3 elementom sa tekstom "5 rijeka"
// 	- div s klasom "info" sadrži text "Peta rijeka je piva."
// 	- lista u footer elementu izlistava svih 5 karlovačkih rijeka u li elementima

// 3. Imate zadane vrijednosti:
// 	- pageOffsetY elementa je 1300px
// 	- scrollTop je 200px
// 	- visina korisničkog ekrana je 730px
// 	- visina elementa je 300px

// 	Da li je element vidljiv na ekranu?
// 	U slučaju da nije, koliko mu piksela fali i u kojem smjeru?

let h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

let description = document.querySelector(".description");
description.innerHTML = "Grad na <h3>5 rijeka</h3>";
let h3 = document.querySelector("h3");
h3.style.display = "inline";

let divInfo = document.querySelector(".info");
divInfo.innerText = "Peta rijeka je piva";

let footer = document.querySelector("#footer");
let uList = footer.firstElementChild;
//console.log(uList);
// let unorderedList = uList.children.length;
// console.log(unorderedList);
let popisRijeka = ["Kupa", "Korana", "Mreznica", "Dobra", "Piva"];

let addLiItem = (ul, arr) => {
  for (let j = 1; j < ul.children.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      let lItem = document.querySelector(`#list :nth-child(${j})`);
      console.log(lItem);
      lItem.innerText = arr[i];
      ul.appendChild(lItem);
    }
  }
};

addLiItem(uList, popisRijeka);

// let rijeke = ["Kupa", "Korana", "Mreznica", "Dobra", "Piva"];

// const liElementi = document.getElementsByTagName("li");

// console.log(liElementi);

// for (let i = 0; i < liElementi.length; i++) {
//   liElementi[i].textContent = rijeke[i] || "";
// }
