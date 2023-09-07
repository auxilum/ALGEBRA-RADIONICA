let x = 11;
let y = "Marko";

if (x > 4) {
  console.log("Broj je veci od 4 i iznosi: " + x);
} else {
  console.log("Broj " + x + " je manji od 4");
}

if (y === "Marko") {
  console.log("Bok " + y);
} else if (y === "Dinko") {
  console.log("Baj " + y);
} else if (y === "Martina") {
  console.log("Cao " + y);
} else {
  console.log("Bok novi " + y);
}

let z = 4;

switch (z) {
  case 1:
    console.log("Ispisi broj 1!");
    break;
  case 2:
    console.log("Ispisi broj 2!");
    break;
  case 3:
    console.log("Ispisi broj 3!");
    break;
  case 4:
    console.log("Ispisi broj 4!");
    break;
  default:
    console.log("Cudan broj!");
    break;
}
