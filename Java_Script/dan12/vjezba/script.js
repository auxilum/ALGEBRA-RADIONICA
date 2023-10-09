anime({
  targets: ".div1 .div2 .div3",
  translateX: function (el) {
    return el.getAttribute("data-x");
  },
  translateY: function (el, i) {
    return 50 + -50 * i;
  },
  scale: function (el, i, l) {
    return l - i + 0.25;
  },
  rotate: function () {
    return anime.random(-360, 360);
  },
  borderRadius: function () {
    return ["50%", anime.random(10, 35) + "%"];
  },
  duration: function () {
    return anime.random(1200, 1800);
  },
  delay: function () {
    return anime.random(0, 400);
  },
  direction: "alternate",
  loop: true,
});

// anime({
//   targets: ".div1",
//   translateX: [100, 250], // from 100 to 250
//   delay: 500,
//   direction: "alternate",
//   loop: true,
// });
