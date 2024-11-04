export default class Runner {
	#name;
	#secondName;
	#age;
	#weight;

	constructor(name, secondName, age, weight) {
		this.#name = name;
		this.#secondName = secondName;
		this.#age = age;
		this.#weight = weight;
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
