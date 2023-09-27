import {
  divContainer,
  headerElement,
  newDivElement,
  objectElement,
} from "./elements.js";

document.title = 'Videoteka "Vremenska kapsula"';

divContainer.appendChild(headerElement);

headerElement.appendChild(newDivElement("id", "logo"));

let divLogo = document.getElementById("logo");

divLogo.appendChild(objectElement);

headerElement.appendChild(newDivElement("id", "title"));

let divTitle = document.getElementById("title");
divTitle.innerText = 'Videoteka "Vremenska kapsula"';

headerElement.appendChild(newDivElement("id", "navContainer"));

//Navigation bar setup
//----------------------------------

let divNavContainer = document.getElementById("navContainer");

divNavContainer.appendChild(newDivElement("id", "firstNavLink"));
divNavContainer.appendChild(newDivElement("id", "secondNavLink"));
divNavContainer.appendChild(newDivElement("id", "thirdNavLink"));

let firstNavDiv = divNavContainer.firstElementChild;
firstNavDiv.setAttribute("class", "navLink");
let secondNavDiv = document.querySelector("#navContainer :nth-child(2)");
secondNavDiv.setAttribute("class", "navLink");
let thirdNavDiv = divNavContainer.lastElementChild;
thirdNavDiv.setAttribute("class", "navLink");

firstNavDiv.innerText = "Pocetna";
secondNavDiv.innerText = "Popis filmova";
thirdNavDiv.innerText = "Unajmi film";

firstNavDiv.addEventListener("click", (event) => {
  window.open("index.html", "_self");
});
firstNavDiv.addEventListener("mouseover", (event) => {
  firstNavDiv.style.transition = "transform 0.8s";
  firstNavDiv.style.transform = "scale(2.1, 2.1)";
  secondNavDiv.style.transition = "transform 0.8s";
  secondNavDiv.style.transform = "scale(0.4, 0.4)";
  thirdNavDiv.style.transition = "transform 0.8s";
  thirdNavDiv.style.transform = "scale(0.4, 0.4)";
  firstNavDiv.style.color = "#ff7900";
});
firstNavDiv.addEventListener("mouseout", (event) => {
  firstNavDiv.style.transition = "transform 0.8s";
  firstNavDiv.style.transform = "scale(1, 1)";
  secondNavDiv.style.transition = "transform 0.8s";
  secondNavDiv.style.transform = "scale(1, 1)";
  thirdNavDiv.style.transition = "transform 0.8s";
  thirdNavDiv.style.transform = "scale(1, 1)";
  firstNavDiv.style.color = "#130b34";
});

secondNavDiv.addEventListener("click", (event) => {
  window.open("popis_filmova.html", "_self");
});
secondNavDiv.addEventListener("mouseover", (event) => {
  secondNavDiv.style.transition = "transform 0.8s";
  secondNavDiv.style.transform = "scale(2.1, 2.1)";
  firstNavDiv.style.transition = "transform 0.8s";
  firstNavDiv.style.transform = "scale(0.4, 0.4)";
  thirdNavDiv.style.transition = "transform 0.8s";
  thirdNavDiv.style.transform = "scale(0.4, 0.4)";
  secondNavDiv.style.color = "#ff7900";
});
secondNavDiv.addEventListener("mouseout", (event) => {
  firstNavDiv.style.transition = "transform 0.8s";
  firstNavDiv.style.transform = "scale(1, 1)";
  secondNavDiv.style.transition = "transform 0.8s";
  secondNavDiv.style.transform = "scale(1, 1)";
  thirdNavDiv.style.transition = "transform 0.8s";
  thirdNavDiv.style.transform = "scale(1, 1)";
  secondNavDiv.style.color = "#130b34";
});

thirdNavDiv.addEventListener("click", (event) => {
  window.open("unajmi_film.html", "_self");
});
thirdNavDiv.addEventListener("mouseover", (event) => {
  thirdNavDiv.style.transition = "transform 0.8s";
  thirdNavDiv.style.transform = "scale(2.1, 2.1)";
  firstNavDiv.style.transition = "transform 0.8s";
  firstNavDiv.style.transform = "scale(0.4, 0.4)";
  secondNavDiv.style.transition = "transform 0.8s";
  secondNavDiv.style.transform = "scale(0.4, 0.4)";
  thirdNavDiv.style.color = "#ff7900";
});
thirdNavDiv.addEventListener("mouseout", (event) => {
  firstNavDiv.style.transition = "transform 0.8s";
  firstNavDiv.style.transform = "scale(1, 1)";
  secondNavDiv.style.transition = "transform 0.8s";
  secondNavDiv.style.transform = "scale(1, 1)";
  thirdNavDiv.style.transition = "transform 0.8s";
  thirdNavDiv.style.transform = "scale(1, 1)";
  thirdNavDiv.style.color = "#130b34";
});
