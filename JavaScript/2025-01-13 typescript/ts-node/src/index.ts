import { apverstiTeksta, gautiSaliesPavadinima } from "./functions.js";

// 1. Aprašyti kintamuosius su tipais:
const tekstas: string = "Lietuva";

// Neaprašius tipų, tačiau priskyrus reikšmę, TypeScript bando tipą sugaudyti automatiškai
const apverstas = apverstiTeksta(tekstas);

// Masyvų aprašymas
const saliuMasyvas: Salis[] = ["LT", "PL"];

const saliesPavadinimas = gautiSaliesPavadinima(saliuMasyvas[1]);

console.log(saliesPavadinimas);

const salis1: SaliesObj = {
	id: 1,
	pilnasPavadinimas: "Lietuva",
	printMyself() {
		console.log(
			`My id is ${this.id}, my name is ${this.pilnasPavadinimas}, my shorter name is ${this.trumpinys}`
		);
	},
};

const salis2: SaliesObj = {
	id: 2,
	pilnasPavadinimas: "Lenkija",
	trumpinys: "PL",
	printMyself() {
		console.log(
			`My id is ${this.id}, my name is ${this.pilnasPavadinimas}, my shorter name is ${this.trumpinys}`
		);
	},
};
const salis3: SaliesObj = {
	id: 3,
	pilnasPavadinimas: "Latvija",
	trumpinys: "LV",
	printMyself() {
		console.log(
			`My id is ${this.id}, my name is ${this.pilnasPavadinimas}, my shorter name is ${this.trumpinys}`
		);
	},
};
const salis4: SaliesObj = {
	id: 4,
	pilnasPavadinimas: "Vokietija",
	trumpinys: "DE",
	printMyself() {
		console.log(
			`My id is ${this.id}, my name is ${this.pilnasPavadinimas}, my shorter name is ${this.trumpinys}`
		);
	},
};

salis1.printMyself();
