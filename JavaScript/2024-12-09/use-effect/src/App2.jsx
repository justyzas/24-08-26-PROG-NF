import { useEffect, useState } from "react";

export default function App() {
	// 1. Saugoti visus vardus masyve.
	const [names, setNames] = useState([]);
	const [selectedName, setSelectedName] = useState(null);
	const [selectedNameData, setSelectedNameData] = useState(null);
	console.log("Persikraunu");
	console.log(selectedName);

	// API iškvietimas
	useEffect(() => {
		async function callNamesApi() {
			const promise = await fetch("/names.json");
			const response = await promise.json();
			setNames(response);
		} //20ms

		callNamesApi();
	}, []);

	// useEffect(() => {
	async function getUser(name) {
		const promise = await fetch(`/${name}.json`);
		const response = await promise.json();
		setSelectedNameData(response);
	}
	// 	if (selectedName) getUser();
	// }, [selectedName]);

	return (
		<div>
			<button
				onClick={() => {
					setSelectedNameData(null);
					setSelectedName(null);
				}}
			>
				Atstatyti duomenis
			</button>
			{names.map((name) => (
				<p
					key={name}
					onClick={() => {
						console.log("Paspaustas " + name);
						setSelectedName(name);
						getUser(name);
					}}
				>
					{name}
				</p>
			))}
			<hr />
			{selectedNameData !== null && (
				<div>
					<p>{selectedNameData.id}</p>
					<p>{selectedNameData.name}</p>
					<p>{selectedNameData.age}</p>
				</div>
			)}
		</div>
	);
}
