// function getX() {
//   return Math.random() >= 0.5;
// }

let getX = () => {
  let number = Math.random();
  console.log(number);
  return number >= 0.5 ? true : false;
};

console.log(getX());

var wait = new Promise((resolve, reject) => {
  const x = getX();
  x ? setTimeout(resolve, 1000) : setTimeout(reject, 1000);
  //   if (x) {
  //     return setTimeout(resolve, 1000);
  //   }
  //   return setTimeout(reject, 1000);
})
  .then(() => console.log("Yay!"))
  .catch(() => console.log("Oh no!"));
