import { newDivElement } from "./elements.js";

let footer = document.createElement("footer");
document.body.appendChild(footer);

let footerP = document.createElement("p");
footerP.innerText = "Zapratite nas:";
footerP.style.textAlign = "center";
footer.appendChild(footerP);

let divFooter = newDivElement("id", "footerContainer");
footer.appendChild(divFooter);

let firstLink = document.createElement("a");
firstLink.addEventListener("click", (event) => {
  window.open("https://www.facebook.com", "_blank");
});

let img1 = document.createElement("img");
img1.src = "./assets/icons8-facebook-80.png";
img1.style.height = "45px";
img1.style.width = "45px";

firstLink.addEventListener("mouseover", (event) => {
  img1.style.backgroundColor = "#f1e6c5";
  img1.style.borderRadius = "30%";
});

firstLink.addEventListener("mouseleave", (event) => {
  img1.style.backgroundColor = "#9bc5ad";
});

firstLink.appendChild(img1);

divFooter.appendChild(firstLink);

let secondLink = document.createElement("a");
secondLink.addEventListener("click", (event) => {
  window.open("https://www.instagram.com", "_blank");
});

let img2 = document.createElement("img");
img2.src = "./assets/icons8-instagram-old-80.png";
img2.style.height = "45px";
img2.style.width = "45px";

secondLink.addEventListener("mouseover", (event) => {
  img2.style.backgroundColor = "#f1e6c5";
  img2.style.borderRadius = "30%";
});

secondLink.addEventListener("mouseleave", (event) => {
  img2.style.backgroundColor = "#9bc5ad";
});

secondLink.appendChild(img2);

divFooter.appendChild(secondLink);

let thirdLink = document.createElement("a");
thirdLink.addEventListener("click", (event) => {
  window.open("https://www.twitter.com", "_blank");
});

let img3 = document.createElement("img");
img3.src = "./assets/icons8-twitter-80.png";
img3.style.height = "45px";
img3.style.width = "45px";

thirdLink.addEventListener("mouseover", (event) => {
  img3.style.backgroundColor = "#f1e6c5";
  img3.style.borderRadius = "30%";
});

thirdLink.addEventListener("mouseleave", (event) => {
  img3.style.backgroundColor = "#9bc5ad";
});

thirdLink.appendChild(img3);

divFooter.appendChild(thirdLink);
