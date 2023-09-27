frame();

function frame() {
  let containerWidth = document.getElementById("container").offsetWidth;
  let elem = document.getElementById("cube");
  let posX = 0;
  let posY = 0;

  let id11 = setInterval(frame1, 20);

  function frame1() {
    if (posX === containerWidth / 2) {
      console.log("dosli do kraja 11");
      clearInterval(id11);
      return;
    } else if (posX < containerWidth / 2) {
      posX++;
      elem.style.left = posX + "px";
    }
  }

  const id22 = setInterval(frame2, 20);

  function frame2() {
    if (posX === containerWidth) {
      console.log("dosli do kraja 22");
      clearInterval(id22);
      return;
    } else if (posX >= containerWidth / 2) {
      posX++;
      posY++;
      elem.style.left = posX + "px";
      elem.style.top = posY + "px";
    }
  }

  let id33;
  setTimeout(() => {
    id33 = setInterval(frame3, 20);
  }, 10100);

  function frame3() {
    if (posY === 0) {
      console.log("dosli do kraja 33");
      clearInterval(id33);
    } else {
      posX--;
      posY--;
      elem.style.left = posX + "px";
      elem.style.top = posY + "px";
    }
  }

  let id44;
  setTimeout(() => {
    id44 = setInterval(frame4, 20);
  }, 15100);

  function frame4() {
    if (posX === 0 && posY === 0) {
      console.log("dosli do kraja 44");
      clearInterval(id44);
      frame();
    }
    if (posX > 0) {
      posX--;
      elem.style.left = posX + "px";
    }
  }
}
