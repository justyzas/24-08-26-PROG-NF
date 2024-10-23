function getDataSync() {
	fetch("https://in3.dev/knygos/")
		.then((resp) => resp.json())
		.then((data1) => {
			console.log(data1);
		});
	const promise = fetch("https://in3.dev/knygos/types/");
	promise.then();
} //30ms

async function getDataAsync() {
	const promise1 = await fetch("https://in3.dev/knygos/");
	const response1 = await promise1.json();
	const promise2 = await fetch("https://in3.dev/knygos/types/");
	const response2 = await promise1.json();

	console.log(response1, response2);
}
getAllDataAsync();
async function getAllDataAsync() {
	const urls = ["https://in3.dev/knygos/", "https://in3.dev/knygos/types/"];

	const unawaitedPromises = urls.map((url) => fetch(url));
	const awaitedPromises = await Promise.all(unawaitedPromises);
	const unawaitedResponses = awaitedPromises.map((resp) => resp.json());
	const awaitedResponses = await Promise.all(unawaitedResponses);

	console.log(awaitedResponses[1]);
}
