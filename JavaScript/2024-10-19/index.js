// https://in3.dev/knygos/
const startTime = new Date().getTime(); // timestamp 1970-01-01 00:00 pagal UTC
console.log(`Pradžios laikas: ${startTime}`);
// fetch("https://in3.dev/knygos/")
// 	.then((resp) => resp.json())
// 	.then((data) => {
// 		const endTime = new Date().getTime();
// 		console.log(`Pabaigos laikas: ${endTime}`);
// 	});

async function ilgaiTrunkantiOperacija() {
	console.log("Asinchronines funkcijos startas");
	await new Promise((res, rej) => {
		setTimeout(() => {
			res();
			// rej();
		}, 1000);
	}); //operacija, trunkanti 1sek.
	console.log("Asinchronines funkcijos pabaiga");
}

ilgaiTrunkantiOperacija();

iskviestiApi();
async function iskviestiApi() {
	// fetch("https://in3.dev/knygos/")
	// .then((resp) => resp.json())
	// .then((data) => {
	// 	const endTime = new Date().getTime();
	// 	console.log(`Pabaigos laikas: ${endTime}`);
	// });
	const promise = await fetch("https://in3.dev/knygos/");
	const duomenys = await promise.json();
	// -------Atsakymas gautas--------
	const endTime = new Date().getTime();
	console.log(`Pabaigos laikas: ${endTime}`);
	console.log(duomenys);
}

console.log("veikia ir toliau...");
console.log("veikia ir toliau...");
console.log("veikia ir toliau...");
console.log("veikia ir toliau...");
console.log("veikia ir toliau...");
console.log("veikia ir toliau...");
console.log("veikia ir toliau...");
