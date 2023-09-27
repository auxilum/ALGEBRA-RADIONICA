function klik() {
  let div = document.getElementById("ispis");
  div.innerText = "Kliknut sam";
}

let button = document.getElementById("button");
button.addEventListener("click", klik);
