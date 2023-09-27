// Stil elemenata treba promijeniti pomocu JS i HTML DOM API-ja tako da:
// 	- umjesto circle buleta na elementima liste prikažu redne brojke
// 	- div sa klasom info treba dobiti klasu koja će ga sakriti (dodajte u stylesheet)
// 	- saznajte margin-left izračunati stil koji je primijenjen na body elementu

let li = [...document.getElementsByTagName("li")];
// let li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
  li[i].style.listStyleType = "number";
}

let timeout1, timeout2;
function hideDiv() {
  let div = document.querySelector(".info");
  div.classList.remove("hidden");
  timeout1 = setTimeout(() => {
    div.classList.add("hidden");
  }, 700);
  timeout2 = setTimeout(() => {
    hideDiv(timeout1, timeout2);
  }, 1400);
}

let handler = () => {
  clearTimeout(timeout1);
  clearTimeout(timeout2);
};

// hideDiv();

document.getElementById("start").addEventListener("click", hideDiv);

document.getElementById("stop").addEventListener("click", handler);

let bodyMarLeft = window
  .getComputedStyle(document.body, null)
  .getPropertyValue("margin-left");

console.log(bodyMarLeft);
