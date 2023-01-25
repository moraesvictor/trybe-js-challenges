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
function fizzBuzz(numberArray) {
  // seu código aqui
  const array = [...numberArray];

  const mappingNewArray = array.map((number) => {
    if (number % 3 === 0 && number % 5 !== 0) return "fizz";
    if (number % 5 === 0 && number % 3 !== 0) return "buzz";
    if (number % 3 === 0 && number % 5 === 0) return "fizzBuzz";
    if (number % 3 !== 0 && number % 5 !== 0) return "bug";
  });

  return mappingNewArray;
}

// Desafio 9
/**
 *
 * @param {*} A : string
 */
function encode(A) {
  // seu código aqui
  const fromStringToArray = [...A];

  const replaceLetterToNumber = fromStringToArray.map((letter) => {
    if (letter.toLowerCase() === "a") return 1;
    if (letter.toLowerCase() === "e") return 2;
    if (letter.toLowerCase() === "i") return 3;
    if (letter.toLowerCase() === "o") return 4;
    if (letter.toLowerCase() === "u") return 5;

    return letter;
  });

  return replaceLetterToNumber.toString().replaceAll(",", "");
}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList(techArray, name) {
  // seu código aqui
  return [...techArray].map((tech) => ({ tech, name }));
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
