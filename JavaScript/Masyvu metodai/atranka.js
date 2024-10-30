// every, some

// SOME metodas nustato kriteriju taikoma visiems elementams.
// Jei bent vienam masyvo elementui kriterijus atitinka,
// galiausias rezultatas buna true
const ugiai = [1.87, 2.1, 1.45, 1.95, 1.92];

const arYraAukstensiuNei2m = ugiai.some((ugis) => ugis > 2.0);
console.log(arYraAukstensiuNei2m); // false
//true/false

// Every metodas nustato kriteriju kuris yra taikomas visiems elementams.
// Jei bent vienas masyvo elementas neatitinka kriterijaus
// Galiausias rezultatas buna false

const ugiai2 = [2.01, 2.08, 2.15, 1.05, 2.02];
const arVisiAukstesniNei2m = ugiai2.every((ugis) => ugis > 2.0);
console.log(arVisiAukstesniNei2m);

//Dar vienas every panaudojimo atvejis
const parduodamosMarkes = [
	"audi",
	"mercedes",
	"bmw",
	"opel",
	"mazda",
	"toyota",
];
const markes = ["hyundai", "toyota"];

const arVisosMarkesYraPrieinamos = markes.every((marke) =>
	parduodamosMarkes.includes(marke)
);
console.log(arVisosMarkesYraPrieinamos); //false
