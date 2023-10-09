let h1 = document.createElement("h1");
h1.innerText = "Shopping list";
document.body.appendChild(h1);

let input = document.createElement("input");
input.type = "text";
input.setAttribute("id", "name");
document.body.appendChild(input);

let select = document.createElement("select");
select.setAttribute("id", "type");
document.body.appendChild(select);

let itemArr = [
  "Drinks",
  "Bakery",
  "Canned Foods",
  "Dairy",
  "Frozen",
  "Meats",
  "Other",
];

for (let i = 0; i < itemArr.length; i++) {
  let option = document.createElement("option");
  option.value = itemArr[i];
  option.innerText = itemArr[i];
  select.appendChild(option);
}

let addButton = document.createElement("button");
addButton.setAttribute("id", "addbutton");
addButton.innerText = "Add item";
document.body.appendChild(addButton);

let ul = document.createElement("ul");
ul.setAttribute("id", "shopping-list");
document.body.appendChild(ul);
ul.style.listStyleType = "none";
let ulList = document.getElementById("shopping-list");

addButton.addEventListener("click", () => {
  let input = document.getElementById("name");
  input.addEventListener("input", () => {});
  let select = document.getElementById("type");
  select.addEventListener("select", () => {});

  let liItem = document.createElement("li");
  liItem.setAttribute("data-type", select.value);
  liItem.innerText = input.value;

  ulList.appendChild(liItem);

  input.value = "";
});
