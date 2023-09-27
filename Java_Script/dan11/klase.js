class Dog {
  // klase se mogu prosirivati i nasljedivati
  constructor() {}
}

class Golden extends Dog {
  // extends nasljeduje/prosiruje sa svojstvima klase Dog
  constructor(breed) {
    super(); // pri konstrukciji klase golden se poziva konstruktor klase Dog koje nasljedujemo i onda kasnije ide ostalo
    this.breed = breed;
  }
}
