console.log("komanda1");
kreipimasis(); //good
// kreipimasisAsinchroniskai(); //good
// kreipimasisIVienaApi(); //good
// kreipimasisIKelisApi(); //bad
console.log("komanda2");
console.log("komanda3");
console.log("komanda4");

function kreipimasis() {
	// Šios funkcijos fetch'ai neblokuoja vienas kito, bendra trukme - ~3sek.
	fetch("https://in3.dev/knygoss/") //404 not found
		.then((resp) => {
			console.log(resp);
			return resp.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			//kadangi nuoroda bloga - vykdys .catch'e esancius veiksmus
			console.log(err);
			alert("Iskrito klaida kreipiantis į serverį");
		});
	fetch("https://in3.dev/knygos/types/")
		.then((resp) => resp.json())
		.then((data) => {
			console.log(data);
		});
	console.log("pabaiga");
}

async function kreipimasisAsinchroniskai() {
	//geras pvz
	// Šios funkcijos fetch'ai neblokuoja vienas kito, bendra trukme - ~3sek.
	const promises = await Promise.all([
		fetch("https://in3.dev/knygos/"),
		fetch("https://in3.dev/knygos/types/"),
	]);
	const duomenys = await Promise.all(promises.map((promise) => promise.json())); //140ms

	console.log(duomenys);
}

async function kreipimasisIVienaApi() {
	// Geras pvz
	try {
		const promise = await fetch("https://in3.dev/knygos/");
		const resp = await promise.json();
		//Jei atsakymas sekmingas:
		console.log(resp);
	} catch (err) {
		//jei iskrenta klaida
		alert("Iskrito klaida kreipiantis į serverį");
	}
}

async function kreipimasisIKelisApi() {
	// Šios funkcijos fetchai atliekami paeiliui - pirma gaunamas 1 užklausos atsakymas,
	// tada vykdoma antra užklausa
	const promise1 = await fetch("https://in3.dev/knygos/");
	const resp1 = await promise1.json();
	const promise2 = await fetch("https://in3.dev/knygos/types");
	const resp2 = await promise2.json();
}
