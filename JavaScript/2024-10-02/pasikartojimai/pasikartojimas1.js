const manoInputElementas = document.querySelector("input");
manoInputElementas.onchange = darytiDarba;
function darytiDarba() {
	const manoHtmlElementas = document.querySelector("i");

	let skaicius = Number(manoInputElementas.value); //0
	// kintamasis: skaicius
	// :) >200
	// :| =200
	// :( <200

	if (skaicius > 200) manoHtmlElementas.innerText = ":)";
	else if (skaicius == "200") manoHtmlElementas.innerText = ":|";
	else manoHtmlElementas.innerText = ":(";
}

let uzdarbis = 12100;
function mokestis(proc, algaMetine) {
	return (algaMetine * proc) / 100; // paskaiciuota mokesciu suma
}
function paskaiciuotiMokescius() {
	if (uzdarbis > 15000) return mokestis(15, uzdarbis);
	else if (uzdarbis > 10000) return mokestis(12, uzdarbis);
	else return mokestis(10, uzdarbis);
}
console.log(paskaiciuotiMokescius());
