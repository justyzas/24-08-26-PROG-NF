// Find yra masyvo metodas, skirtas tam kad iš masyvo būtų atrandamas vienas elementas

// STRING masyvas
const augalai = [
	"Pomidoras",
	"Agurkas",
	"PaprIka",
	"Moliūgas",
	"Avokadas",
	"Morka",
];

// const arMoliugasEgzistuoja = augalai.includes("Moliūgas"); //TRUE/FALSE

// const moliugoIndeksasKlaidingas = augalai.indexOf("Moliugas"); //-1
// const moliugoIndeksas = augalai.indexOf("Moliūgas"); //3
// const morkosIndeksas = augalai.indexOf("Morka"); //5

// // Norint pakeisti morką - nežinant koks yra morkos indeksas
// augalai[morkosIndeksas] = "SuperMorka";
// console.log(augalai);

// Ieškome žodžio kuris startuoja su 'Mol'
const atrastasMol = augalai.find(
	(augalas) => augalas.slice(0, 3).toLowerCase() === "mol"
);
console.log(atrastasMol); //Moliūgas

// Ieškome žodžio kuris pasibaigia su 'ika';
const ieskomasAugalas = augalai.find(
	(augalas) => augalas.slice(-3).toLowerCase() === "ika"
);
console.log(ieskomasAugalas); //Paprika
const knyguTipai = [
	{
		id: 1,
		title: "Grožinė literatūra",
	},
	{
		id: 2,
		title: "Populiarioji psichologija",
	},
	{
		id: 3,
		title: "Literatūra vaikams ir jaunimui",
	},
	{
		id: 4,
		title: "Pomėgiai",
	},
	{
		id: 5,
		title: "Šeima, sveikata",
	},
	{
		id: 6,
		title: "Literatūra užsienio kalbomis",
	},
	{
		id: 7,
		title: "Dalykinė literatūra",
	},
	{
		id: 8,
		title: "Vadovėliai, pratybos ir knygos mokslams",
	},
];
// Ieškosime knygos kurios ID yra 7,
// pakeisti tos knygos reikšmę masyve į
// "Dalykinė grožinė literatūra"

const atrastasKnygosTipas = knyguTipai.findIndex(
	(knygosTipas) => knygosTipas.id === 7
); //6
knyguTipai[atrastasKnygosTipas].title = "AAAA";
console.log(knyguTipai);

// .filter()
// Atrasti kelis įrašus masyve, atitinkančius nurodytą kriterijų
const knygosStartuojančiosNeSuLArbaG = knyguTipai.filter(
	(knygosTipas) =>
		!(
			knygosTipas.title[0].toLowerCase() === "l" ||
			knygosTipas.title[0].toLowerCase() === "g"
		)
);

const knygosSuLyginiaisId = knyguTipai.filter(
	(knygosTipas) => knygosTipas.id % 2 !== 0
);
console.log(knygosStartuojančiosNeSuLArbaG);
console.log(knygosSuLyginiaisId);
