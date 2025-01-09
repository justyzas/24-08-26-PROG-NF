import { useState, memo, useMemo, useCallback, useEffect } from "react";
function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function App() {
	const [sortType, setSortType] = useState("ORIGINAL");
	const [numbers] = useState(() => {
		return new Array(1000000).fill(0).map(() => rand(0, 100));
	});
	const [count, setCount] = useState(0);
	function changeSortType() {
		if (sortType === "ORIGINAL") {
			setSortType("ASC");
		} else if (sortType === "ASC") {
			setSortType("DESC");
		} else if (sortType === "DESC") {
			setSortType("UNIQUE");
		} else {
			setSortType("ORIGINAL");
		}
	}

	// Function #15068
	const sort = useCallback(
		function () {
			console.log("RIKIUOJU");
			if (sortType === "ORIGINAL") return numbers;
			else if (sortType === "ASC") return numbers.sort((a, b) => a - b);
			else if (sortType === "DESC") return numbers.sort((a, b) => b - a);
			else if (sortType === "UNIQUE") return Array.from(new Set(numbers));
		},
		[sortType, numbers]
	);

	// function sort() {
	// 	console.log("RIKIUOJU");
	// 	if (sortType === "ORIGINAL") return numbers;
	// 	else if (sortType === "ASC") return numbers.sort((a, b) => a - b);
	// 	else if (sortType === "DESC") return numbers.sort((a, b) => b - a);
	// 	else if (sortType === "UNIQUE") return Array.from(new Set(numbers));
	// }

	return (
		<div>
			<button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
			<button onClick={changeSortType}>Change sort type</button>

			<p>
				Sort type: <b>{sortType}</b>
			</p>
			<hr />
			<SortedNumbers
				numbers={numbers}
				sort={sort}
			/>
		</div>
	);
}

// memo - isimena komponentą ir padaro jį pilnai priklausomą tik nuo props'ų
const SortedNumbers = memo(SortedNumbersComponent);

function SortedNumbersComponent({ numbers, sort }) {
	const [count, setCount] = useState(0);
	// useMemo - kai reikia kazka apskaiciuoti didelio
	console.log("SortedNumbersComponent rerendered");

	const sortedNumbers = useMemo(sort, [numbers, sort]); //optimizuota

	return (
		<div>
			<button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
			<div>{sortedNumbers.join(", ")}</div>
		</div>
	);
}
export default App;
