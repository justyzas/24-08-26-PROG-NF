import { useMemo } from "react";
import { useState } from "react";

function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateArrayfromRandomNumbers(min, max, length) {
	const arr = [];
	for (let i = 0; i < length; i++) arr.push(rand(min, max));
	return arr;
}

function App() {
	const [count, setCount] = useState(0);
	const [numbers, setNumbers] = useState(
		generateArrayfromRandomNumbers(1, 1000, 10000)
	);
	// const [sortType, setSortType] = useState("NONE");

	// -------BLOGAI-------
	// function sortNumbers() {
	// 	console.log("Rikiuoju");
	// 	return numbers.sort((a, b) => a - b);
	// }
	// const sortedNumbers = sortNumbers();

	// Darbas su ilgais masyvais (filtracijos, rikiavimai)
	// Sumos iš ilgo masyvo

	// -------GERAI-------
	const sumOfNumbers = useMemo(() => {
		let sum = 0;
		console.log("Perskaičiuoju sumą...");
		numbers.forEach((num) => {
			sum += num;
		});
		return sum;
	}, [numbers]); //200ms
	console.log("Baigiau persikrovimą");
	return (
		<div>
			<p>
				count: <b>{count}</b>
			</p>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
			<button
				onClick={() => {
					const newNumbers = [...numbers];
					newNumbers.push(4);
					setNumbers(newNumbers);
				}}
			>
				Add new number to array
			</button>
			<div>Suma: {sumOfNumbers}</div>
		</div>
	);
}

export default App;
