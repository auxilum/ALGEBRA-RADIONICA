let description = document.querySelector(".description");
let content = description.innerHTML;
console.log(content);

// description.innerHTML = "Ima <span>4 rijeke</span>";
console.log(description);
// description.textContent = "Ima <span>4 rijeke</span>";
description.innerText = "Ima <span>4 rijeke</span>";
console.log(description);

let image = document.querySelector("img");
image.src = "blur-buildings.jpg";

console.log(image.getAttribute("width")); //60

image.style.height = "100px";

image.setAttribute("height", 40);
//postavljanje vrijednosti i atributa
image.removeAttribute("height");
//brisane atributa

let ul = document.querySelector("ul");
ul.dataset.index = 2;
