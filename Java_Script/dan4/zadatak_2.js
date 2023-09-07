let x = 3;

/* varijanta 1
while (x < 20) {
  if (x % 9 !== 0) {
    console.log(x);
  }
  x++;
} */

//continue preskace daljnje izvodenje koda i pokrece sljedecu iteraciju
//break; prekida izvodenje petlje WHILE
while (x < 20) {
  x++;
  if (x % 9 === 0) {
    continue;
  }
  console.log(x);
}

/* for (let i = 3; i < 20; i++) {
  if (i % 9 !== 0) {
    console.log(i);
  }
} */
