import Marathon from "./classes/Marathon.js";
import Runner from "./classes/Runner.js";

const runner1 = new Runner("Algirdas", "Laiškauskas", 26, 70);
const runner2 = new Runner("Saulius", "Ribakas", 36, 91);
const marathon = new Marathon();

marathon.pridetiBegika(runner1);
marathon.pridetiBegika(runner2);
// marathon.isregistruotiBegika(runner1);
// marathon.isregistruotiBegika(runner2);

const form = document.querySelector(`form`);
// Submit event listener
form.addEventListener("submit", (event) => {
	// PreventDefault metodas užtikrina kad naršyklė nesielgtų pagal įprastą pagal nutylėjimą elgesį
	event.preventDefault();

	//formData kintamasis saugo formos duomenis, kai forma yra išsiunčiama
	const formData = new FormData(form);

	// formData.get - metodas kuris gauna iš formos laukelio pagal name atributą reikšmę
	// console.log(formData.get("dalyvisName"));

	const name = formData.get("dalyvisName");
	const secondName = formData.get("dalyvisSecondName");
	const weight = +formData.get("dalyvisWeight");
	const age = +formData.get("dalyvisAge");

	const newRunner = new Runner(name, secondName, age, weight);
	marathon.pridetiBegika(newRunner);

	form.reset();
});

function clickHandler() {
	console.log("Ivyko paspaudimas");
}
