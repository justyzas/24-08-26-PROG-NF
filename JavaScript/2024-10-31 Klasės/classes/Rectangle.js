// Reikia sukurti klasę Rectangle (Stačiakampis).
// Klasės laukeliai: Plotis, Aukstis, Plotas, Perimetras

// Keičiami laukeliai: Plotis, Aukštis
// Keičiant plotį arba aukštį, turi keistis ir plotas bei perimetras

// Ploto formulė:        S = Plotis * Aukstis;
// Perimetro formulė:    P = Plotis * 2 + Aukstis * 2;

export default class Rectangle {
	#width;
	#height;
	#area;
	#perimeter;

	constructor(width, height) {
		this.#width = width;
		this.#height = height;

		this.#countAreaAndPerimeter();
	}

	#countAreaAndPerimeter() {
		this.#area = this.#width * this.#height;
		this.#perimeter = (this.#width + this.#height) * 2;
	}

	get width() {
		return this.#width;
	}
	get height() {
		return this.#height;
	}
	get area() {
		return this.#area;
	}
	get perimeter() {
		return this.#perimeter;
	}
	set width(newWidth) {
		this.#width = newWidth;
		this.#countAreaAndPerimeter();
	}
	set height(newHeight) {
		this.#height = newHeight;
		this.#countAreaAndPerimeter();
	}
}
