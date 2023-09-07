let count = 15;

//ukoliko uvijet nije zadovoljen "while" se ne izvrsava ni jednom
while (count < 10) {
  console.log(count);
  count++;
}

//do while se izvrsi makar jednom
do {
  console.log(count);
  count++;
} while (count < 10);
