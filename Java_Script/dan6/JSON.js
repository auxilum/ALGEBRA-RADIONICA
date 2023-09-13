let dog = {
  breed: "Golden retriever",
  bark: function () {
    return "Wuf Wuf";
  },
  "has toy": false,
};

let ispisObjekta = JSON.stringify(dog);

console.log(ispisObjekta);

console.log(dog.propertyIsEnumerable([breed]));
