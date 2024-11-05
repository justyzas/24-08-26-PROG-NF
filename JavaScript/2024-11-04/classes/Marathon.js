import { addRunnerToTable } from "../DOM/runnersTable.js";
import Runner from "./Runner.js";

export default class Marathon {
	#IkategorijosBegikai; //[]
	#IIkategorijosBegikai; //[]
	#IIIkategorijosBegikai; //[]
	#idCounter; //generator function

	constructor() {
		this.#IkategorijosBegikai = [];
		this.#IIkategorijosBegikai = [];
		this.#IIIkategorijosBegikai = [];
		this.#idCounter = this.idGenerator();
	}
	*idGenerator(i = 0) {
		while (true) {
			i += 1;
			yield i;
		}
	}
	// get begikuSkaicius() {
	// 	return this.#begikuSkaicius;
	// }
	get begikuSkaicius() {
		return (
			this.#IkategorijosBegikai.length +
			this.#IIkategorijosBegikai.length +
			this.#IIIkategorijosBegikai.length
		);
	}
	get IkategorijosBegikai() {
		return this.#IkategorijosBegikai;
	}
	get IIkategorijosBegikai() {
		return this.#IIkategorijosBegikai;
	}
	get IIIkategorijosBegikai() {
		return this.#IIIkategorijosBegikai;
	}

	#priskirtiBegikuiKategoriją(runner) {
		// I - begikai kuriu svoris <= 60
		// II - begikai kuriu svoris 60 < x <= 90
		// III - begikai kuriu svoris > 90

		if (runner.weight <= 60) {
			//I kategorija
			this.#IkategorijosBegikai.push(runner);
			return "I";
		} else if (runner.weight > 60 && runner.weight <= 90) {
			//II kategorija
			this.#IIkategorijosBegikai.push(runner);
			return "II";
		} else {
			//III kategorija >90
			this.#IIIkategorijosBegikai.push(runner);
			return "III";
		}
		// this.#begikuSkaicius++;
	}

	pridetiBegika(runner) {
		//instanceof patikrina iš kokios klasės yra sudarytas objektas
		if (!(runner instanceof Runner)) {
			console.error(
				"Pridedamas bėgikas privalo būti objektas, sudarytas iš klasės 'Runner'"
			);
			return;
		}
		if (runner.id !== null) {
			console.error("Pridedamas bėgikas jau yra užregistruotas maratone");
			return;
		}
		// Panaudojama generator funkcija, kad sugeneruoti ID;
		const runnerId = this.#idCounter.next().value; //4

		//Pridejimas prie vienos iš trijų kategorijų
		const runnerCategory = this.#priskirtiBegikuiKategoriją(runner); //II

		//Bėgikas užregistruojamas maratonui -> perduodami laukeliai id ir category
		runner.registerToMarathon(runnerId, runnerCategory);
		addRunnerToTable(runner);
	}
}