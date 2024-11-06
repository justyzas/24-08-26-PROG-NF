import { addRunnerToTable } from "../DOM/runnersTable.js";

export default class Runner {
	#name;
	#secondName;
	#age;
	#weight;

	#id;
	#category;

	constructor(name, secondName, age, weight) {
		this.#name = name;
		this.#secondName = secondName;
		this.#age = age;
		this.#weight = weight;

		this.#id = null;
		this.#category = null;
	}

	registerToMarathon(id, category) {
		if (this.#id === null && this.#category === null) {
			this.#id = id;
			this.#category = category;
		} else {
			console.error("Bėgikas jau yra užregistruotas maratone.");
		}
	}

	unregisterFromMarathon() {
		// id = null, category="III"
		if (this.#id !== null || this.#category !== null) {
			this.#id = null;
			this.#category = null;
		} else {
			console.error("Bėgikas nėra užregistruotas maratone");
		}
	}

	get category() {
		return this.#category;
	}
	get id() {
		return this.#id;
	}
	get name() {
		return this.#name;
	}
	get secondName() {
		return this.#secondName;
	}
	get age() {
		return this.#age;
	}
	get weight() {
		return this.#weight;
	}
	get fullName() {
		return `${this.#name} ${this.#secondName}`;
	}
}
