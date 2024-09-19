let zodis = "tekstas";

// console.log(typeof zodis); //string
// console.log(zodis); //tekstas

//textKintamasis.length gražina simbolių kiekį tekste
let tekstoIlgis = zodis.length; // 7

// textKintamasis.charAt(skaicius)
// duoda raidę iš viso teksto pagal indeksavimo poziciją
let tamTikrasSimbolisTekste1 = zodis.charAt(0); // 't'
let tamTikrasSimbolisTekste2 = zodis.at(100); // ''
let tamTikrasSimbolisTekste3 = zodis[1]; // 'e'

let vaisiai = `Obuolys, Bananas, Kivis`;
console.log(vaisiai);

//1. Tekstas nuo 9 simbolio iki 16 simbolio
let antrasVaisius = vaisiai.slice(9, 16); //Bananas
console.log(antrasVaisius);
//2. Tekstas nuo 9 simbolio
let antrasIrTreciasVaisius = vaisiai.slice(9); //Bananas, Kivis
console.log(antrasIrTreciasVaisius);
//3. 5 simboliai iš teksto pabaigos
let treciasVaisius = vaisiai.slice(-5);
console.log(treciasVaisius); //Kivis

//4. Nuo -14 simbolio iki -7
antrasVaisius = vaisiai.slice(-14, -7); //Bananas
console.log(antrasVaisius);

//5. Nuo 9 iki -7

antrasVaisius = vaisiai.slice(9, -7); //Bananas
console.log(antrasVaisius);

//Tekstas didžiosiomis/mažosiomis raidėmis
tekstas = "Eur";
let tekstasDidziosiomis = tekstas.toUpperCase(); //EUR
let tekstasMazosiomis = tekstas.toLowerCase(); //eur

console.log(tekstasDidziosiomis, tekstasMazosiomis); //EUR eur

//Originalaus teksto dydžio keitimas
tekstas.toUpperCase(); //Nekeičia originalaus teksto
console.log(tekstas); //Eur
tekstas = tekstas.toUpperCase(); //Keičia originalų tekstą
console.log(tekstas); //EUR

//Tekstas kuris turi nematomų simbolių gali būti išvalytas
//' \n\t          Tekstas ';

let nesvarusTekstas = "    \n \t Reikalingas tekstas   \n \t     ";
console.log("Rezultatas: " + nesvarusTekstas);
console.log("Rezultatas: " + nesvarusTekstas.trim());
console.log("Rezultatas: " + nesvarusTekstas.trimStart());
console.log("Rezultatas: " + nesvarusTekstas.trimEnd());

// To paties teksto pakartojimas daug kartų
let meilesLaiskas = "Aš tave myliu!\n";
meilesLaiskas = meilesLaiskas.repeat(100);
console.log(meilesLaiskas);

// Kai reikia pakeisti tam tikrą teksto dalį:
let vardas = "Antanas";
let html = `<div><b>{Vardas}</b><p>{Vardas}</p></div>`;
let rezultatas = html.replace("{Vardas}", vardas);
console.log(rezultatas);
rezultatas = html.replaceAll("{Vardas}", vardas);
console.log(rezultatas);

// Praktinis panaudojimas:
// fetch("/template.txt")
// 	.then((text) => text.text())
// 	.then((text) => {
// 		//text //<div>{Vardas}</div>
// 		let vardas = "Saulius";
// 		console.log(
// 			text.repeat(10000).replaceAll("{Vardas}", vardas.toUpperCase())
// 		);
// 		document.write(
// 			text.repeat(10000).replaceAll("{Vardas}", vardas.toUpperCase())
// 		);
// 	});

//funkcijos apibrėžimas
function manoFunkcija() {
	let skaicius = 5;
	skaicius += 4;
	document.write(skaicius);
}
//funkcijos iškvietimas
// manoFunkcija();

function funkcijaSuParametrais(skaicius) {
	const rezultatas = skaicius + 10;
	const elementas = document.querySelector(".rezultatas"); // HTML elementas
	elementas.innerHTML += " " + rezultatas;
}

//Funkcija, kuri gauna reikšmę iš įvesties laukelio ir atlieka console.log()
function gautiIvesti() {
	// Gaunamas įvesties laukelis
	const ivestiesLaukelis = document.querySelector("#vardas");
	//Gaunama įvesties laukelio reikšmė
	const laukelioReiksme = ivestiesLaukelis.value;
	// Paspaudus mygtuką išsiūsti, ištriname įvesties laukelyje esantį turinį
	ivestiesLaukelis.value = "";

	/*
    //Teisingiau naudoti const nei let, kadangi įpareigoja naudotis 
    // teisingomis praktikomis, tačiau galima naudoti ir let

	const naujaLaukelioReiksme = laukelioReiksme.toUpperCase();
    */
	console.log(laukelioReiksme);
}

// Reikšmė apibrėžta funkcijos viduje -> funkcijos išorėje yra nepasiekiama!
console.log(laukelioReiksme); //ERROR
