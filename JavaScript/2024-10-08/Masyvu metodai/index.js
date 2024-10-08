const masyvas = [1, 4, 2, -9, 1];
console.log(masyvas);
// .map - gali keisti kiekvieno masyvo elemento reikšmę pagal pateiktą funkciją
const modifikuotasMasyvas = masyvas.map((value, index) => index + 1);
console.log(modifikuotasMasyvas);

const skaiciukai = new Array(10000).fill(0).map((v, i) => i + 1);
console.log(skaiciukai);

const prekes = [
	{
		barkodas: "4061615651",
		pavadinimas: "Degtukai",
		kaina: 0.2,
		ivertinimai: [7, 9, 8, 4, 5],
	},
	{
		barkodas: "4061615652",
		pavadinimas: "Dantų šepetėlis",
		kaina: 1.5,
		ivertinimai: [7, 10, 8, 4, 2],
	},
	{
		barkodas: "4061615653",
		pavadinimas: "Kava",
		kaina: 4.99,
		ivertinimai: [7, 9, 8, 1, 6],
	},
	{
		barkodas: "4061615654",
		pavadinimas: "Vandens butelis",
		kaina: 0.89,
		ivertinimai: [7, 1, 2, 1, 5],
	},
	{
		barkodas: "4061615655",
		pavadinimas: "Šokoladas",
		kaina: 1.79,
		ivertinimai: [7, 9, 8, 4, 5],
	},
	{
		barkodas: "4061615656",
		pavadinimas: "Tualetinis popierius",
		kaina: 2.5,
		ivertinimai: [7, 9, 8, 4, 5],
	},
	{
		barkodas: "4061615657",
		pavadinimas: "Makaronai",
		kaina: 0.99,
		ivertinimai: [7, 9, 8, 4, 5],
	},
	{
		barkodas: "4061615658",
		pavadinimas: "Ryžiai",
		kaina: 1.2,
		ivertinimai: [7, 9, 8, 4, 5],
	},
	{
		barkodas: "4061615659",
		pavadinimas: "Kondicionierius",
		kaina: 3.5,
		ivertinimai: [7, 9, 8, 4, 5],
	},
	{
		barkodas: "4061615660",
		pavadinimas: "Šampūnas",
		kaina: 3.99,
		ivertinimai: [7, 9, 8, 4, 5],
	},
];

const pridetiPrekeiPapildomusLaukus = (v) => {
	let suma = 0;
	for (const ivertinimas of v.ivertinimai) {
		suma += ivertinimas;
	}
	const vidurkis = suma / v.ivertinimai.length;
	return {
		barkodas: v.barkodas,
		pavadinimas: v.pavadinimas,
		kaina: v.kaina,
		ivertinimai: v.ivertinimai,
		bendrasIvertinimas: vidurkis,
		pvmMokestis: +(v.kaina * 0.21).toFixed(2),
		identifikacinisKodas: `${v.barkodas}-${v.pavadinimas}`,
	};
};

//filter - filtruoja masyva pagal reiksme
const prekesSuPvm = prekes.map(pridetiPrekeiPapildomusLaukus).filter((v) => {
	return v.bendrasIvertinimas > 6.2; //false arba true
});

console.log(prekesSuPvm);

//find - randa masyvo objekta pagal objekto laukelio reiksme
console.log(
	prekesSuPvm.find((v) => {
		return v.pavadinimas === "Ryžiai";
	})
);

// const isfiltruotosPrekes = prekesSuPvm;

// console.log(isfiltruotosPrekes);
// function addToEach(arr, number, callback) {
// 	for (const indeksas in arr) {
// 		arr[indeksas] = callback(arr[indeksas], number);
// 	}
// 	return arr;
// }

// const modifikuotasMasyvas = addToEach(masyvas, 4, (a, b) => a + b);
