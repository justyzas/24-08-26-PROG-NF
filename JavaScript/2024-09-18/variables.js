let reiksme = 5;
let kintamasis = reiksme;

// Prompt - daiktas, kuris paprašo įvesti kažką
let gimimoMetai = prompt("Įveskite savo gimimo metus");
gimimoMetai = Number(gimimoMetai);
console.log(typeof gimimoMetai);

//konstanta - niekada nesikeičia
const dabartiniaiMetai = 2024;
const pi = 3.14;
// const gimimoMetai = 1999;
// let - gali keistis bet kada
let pinigai = 1.5;
let energetinioKaina = 0.5;

pinigai = pinigai + 20; //21.5
// Assignment operacijų operatoriai: += -= *= /= %=
pinigai += 20; //41.5
pinigai /= 2; //20.75
pinigai *= 2; //41.5
pinigai -= 0.5; //41
// pinigai %= 2; //1
