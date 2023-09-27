//konstruktor - pisemo naziv velikim pocetnim slovom
// koristimo ga za kreiranje objekata putem kljucne rijeci "new"
function Dog() {
  this.hasSat = false;
  this.bark = function () {
    return "Wuf Wuf";
  };
  this.doSit = function () {
    this.hasSat = true;
  };
}

let dog = new Dog(); // kreiramo novi objekt iz konstruktora
console.log(dog.bark()); // pozivamo svojstvo bark

//za naprednije: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
