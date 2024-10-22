// Tokios funkcijos kurios gali laukti.

// suzinotiBtcKainas();
// suzinotiBtcKainasLaukiantKiekvieno();
console.log("komanda1");
// kreipimasisAsinchroniskai();
kreipimasis();
console.log("komanda2");
console.log("komanda3");
console.log("komanda4");

async function suzinotiBtcKainas() {
	//geras pvz
	const coins = ["BTCUSDT", "ETHUSDT", "DOTUSDT", "ADAUSDT"];
	const urls = coins.map(
		(coin) =>
			`https://api.binance.com/api/v3/klines?symbol=${coin}&interval=1h&limit=1`
	);
	const promises = urls.map((url) => fetch(url));
	const promiseResponses = await Promise.all(promises);
	const data = await Promise.all(promiseResponses.map((resp) => resp.json()));
	console.log(data);
	for (const index in data) {
		console.log(`Kriptovaliutos ${coins[index]} kaina: ${data[index][0][4]}`);
	}
}
async function suzinotiBtcKainasLaukiantKiekvieno() {
	//pvz kaip nereikia daryti
	const coins = ["BTCUSDT", "ETHUSDT", "DOTUSDT", "ADAUSDT"];
	const urls = coins.map(
		(coin) =>
			`https://api.binance.com/api/v3/klines?symbol=${coin}&interval=1h&limit=1`
	);
	for (const url of urls) {
		const promise = await fetch(url);
		const resp = await promise.json();
		console.log(resp);
	}
}

//
function kreipimasis() {
	fetch("https://in3.dev/knygoss/") //404 not found
		.then((resp) => {
			console.log(resp);
			return resp.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
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
	console.log("Asinchroninės funkcijos pradžia");
	// const promise1 = await fetch("https://in3.dev/knygos/"); //2s
	// const data1 = await promise1.json(); //100ms
	// console.log(data1);
	// const promise2 = await fetch("https://in3.dev/knygos/types/"); //2s
	// const data2 = await promise2.json(); //100ms
	// console.log(data2);
	const promises = await Promise.all([
		fetch("https://in3.dev/knygos/"),
		fetch("https://in3.dev/knygos/types/"),
	]);
	const duomenys = await Promise.all(promises.map((promise) => promise.json())); //140ms
	// for (const promise of promises) {
	// 	const data = await promise.json(); //100ms
	// 	duomenys.push(data);
	// } //500ms
	console.log(duomenys);
}

async function kreipimasisIVienaApi() {
	try {
		const promise = await fetch("https://in3.dev/knygos/");
		const resp = await promise.json();
		console.log(resp);
	} catch (err) {
		alert("Iskrito klaida kreipiantis į serverį");
	}
}

fetch("https://in3.dev/knygoss/") //404 not found
	.then((resp) => {
		console.log(resp);
		return resp.json();
	})
	.then((data) => {
		console.log(data);
	})
	.catch((err) => {
		console.log(err);
		alert("Iskrito klaida kreipiantis į serverį");
	});
