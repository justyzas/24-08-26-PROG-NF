// Reikia importuoti funkciją, kuri gali pasakyti, kuri savaitės diena yra,
// pagal paduotą skaičiaus parametrą

import x, * as funkcijos from "./modules/date.js";
// import x, {whichDayOfWeek, whichMonth} from "./modules/date.js";
// import x, {whichDayOfWeek as savaitesDiena, whichMonth as menesioPavadinimas} from "./modules/date.js";

console.log(funkcijos.whichDayOfWeek(4)); //Ketvirtadienis|Thursday
console.log(funkcijos.whichMonth(8)); //Rugpjūtis| August
console.log(funkcijos.whichMonth(4)); //Balandis | April
x();
