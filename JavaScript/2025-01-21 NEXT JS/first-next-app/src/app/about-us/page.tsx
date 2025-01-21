export default async function Page() {
	// /about-us

	// API call'as į kitą serverį...
	await new Promise((res) => {
		setTimeout(() => {
			res("v");
		}, 3000);
	});
	return (
		<main>
			<ul>
				<li>Lorem, ipsum dolor.</li>
				<li>Lorem, ipsum dolor.</li>
				<li>Lorem, ipsum dolor.</li>
				<li>Lorem, ipsum dolor.</li>
			</ul>
		</main>
	);
}
