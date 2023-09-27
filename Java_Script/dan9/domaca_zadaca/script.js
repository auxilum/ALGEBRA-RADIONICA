document.addEventListener("keydown", logKey);
document.addEventListener("keyup", logKey1);

function logKey(e) {
  if (`${e.code}` === "Digit1") {
    let div = document.getElementById("audio1");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the righ ->");
    if (document.getElementById("sequence1").currentTime > 0) {
      document.getElementById("sequence1").pause();
      document.getElementById("sequence1").currentTime = 0;
    } else if (document.getElementById("sequence1").play() === false) {
      document.getElementById("sequence1").currentTime = 0;
      document.getElementById("sequence1").play();
    }
  }

  if (`${e.code}` === "Digit2") {
    let div = document.getElementById("audio2");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the righ ->");
    if (document.getElementById("sequence2").currentTime > 0) {
      document.getElementById("sequence2").pause();
      document.getElementById("sequence2").currentTime = 0;
    } else if (document.getElementById("sequence2").play() === false) {
      document.getElementById("sequence2").currentTime = 0;
      document.getElementById("sequence2").play();
    }
  }
  if (`${e.code}` === "Digit3") {
    let div = document.getElementById("audio3");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the righ ->");
    if (document.getElementById("sequence3").currentTime > 0) {
      document.getElementById("sequence3").pause();
      document.getElementById("sequence3").currentTime = 0;
    } else if (document.getElementById("sequence3").play() === false) {
      document.getElementById("sequence3").currentTime = 0;
      document.getElementById("sequence3").play();
    }
  }

  if (`${e.code}` === "Digit4") {
    let div = document.getElementById("audio4");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the righ ->");
    if (document.getElementById("sequence4").currentTime > 0) {
      document.getElementById("sequence4").pause();
      document.getElementById("sequence4").currentTime = 0;
    } else if (document.getElementById("sequence4").play() === false) {
      document.getElementById("sequence4").currentTime = 0;
      document.getElementById("sequence4").play();
    }
  }

  if (`${e.code}` === "Digit5") {
    let div = document.getElementById("audio5");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the righ ->");
    if (document.getElementById("sequence5").currentTime > 0) {
      document.getElementById("sequence5").pause();
      document.getElementById("sequence5").currentTime = 0;
    } else if (document.getElementById("sequence5").play() === false) {
      document.getElementById("sequence5").currentTime = 0;
      document.getElementById("sequence5").play();
    }
  }

  if (`${e.code}` === "Digit6") {
    let div = document.getElementById("audio6");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the righ ->");
    if (document.getElementById("sequence6").currentTime > 0) {
      document.getElementById("sequence6").pause();
      document.getElementById("sequence6").currentTime = 0;
    } else if (document.getElementById("sequence6").play() === false) {
      document.getElementById("sequence6").currentTime = 0;
      document.getElementById("sequence6").play();
    }
  }

  if (`${e.code}` === "Digit7") {
    let div = document.getElementById("audio7");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the righ ->");
    if (document.getElementById("sequence7").currentTime > 0) {
      document.getElementById("sequence7").pause();
      document.getElementById("sequence7").currentTime = 0;
    } else if (document.getElementById("sequence7").play() === false) {
      document.getElementById("sequence7").currentTime = 0;
      document.getElementById("sequence7").play();
    }
  }

  if (`${e.code}` === "Digit8") {
    let div = document.getElementById("audio8");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the righ ->");
    if (document.getElementById("sequence8").currentTime > 0) {
      document.getElementById("sequence8").pause();
      document.getElementById("sequence8").currentTime = 0;
    } else if (document.getElementById("sequence8").play() === false) {
      document.getElementById("sequence8").currentTime = 0;
      document.getElementById("sequence8").play();
    }
  }

  if (`${e.code}` === "Digit9") {
    let div = document.getElementById("audio9");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the righ ->");
    if (document.getElementById("sequence9").currentTime > 0) {
      document.getElementById("sequence9").pause();
      document.getElementById("sequence9").currentTime = 0;
    } else if (document.getElementById("sequence9").play() === false) {
      document.getElementById("sequence9").currentTime = 0;
      document.getElementById("sequence9").play();
    }
  }
  if (`${e.code}` === "Numpad1") {
    let div = document.getElementById("audio10");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the left <-");
    document.getElementById("sequence10").currentTime = 0;
    document.getElementById("sequence10").play();
  }
  if (`${e.code}` === "Numpad0") {
    let div = document.getElementById("audio11");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the left <-");
    document.getElementById("sequence11").currentTime = 0;
    document.getElementById("sequence11").play();
  }

  if (`${e.code}` === "Numpad2") {
    let div = document.getElementById("audio12");
    if (div.className === "ledOFF") {
      div.className = "ledON";
    } else {
      div.className = "ledOFF";
    }
    // alert("You want to go to the left <-");
    document.getElementById("sequence12").currentTime = 0;
    document.getElementById("sequence12").play();
  }
}

function logKey1(e) {
  if (`${e.code}` === "Numpad1") {
    let div = document.getElementById("audio10");
    if (div.className === "ledON") {
      div.className = "ledOFF";
    }
  }
  if (`${e.code}` === "Numpad0") {
    let div = document.getElementById("audio11");
    if (div.className === "ledON") {
      div.className = "ledOFF";
    }
  }
  if (`${e.code}` === "Numpad2") {
    let div = document.getElementById("audio12");
    if (div.className === "ledON") {
      div.className = "ledOFF";
    }
  }
}

// za baseve i volale
// if (`${e.code}` == "Digit1") {
//   // alert("You want to go to the left <-");
//   document.getElementById("audioo2").currentTime = 0;
//   document.getElementById("audioo2").play();
