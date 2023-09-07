// Koristeći metode rada nad stringovima iz zadanog stringa:
//   1. Spremite duljinu stringa u varijablu.
//   2. Izdvojite riječ 'sit' u zasebnu varijablu.
//   3. Zamijenite riječ 'amet' sa riječi 'elit'.
//   4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
//   5. Konvertirajte sve riječi u orginalnom stringu u velika slova
//   6. Maknite počenu prazninu u stringu
//   7. Nađite slovo na poziciji 12

var text = " Lorem ipsum dolor sit amet";
//   1. Spremite duljinu stringa u varijablu.
let textLength = text.length;
console.log(textLength);

//   2. Izdvojite riječ 'sit' u zasebnu varijablu.
let separateSit = function (word) {
  let findSit = "";
  let newWord = word.split(" ");
  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] === "sit") {
      findSit = newWord[i];
    }
  }
  return findSit;
};

console.log(separateSit(text));

//   3. Zamijenite riječ 'amet' sa riječi 'elit'.
let newVar = function (word) {
  let newWord = word.split(" ");
  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] === "amet") {
      newWord[i] = "elit";
    }
  }
  return newWord.join(" ");
};

console.log(newVar(text));

//   4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
let newText = `${text}, consectetur adipiscing elit.`;
console.log(newText);

//   5. Konvertirajte sve riječi u orginalnom stringu u velika slova
console.log(text.toUpperCase());

//   6. Maknite počenu prazninu u stringu
console.log(text.trimStart());

//   7. Nađite slovo na poziciji 12
let position12 = function (word) {
  let split = word.split(" ");
  return split[12];
};

console.log(position12(text));
