const box = document.querySelector(".box");
const buttons = document.querySelectorAll("button");
console.log([box]);

buttons[0].onclick = changeBoxText;
buttons[1].onclick = changeBoxBackground;
buttons[2].onclick = setBoxBigger;
buttons[3].onclick = setBoxSmaller;
buttons[4].addEventListener("click", () => {
	box.remove();
});

function setBoxBigger() {
	box.style.height = box.clientHeight + 20 + "px";
	box.style.width = box.clientWidth + 20 + "px";
}
function setBoxSmaller() {
	box.style.height = box.clientHeight - 20 + "px";
	box.style.width = box.clientWidth - 20 + "px";
}

function changeBoxBackground() {
	const newBackground = "blue";
	box.style.background = newBackground;
}

function changeBoxText() {
	const newText = "Naujas dezutes tekstas";
	box.innerHTML = newText;
}
