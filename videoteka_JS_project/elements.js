export let divContainer = document.createElement("div");
divContainer.setAttribute("id", "container");
document.body.appendChild(divContainer);

export let headerElement = document.createElement("header");

export let objectElement = document.createElement("object");
objectElement.setAttribute("data", "./assets/vhs.svg");

export let newDivElement = (name, value) => {
  let div = document.createElement("div");
  div.setAttribute(name, value);
  return div;
};
