const boxElement = document.querySelector(".box");

function uzvedimas(event) {
	console.log(event);
	const element = event.target;
	element.style.backgroundColor = "blue";
}
function uzvedimoPabaiga(event) {
	console.log(event);
	const element = event.target;
	element.style.backgroundColor = "tomato";
}
boxElement.addEventListener("mouseenter", uzvedimas);
boxElement.addEventListener("mouseleave", uzvedimoPabaiga);
