/* for (let index = 0; index < 10; index++) {
  console.log(index);
}
 */
/* let varOne = 0;

for (i; i < 4; i++) {
  for (j = 0; j < 4; j++) {
    varOne++;
  }
}
console.log(varOne);
 */

var varOne = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    varOne++;
    console.log(`i=${i}  j=${j} varOne= ${varOne}`);
  }
}
console.log(varOne);
