// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  value1 && value2 ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  // seu código aqui
  return phrase.split(" ");
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  return [[...array].pop(), [...array].shift()];
}

// Desafio 5
function footballPoints(win, tie) {
  // seu código aqui
  return win * 3 + tie;
}

// Desafio 6
function highestCount(numberArray) {
  // seu código aqui
  const sortedArray = [...numberArray].sort((a, b) => b - a);

  return sortedArray.filter((item) => item === sortedArray[0]).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  const distanceBetweenCat1AndMouse = mouse - cat1;
  const distanceBetweenCat2AndMouse = mouse - cat2;

  if (
    Math.abs(distanceBetweenCat1AndMouse) >
    Math.abs(distanceBetweenCat2AndMouse)
  )
    return "cat2";
  if (
    Math.abs(distanceBetweenCat2AndMouse) >
    Math.abs(distanceBetweenCat1AndMouse)
  )
    return "cat1";
  if (
    Math.abs(distanceBetweenCat1AndMouse) ===
    Math.abs(distanceBetweenCat2AndMouse)
  )
    return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
};
