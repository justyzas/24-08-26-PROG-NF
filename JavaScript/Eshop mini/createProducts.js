function addProduct() {
	//1. susirenkame duomenis iš inputų
	const produktoElementas = document.querySelector("#produktas");
	const aprasymoElementas = document.querySelector("#aprasymas");
	const kainosElementas = document.querySelector("#kaina");
	const nuolaidosElementas = document.querySelector("#nuolaida");
	const likucioElementas = document.querySelector("#likutis");
	const brandoElementas = document.querySelector("#brand");
	const kategorijosElementas = document.querySelector("#category");

	const produktas = {
		title: produktoElementas.value,
		description: aprasymoElementas.value,
		price: +kainosElementas.value,
		discount: +nuolaidosElementas.value,
		stock: +likucioElementas.value,
		brand: brandoElementas.value,
		category: kategorijosElementas.value,
	};
	//2. duomenis pridedame į bendrą masyvą
	produktai.push(produktas);
	//3. duomenis pridedame į localStorage
	localStorage.setItem("produktai", JSON.stringify(produktai));
	//4. atnaujinti duomenis lentelėje
	updateHtmlTable();
}
