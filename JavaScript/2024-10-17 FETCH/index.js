// let sum = 0;
// // 1 + 3 * 10000 = 30001 operacijų

// const startDate = new Date().getTime(); // kada ciklas prasidėjo
// for (let i = 0; i < 1000000000; i++) {
// 	sum += i;
// }
// //
// const endDate = new Date().getTime(); // kada ciklas pasibaigė
// const timeInMiliseconds = endDate - startDate;
// console.log(timeInMiliseconds);
const selectElement = document.querySelector("#breeds");

//--------Visu veisliu gavimas bei optionu pildymas-
function getAllBreeds(allBreedsWithArrays) {
	const baseBreeds = Object.keys(allBreedsWithArrays);
	const allBreeds = [];
	for (const breed of baseBreeds) {
		//
		if (allBreedsWithArrays[breed].length === 0) {
			allBreeds.push(breed);
		} else {
			for (const subBreed of allBreedsWithArrays[breed]) {
				const fullBreedName = `${breed} ${subBreed}`;
				allBreeds.push(fullBreedName);
			}
		}
	}
	return allBreeds;
}
function fillSelectWithOptions(allBreeds) {
	let html = "";
	for (const breed of allBreeds) {
		html += `<option value="${breed}">${breed}</option>`;
	}

	selectElement.innerHTML = html;
}
//-Select reiksmes gavimas ir image patalpinimas html'e---
function getPhotoOfSelectedDog() {
	const selectedBreed = selectElement.value;
	const dynamicSegment = selectedBreed.split(" ").join("/");
	// KAI YRA VIENAS PAVADINIMAS VEISLĖJE:
	// https://dog.ceo/api/breed/akita/images/random
	//          /akita/images/random
	// KAI YRA DU PAVADINIMAI VEISLĖJE:
	// https://dog.ceo/api/breed/australian/kelpie/images/random
	//          /australian/kelpie/images/random
	fetch(`https://dog.ceo/api/breed/${dynamicSegment}/images/random`)
		.then((headerRawData) => headerRawData.json())
		.then(doJobAfterServerRespondsWithImage);
}
//--funkcijos kurios iškviečiamos fetcho-----
function doJobAfterServerResponds(data) {
	const allBreeds = getAllBreeds(data.message);
	fillSelectWithOptions(allBreeds);
}
function doJobAfterServerRespondsWithImage(data) {
	const imgElement = document.querySelector("#dynamic-image");
	imgElement.src = data.message;
}
//--------------------------------------
fetch("https://dog.ceo/api/breeds/list/all")
	.then((headerRawData) => headerRawData.json()) //kai srv. sutinka duoti duomenis
	.then(doJobAfterServerResponds); //kai srv gražina atsakymą - duomenis
//--------------------------------------
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
