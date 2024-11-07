// Pagal nutylejima NodeJS naudoja commonJS

// require - commonJS tipo javascript failams
// import  - module tipo javascript failams

// kito modulio modulio importavimas
// require("./kitasFailas");

// fs - file system -> failų sistema

import * as fs from "fs";
// console.log("LABA!");
// const fs = require("fs");

// console.log(fs);
// Failo perskaitymas
fs.readFile("failas.txt", (err, data) => {
	console.log(err);
	// Koduotė - UTF-8
	console.log(data.toString());
});

// Failo atnaujinimas/sukūrimas
fs.appendFile("naujas.js", "console.log('labas pasauli');", (error) => {
	if (error) throw new Error("Iskrito klaida atnaujinant faila");
	console.log("Failas sekmingai atnaujintas");
});

// Failo istrynimas
fs.unlink("failas.txt", (err) => {
	if (err) console.log("iskrito klaida");
	else console.log("Failas sekmingai istrintas");
});

// Failo perrašymas/sukūrimas
fs.writeFile("naujas.js", `console.log('nauja zinute');`, (err) => {
	if (err) console.log("iskrito klaida");
	else console.log("Failas sekmingai perrasytas");
});
