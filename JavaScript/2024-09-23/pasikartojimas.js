function gautiIvestiIsIvestiesLaukelio() {
	// vardoIvestis kintamasis yra pasiekiamas,
	// kadangi fuhnkcija buvo iškviečiama vėliau nei apibrėžiamas kintamasis
	const vardas = vardoIvestis.value;
	const vaikuKiekis = vaikuKiekioIvestis.value; //"4"
	const vaikuKiekisSk = +vaikuKiekis; //4

	//return išeina iš funkcijos, nebevykdomos tolimesnės eilutės
	if (vaikuKiekis === "" || vaikuKiekisSk < 0) return;

	console.log(vardas, vaikuKiekisSk);
	console.log(typeof vardas, typeof vaikuKiekisSk);

	if (vaikuKiekisSk === 0) {
		console.log("Siunčiame jus į kitą parduotuvę");
	} else if (vaikuKiekisSk >= 1 && vaikuKiekisSk < 5) {
		// 1, 2, 3, 4
		console.log("Siunčiame į vaikų skyrių");
	} else {
		// 5, 6, 7, 8.......
		console.log("Siunčiame į vip kambarį");
	}
}

const vardoIvestis = document.querySelector("#vardo-ivestis");
const vaikuKiekioIvestis = document.querySelector("#vaiku-kiekis");
