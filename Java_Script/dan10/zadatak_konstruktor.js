function Dog(name) {
  this.name = name || "Rex";
  this.bark = function () {
    return "Wuf Wuf";
  };
  this.myNameIs = function () {
    return `Hi, my name is ${this.name}`;
  };
}

// 1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex".

// 2. Kreirajte objekt iz Dog funkcije.

// 3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispisite rezultat.

let dog1 = new Dog("Pero");
console.log(dog1.name);
console.log(dog1.bark());
console.log(dog1.myNameIs());

let dog2 = new Dog();
console.log(dog2.name);

Dog.prototype.getName = function () {
  return this.name;
};

console.log(dog1.getName());
