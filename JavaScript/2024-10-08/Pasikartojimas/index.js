const mas1 = new Array(10); //[empty,empty,empty,empty,empty,empty,empty,empty,]
const mas2 = ["Pirmas", "antras"];
const mas3 = {}; //Tuščias obj.
mas2.push("Trečias"); //Pridėjimas i gala
mas2.unshift("Nulinis"); //Pridėjimas i prieki

console.log(mas2);
//Paieška pagal reikšmę indekso
const indeksas = mas2.indexOf("antras");
//Reikšmės modifikavimas pagal indeksą ir senąją reikšmę
mas2[indeksas] = mas2[indeksas].replaceAll("a", "A");

//patikrinimas ar pateiktas parametras yra masyvas
console.log(Array.isArray(mas3));

// Reikia sukurti funkciją, kuri gali pridėti elementą į masyvo pradžią,
// tačiau jei masyvo ilgis pridėjus elementą tampa ilgesnis nei 3,
// reikia pašalinti paskutinį elementą masyve

// function shiftTo3Elements(newValue) {
// 	arr.unshift(newValue);
// 	if (arr.length > 3) arr.pop();
// }

const shiftTo3Elements = (newValue) => {
	arr.unshift(newValue);
	if (arr.length > 3) arr.pop();
};
const arr = [];

shiftTo3Elements("a");
shiftTo3Elements("b");
shiftTo3Elements("c");
shiftTo3Elements("d");
shiftTo3Elements("e");
shiftTo3Elements("f");
shiftTo3Elements("g");
shiftTo3Elements("h");
shiftTo3Elements("i");
console.log(arr);
