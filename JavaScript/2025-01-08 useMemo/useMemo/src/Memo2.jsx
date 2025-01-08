import { useMemo, useState } from "react";

export default function Memo2() {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(0);

	const expensiveCalculation = (num) => {
		console.log("Calculating...");
		for (let i = 0; i < 1000000000; i++) {
			num += 1;
		}
		return num;
	};

	const result = useMemo(() => {
		return expensiveCalculation(count);
	}, [count]);

	return (
		<div>
			<p>count: {count}</p>
			<button onClick={() => setCount((c) => c + 1)}>+</button>
			<p>count: {count2}</p>
			<button onClick={() => setCount2((c) => c + 1)}>+</button>

			<p>Result: {result}</p>
		</div>
	);
}
