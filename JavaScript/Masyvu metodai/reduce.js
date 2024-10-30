const skaiciai = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
// accumulator = 10
const suma = skaiciai.reduce((accumulator, value) => accumulator + value);
console.log(suma); //10

const products = [
	{ name: "Staline lempa", price: 28.75 },
	{ name: "Krepšinio kamuolys", price: 10.7 },
	{ name: "Staltiesė", price: 32.0 },
	{ name: "Dekoratyvinis akmuo", price: 4 },
	{ name: "Metalui skirtos žirklės", price: 48.95 },
	{ name: "Lovos kampas", price: 98.75 },
];

const prekiuKrepselioSuma = products.reduce(
	(accumulator, product) => accumulator + product.price,
	0
);
console.log(prekiuKrepselioSuma);

const names = ["Ausra", "Dainius", "Tadas", "Zita"];

const namesSum = names.reduce(
	(accumulator, value) => `${accumulator} -> ${value}`
);
console.log(namesSum);
