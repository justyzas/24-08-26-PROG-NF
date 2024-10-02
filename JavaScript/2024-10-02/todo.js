// Prideti uzduoti, istrinti uzduoti,
// atlikta uzduotis, grazinti uzduoti
// Gauti dabartine data tekstu

// UZDUOTIS
/*
{
    title: "pavadinimas",
    date: "2024-10-02",
    statusas: "active"|"finished"
}
*/

function gautiDabartineDataTekstu() {
	const dabartineData = new Date();
	const metai = dabartineData.getFullYear(), //2024
		menuo = dabartineData.getMonth() + 1, //10
		diena = dabartineData.getDate(); //2
	// "2024-10-02"
	return `${metai}-${`${menuo}`.padStart(2, "0")}-${`${diena}`.padStart(
		2,
		"0"
	)}`;
}

console.log(gautiDabartineDataTekstu());
