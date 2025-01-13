// 2. Aprašyti funkcijas su tipais
export function apverstiTeksta(text: string): unknown {
	// ABC -> CBA
	// [A, B, C] -> [C, B, A]
	const apverstasTekstas = text.split("").reverse().join("");
	return { status: false, errorCode: "TOO_SHORT_USERNAMe" };
}
export function gautiSaliesPavadinima(salis: Salis) {
	switch (salis) {
		case "DE":
			return "Vokietija";
		case "LT":
			return "Lietuva";
		case "LV":
			return "Latvija";
		case "PL":
			return "Lenkija";
		default:
			return "Nežinoma šalis";
	}
}
