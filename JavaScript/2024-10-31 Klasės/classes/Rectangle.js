// Reikia sukurti klasę Rectangle (Stačiakampis).
// Jis tures: Plotis, Aukstis,      Plotas, Perimetras

//Ploto formulė:        S = Plotis * Aukstis;
//Perimetro formulė:    P = Plotis * 2 + Aukstis * 2;

//pabaigos laikas: 11:15

export default class Rectangle {
	#width;
	#height;
	#area;
	#perimeter; //5
	constructor(width, height) {
		//2
		this.#width = width;
		this.#height = height; //3

		this.#area = width * height;
		this.#perimeter = (width + height) * 2; //4
	}

	// GET/SET - Taikomi tik private laukeliams

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
		this.#area = newWidth * this.#height;
		this.#perimeter = (newWidth + this.#height) * 2;
	}
	set height(newHeight) {
		this.#height = newHeight;
		this.#area = newHeight * this.#width;
		this.#perimeter = (newHeight + this.#width) * 2;
	}
}
