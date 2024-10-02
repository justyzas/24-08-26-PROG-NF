const selectas = document.querySelector(
	`select[mano-kietas-atributas="salys"]`
);
selectas.onchange = parinktiSali;
function parinktiSali() {
	const salis = selectas.value;

	console.log(salis);
}
