// Vienos eilutės komentaras

/* 
Čia yra 
multi
line

komentaras

*/

// console.log("pranešimas");
// alert("Radiacijos pavojus")

// STRING  -  tekstinė informacija
// NUMBER  -  skaitinė informacija
// BOOLEAN -  loginė informacija

// Tekstinės reikšmės kintamasis:
let tekstas = `gali būti parašyta praktiškai bet kas`;
console.log(tekstas);
// Skaitinės reikšmės kintamasis
let skaicius = 22;
console.log(skaicius);
// Loginio tipo informacija (gali turėti tik true ir false)
let arDaugiau = 10 > 20;
console.log(arDaugiau);

let vardas = "Saulius Prusaitis";
let gimimoMetai = 1992;

let amzius = 2024 - gimimoMetai;

let pranesimas =
	"Mano vardas yra " +
	vardas +
	". Aš gimiau " +
	gimimoMetai +
	" metais. Man yra " +
	amzius +
	" metų.";

console.log(pranesimas);

// -------Antroji dalis

let kainaUzVnt = 4.99;
let kiekis = 20;
let pvm = 21;

let kainaBePvm = kainaUzVnt * kiekis;
// paima pirmuosius kelis skaičius po kablelio
// kainaBePvm = kainaBePvm.toFixed(2); //tekstas

// toPrecision suapvalina skaičių iki 4 sk. po kablelio
// kainaBePvm = kainaBePvm.toPrecision(4);

// sumos su pvm   =   kaina be pvm  +  pvm/100*kaina be pvm

let mokesciai = (kainaBePvm * pvm) / 100; //skaicius
let galutineSuma = kainaBePvm + mokesciai; //tekstas + skaicius

console.log(galutineSuma);
