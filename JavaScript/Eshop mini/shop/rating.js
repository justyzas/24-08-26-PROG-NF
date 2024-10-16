const allRatings = document.querySelectorAll(".rating");
let selectedProductIndex;
const starElements = [];

function starEnterHandler(starE) {
	const starIndex = starE.target.attributes["star-index"].value;
	for (let i = 0; i < starIndex; i++) {
		starElements[i].style.color = "yellow";
	}
	console.log(starIndex);
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
		starElements.push(star);
	});
}

function ratingHoverLeaveHandler() {
	starElements.forEach((star, index) => {
		star.removeEventListener("mouseenter", starEnterHandler);
	});
	starElements.length = 0;
	selectedProductIndex = undefined;
}

for (const rating of allRatings) {
	rating.addEventListener("mouseenter", ratingHoverHandler);
	rating.addEventListener("mouseleave", ratingHoverLeaveHandler);
}

// addEventListener("mouseenter"); //stebi kada pelyte uzeina ant elemento
