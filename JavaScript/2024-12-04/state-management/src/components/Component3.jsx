// Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2.
// Jeigu props lygus 1 tekstas nudažomas mėlynai,
// o jeigu 2 - raudonai, bet koks kitas skaičius nudažomas juodai.

export default function Component3({ children, mode }) {
	// let color;
	// switch (mode) {
	// 	case 1:
	// 		color = "blue";
	// 		break;
	// 	case 2:
	// 		color = "red";
	// 		break;
	// 	default:
	// 		color = "black";
	// 		break;
	// }
	function decideColor() {
		if (mode === 1) return "blue";
		else if (mode === 2) return "red";
		else return "black";
	}
	return <div style={{ color: decideColor() }}>{children}</div>;
}
