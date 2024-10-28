async function getBooksFromApi() {
	//3s
	// https://in3.dev/knygos/
	const promise = await fetch("https://in3.dev/knygos/");
	const response = await promise.json(); //atsakymas
	return response;
}

async function getBookTypesFromApi() {
	//3s
	// https://in3.dev/knygos/types/
	const promise = await fetch("https://in3.dev/knygos/types/");
	const response = await promise.json(); //atsakymas
	return response;
}

async function getBooksAndBookTypesFromApi() {
	const atsakymai = await Promise.all([
		getBooksFromApi(),
		getBookTypesFromApi(),
	]);
	return { books: atsakymai[0], types: atsakymai[1] };
}
