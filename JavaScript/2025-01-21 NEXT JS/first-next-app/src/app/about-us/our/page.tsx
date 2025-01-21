export default async function Page() {
	// /about-us/our
	// API call'as į kitą serverį...
	await new Promise((res) => {
		setTimeout(() => {
			res("v");
		}, 3000);
	});

	return <div>Hey!</div>;
}
