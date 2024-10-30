// ------ String sort
const names = ["Zelda", "Pokis", "Randominis", "Aurimas", "Saulius"];

names.sort();
// iprasto sort rezultatai
console.log(names);
names.reverse();
// atvirkštinio sort rezultatai
console.log(names);

// -------Number sort
//Bubble sort
const numbers = [2, 7, 4, 6, 5, 8, 11, 9, 1, 3, 10];
numbers.sort((a, b) => a - b); //teigiamas sk / neigiamas sk. / 0
console.log(numbers);
numbers.reverse();
console.log(numbers);

//------Obj sort
const zivile = { name: "Zivile", height: 1.69 };

const people = [
	{ ...zivile },
	{ name: "Aurimas", height: 1.78 },
	{ name: "Agne", height: 1.79 },
	{ name: "Edvardas", height: 1.69 },
	{ name: "Tadas", height: 1.87 },
	{ name: "Deimante", height: 1.72 },
];
people.sort((a, b) => a.height - b.height);
console.log([...people]); //A-Z
people.reverse();
console.log([...people]); //Z-A

// Rikiavimas objekto pagal string reiksmes
people.sort((a, b) => a.name.localeCompare(b.name));
console.log([...people]);
people.reverse();
console.log([...people]);
