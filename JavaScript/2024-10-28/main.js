// Reikia importuoti funkciją, kuri gali pasakyti, kuri savaitės diena yra,
// pagal paduotą skaičiaus parametrą

// import x, * as funkcijos from "./modules/date.js";
import x, {
	whichDayOfWeek,
	whichMonth,
	funkcijuRinkinys,
} from "./modules/date.js";
// import x, {whichDayOfWeek as savaitesDiena, whichMonth as menesioPavadinimas} from "./modules/date.js";
const { funkcija1, funkcija2, funkcija3 } = funkcijuRinkinys;

funkcija1();
funkcija2();
funkcija3();
console.log(whichDayOfWeek(4)); //Ketvirtadienis|Thursday
console.log(whichMonth(8)); //Rugpjūtis| August
console.log(whichMonth(4)); //Balandis | April
x();
