// LOCAL STORAGE
// Local storage gali saugoti tik tekstą!

let x;
initialize();

function padidintiSkaiciu() {
	x++;
	updateHtml();
	setSkaicius(x);
}

function pamazintiSkaiciu() {
	x--;
	updateHtml();
	setSkaicius(x);
}

function initialize() {
	const skaicius = getSkaicius(); //tekstas!!

	if (skaicius === null) {
		setSkaicius(0);
		x = 0;
	} else x = +skaicius;

	updateHtml();
}

function getSkaicius() {
	return localStorage.getItem("skaicius");
}

function setSkaicius(sk) {
	localStorage.setItem("skaicius", sk);
}

function updateHtml() {
	const skaiciausElementas = document.querySelector("#skaicius");
	skaiciausElementas.innerText = x;
}
