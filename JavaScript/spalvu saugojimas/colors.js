//Sukuriamas spalvos kodas tekstine išraiška
function getRgb(colorObject = { red: 0, green: 255, blue: 255 }) {
	return `rgb(${colorObject.red},${colorObject.green},${colorObject.blue})`;
}

//Funkcija paleidžiama kai paspaudžiamas mygtukas
function chooseNewColor() {
	const rgbObject = parseRGBNumbers();
	//4. Gauti spalvos teksta
	const colorRgbText = getRgb(rgbObject); // "rgb(100,0,100)"
	atnaujintiKvadrata(colorRgbText);
	nustatytiNaujaSpalva(rgbObject);
}

//Funkcija kuri gauna spalvas iš inputų
function parseRGBNumbers() {
	// 1. Gaunu elementus
	const redElement = document.querySelector(`#red`),
		greenElement = document.querySelector(`#green`),
		blueElement = document.querySelector(`#blue`);
	// 2. Spalvos
	const red = +redElement.value,
		green = +greenElement.value,
		blue = +blueElement.value;
	//3. Spalvu objektas
	return {
		red: red,
		green,
		blue,
	};
}

//Funkcija kuri atnaujina HTML
function atnaujintiKvadrata(colorRgbText) {
	//5. Gauti kvadrato konteineri
	const kvadratoKonteineris = document.querySelector("#kvadrato-konteineris");
	//6. Dinamiškai sukurti kvadratą pagal parinktą spalvą
	const kvadratoTekstas = `
<div
            class="kvadratas"
            style="background-color: ${colorRgbText}"
        >
        ${colorRgbText}
        </div>`;
	// 7. Dinamiškai sukurtą kvadratą įdėti į kvadratoKonteineris
	kvadratoKonteineris.innerHTML = kvadratoTekstas;
}

// Gaunama paskutine spalva arba
//null reiksme jei tokia spalva dar niekada nebuvo išsaugota
function gautiPaskutineSpalva() {
	const gautaSpalva = localStorage.getItem("spalva");
	if (typeof gautaSpalva === "string") return JSON.parse(gautaSpalva);
	return null;
}

// Nustatoma nauja spalva localStorage,
//jei parametras yra nepateiktas, nustatome juoda
function nustatytiNaujaSpalva(spalva = { red: 0, green: 0, blue: 0 }) {
	const spalvaText = JSON.stringify(spalva);
	localStorage.setItem("spalva", spalvaText);
}

//Pradinė funkcija, kuri nustato programos pradinę būseną
function initialize() {
	let paskutineSpalva = gautiPaskutineSpalva();

	if (paskutineSpalva === null) {
		nustatytiNaujaSpalva();
		paskutineSpalva = { red: 0, green: 0, blue: 0 };
	}
	const colorText = getRgb(paskutineSpalva); //rgb(0,0,0)
	atnaujintiKvadrata(colorText);
}

initialize();
