// 1. Pratite kod u scripts.js. Koje su vrijednosti y i z varijabli na kraju programa?

// 2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju koja prima parametar "name". Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.

var x = "John Doe";

function vratiNesto(name) {
  var x = name;
  function f() {
    return x;
  }
  return f;
}

var y = vratiNesto("Jane Doe");
var z = vratiNesto();

console.log(y());
//console.log(z());

let ime = "Pero";

(function (ime) {
  var x = ime;
  console.log(x);
  function f() {
    return x;
  }
  return f;
})(ime);
