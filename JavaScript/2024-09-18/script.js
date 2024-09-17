// + - * / %

let amzius = dabartiniaiMetai - gimimoMetai;

if (amzius < 0) console.warn("Klaida - amzius mazesnis nei 0");
if (typeof amzius !== "number") console.warn("Klaida - amzius yra ne skaicius");
if (typeof pinigai !== "number")
	console.warn("Klaida - pinigai yra ne skaicius");
//Jei boolean reikšmė skliausteliuose yra true
// if (amzius >= 18) {
// 	if (pinigai >= energetinioKaina) {
// 		console.log("Parduodamas energetinis gėrimas...");
// 	} else {
// 		console.log("Neparduodamas energetinis nes neužtenka pinigų");
// 	}
// } else {
// 	console.log("Subaramas vaikas ir siunčiamas į mokyklą");
// }

// BOOLEAN operatoriai:  == === != !== < > <= >= ()
// IR  -  &&,    ARBA   -  ||
//Kombinacija  ALT + 0128 = €
if (amzius >= 18 && pinigai >= energetinioKaina) {
	// console.log("Parduodamas energetinis....");
	document.write(
		`<b>Parduodamas energetinis ${amzius} amžiaus žmogui
         už ${energetinioKaina}€ kainą.</b>`
	);
	pinigai -= energetinioKaina;
	document.write(`<p>Dabartiniai pinigai: <b>${pinigai}€</b></p>`);
} else if (amzius < 18) {
	document.write("Subaramas vaikas ir siunčiamas į mokyklą");
} else {
	document.write("Neparduodamas energetinis nes neužtenka pinigų");
}
console.log("Pinigu kiekis: " + pinigai);
// amzius >= 18 && pinigai < energetinioKaina

/*
typeof operacija duoda skirtingus rezultatus:
typeof 4 = 'number'
typeof '4' = 'string'
typeof ('4'> 4) = 'boolean'
*/

// konstantos deklaracijos būdas:
// const variable = 7;
