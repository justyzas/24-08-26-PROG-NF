// localStorage.setItem(
// 	"ManoPrekiuKrepselis",
// 	`[{ "preke": "Šampūnas", "kiekis": 2, "kaina": 2.99 }, { "preke": "Šampūnas", "kiekis": 2, "kaina": 2.99 }, { "preke": "Šampūnas", "kiekis": 2, "kaina": 2.99 }]`
// );

function getInputValues() {
	const prekesElementas = document.querySelector("#preke");
	const kainosElementas = document.querySelector("#kaina");
	const kiekioElementas = document.querySelector("#kiekis");

	// inputams, textfieldams, bei selectams naudojamas property .value
	// gauna įvestyje esančią reikšmę

	const preke = prekesElementas.value;
	const kaina = +kainosElementas.value;
	const kiekis = +kiekioElementas.value;

	// Resetiname inputus
	prekesElementas.value = "";
	kainosElementas.value = "";
	kiekioElementas.value = "";

	// console.log(preke, kaina, kiekis);
	return { preke, kaina: kaina, kiekis: kiekis };
}

function saveProductToCart() {
	const uzsakymas = getInputValues();
	console.log(uzsakymas);
	// TERNARY operatorius
	//1. gauname jau turimą localStorage reikšmę
	const gautaReiksme = localStorage.getItem("ManoPrekiuKrepselis");
	// 2. konvertuoti gautą tekstą iš JSON į JS masyva
	const prekiuMasyvas = gautaReiksme === null ? [] : JSON.parse(gautaReiksme);
	// 3. pridėti naują reikšmę į masyvą.
	prekiuMasyvas.push(uzsakymas);
	// 4. konvertuoti modifikuotą masyvą atgal į JSON
	// 5. Išsaugoti localStorge

	localStorage.setItem("ManoPrekiuKrepselis", JSON.stringify(prekiuMasyvas));
}
