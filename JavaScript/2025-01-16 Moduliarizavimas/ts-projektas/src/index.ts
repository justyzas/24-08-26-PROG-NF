import { countArea } from "ts-modulis";
import { generateReport } from "excel-table-template1";

console.log(countArea({ type: "square", x: 7 }));
generateReport(
	[
		{ preke: "Dviratis", kaina: 150.21, kiekis: 1, bendraSuma: 150.21 },
		{ preke: "Agrastų kibirėlis", kaina: 15, kiekis: 3, bendraSuma: 45 },
		{ preke: "Pienas", kaina: 2, kiekis: 10, bendraSuma: 20 },
	],
	{
		worksheetName: "ATASKAITA-1",
		title: "Prekių pardavimo ataskaita",
		titleFont: { bold: true, color: { argb: "99fc2bf9" } },
	},
	[
		{ header: "Prekės Pavadinimas", key: "preke" },
		{ header: "Kaina (Vieneto)", key: "kaina" },
		{ header: "Parduotų kiekis", key: "kiekis" },
		{ header: "Galutinė suma", key: "bendraSuma" },
	]
);
