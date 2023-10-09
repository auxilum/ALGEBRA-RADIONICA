var boxElement = document.querySelector(".box");

var animation = boxElement.animate(
  [{ transform: "translate(0)" }, { transform: "translate(40px, 30px)" }],
  2000
);
