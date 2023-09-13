let cat = {};

let dog = {
  breed: "Golden retriever",
  bark: function () {
    return "Wuf Wuf";
  },
  "has toy": false,
};

console.log(dog["has toy"]);

dog.breed = "Pekinezer";
console.log(dog.breed);

let igracka = dog["has toy"];

cat.color = "grey";
cat.size = 30;
console.log(cat);

delete dog.bark;
console.log(dog);
