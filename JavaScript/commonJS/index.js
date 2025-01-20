// Modulio importavimas su CommonJS modulių sistema
const lib = require("./modulis");

console.log(lib.math.sudetis(4, 5));

async function main() {
	const { atimtis } = await import("./kitasModulis.mjs");
	console.log(atimtis(4, 5));
}
main();
