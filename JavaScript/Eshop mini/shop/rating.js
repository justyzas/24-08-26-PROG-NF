const allRatings = document.querySelectorAll(".rating");
let selectedProductIndex;
const starElements = [];

function clearStarsMark() {
	starElements.forEach((star) => {
		star.classList.add("bi-star");
		star.classList.remove("bi-star-fill");
	});
}
function starEnterHandler(starE) {
	clearStarsMark();
	const starIndex = starE.target.attributes["star-index"].value;
	console.log(starIndex);
	for (let i = 0; i < starIndex; i++) {
		starElements[i].classList.remove("bi-star");
		starElements[i].classList.add("bi-star-fill");
	}
}

function starChooseHandler(starE) {
	const starElement = starE.target;
	const rating = starElement.attributes["star-index"].value;

	console.log(`Įvertinimas: ${rating}`);
	rateProduct(rating);
}

function ratingHoverHandler(event) {
	const eventTarget = event.target;
	const whichElement = eventTarget.attributes["product-index"].value;
	console.log(`Cia buvo pasirinktas reitingas ${whichElement} produkto`);
	selectedProductIndex = whichElement;
	const starsList = document.querySelectorAll(".rating:hover i");
	starsList.forEach((star, index) => {
		star.setAttribute("star-index", `${index + 1}`);
		star.addEventListener("mouseenter", starEnterHandler);
		star.addEventListener("click", starChooseHandler);
		starElements.push(star);
	});
}

function ratingHoverLeaveHandler() {
	clearStarsMark();
	starElements.forEach((star, index) => {
		star.removeEventListener("mouseenter", starEnterHandler);
	});
	starElements.length = 0;
	selectedProductIndex = undefined;
}

function rateProduct(rating) {
	produktai[selectedProductIndex].rateHistory.push(rating);
	produktai[selectedProductIndex].averageRating = countRatingAverage(
		produktai[selectedProductIndex].rateHistory
	);
	localStorage.setItem("produktai", JSON.stringify(produktai));
}
function countRatingAverage(allRatings) {
	const sum = sumAllRatings(allRatings);
	return sum / allRatings.length;
}
function sumAllRatings(allRatings) {
	let sum = 0;
	for (const rating in allRatings) sum += rating;
	return sum;
}
function defineRatingArrayIfDoesntExist() {
	if (doesRatingArrayExist()) produktai[selectedProductIndex].rateHistory = [];
}
function doesRatingArrayExist() {
	return !(
		produktai[selectedProductIndex]?.rateHistory !== undefined &&
		Array.isArray(produktai[selectedProductIndex]?.rateHistory)
	);
}
for (const rating of allRatings) {
	rating.addEventListener("mouseenter", ratingHoverHandler);
	rating.addEventListener("mouseleave", ratingHoverLeaveHandler);
}

// addEventListener("mouseenter"); //stebi kada pelyte uzeina ant elemento
