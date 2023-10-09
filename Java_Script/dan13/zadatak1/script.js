let inputPlaceholder = document.querySelector("input");
console.log(inputPlaceholder);

let addButton = document.querySelector("#addButton");
console.log(addButton);

let list = document.querySelector("ul");

console.log(list);

let liElem = document.createElement("li");
console.log(liElem);

counter = 0;
addButton.addEventListener("click", () => {
  let liElem = document.createElement("li");
  liElem.id = counter;
  let checkBox = document.createElement("input");
  checkBox.style.display = "inline-block";
  checkBox.type = "checkbox";
  checkBox.id = counter;
  checkBox.addEventListener("click", () => {
    if (checkBox.id === liElem.id) {
      liElem.style.textDecoration = "line-through";
    }
  });

  let input = inputPlaceholder.value;
  liElem.innerText = input;
  list.appendChild(checkBox);

  list.appendChild(liElem);
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.style.marginLeft = "14px";
  liElem.appendChild(deleteButton);

  deleteButton.addEventListener("click", () => {
    event.target.parentNode.remove();
  });
  inputPlaceholder.value = "";
  counter++;
});
