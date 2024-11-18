// IO - Input/Output
import * as fs from "fs";
// 1. funkcija tam kad gauti failo turinį JSON formatu.
export async function readFromJson(path) {
	const resultEncoded = await fs.promises.readFile(path, "utf-8");
	const stringifiedJSON = resultEncoded.toString();
	return JSON.parse(stringifiedJSON);
}

// 2. funkcija tam kad perrašyti visą failo turinį JSON formatu.
export async function writeToFile(path, data) {
	try {
		await fs.promises.writeFile(path, JSON.stringify(data), "utf8");
		console.log("Failas perrasytas sekmingai");
	} catch (err) {
		console.log("irasant faila kilo klaida");
		console.error(err);
	}
}
