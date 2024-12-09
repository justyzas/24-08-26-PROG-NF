import { useEffect, useState } from "react";

export default function App() {
	const [isStopped, setIsStopped] = useState(false);
	const [secondsCount, setSecondsCount] = useState(0);

	// 1.
	// 2.
	useEffect(() => {
		//
		console.log("useEffect suveike");

		if (!isStopped) {
			const intervalId = setInterval(() => {
				setSecondsCount((current) => current + 1);
			}, 1000);

			// Cleanup, Destructor
			return () => {
				clearInterval(intervalId);
			};
		}
	}, [isStopped]);

	return (
		<div>
			<button onClick={() => setIsStopped((c) => !c)}>
				{isStopped ? "Paleisti" : "Sustabdyti"}
			</button>
			<h2>{secondsCount}</h2>
		</div>
	);
}
