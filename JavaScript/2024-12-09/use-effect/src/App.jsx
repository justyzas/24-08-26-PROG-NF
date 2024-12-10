import { useEffect, useState } from "react";

export default function App() {
	const [count, setCount] = useState(0);
	const [users, setUsers] = useState([]);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	console.log("Persikroviau");
	console.log(users);

	// useEffect sintaksė - 1 param: callback funkcija, 2 param: []
	useEffect(() => {
		// 1: užkrovus komponentą - paleisti kodą vieną kartą
		setCount(4);
		async function kreiptisIApi() {
			const promise = await fetch("https://randomuser.me/api/?results=20");
			const response = await promise.json();
			setUsers(response.results);
		}
		kreiptisIApi();
	}, []);

	useEffect(() => {
		// UseEffect, kuris dependency masyve turi kažkokį parametrą - pasileidžia kai tas parametras pasikeičia
		console.log("Count was updated");
	}, [count]);

	useEffect(() => {
		function handleWidthChange() {
			setWindowWidth(window.innerWidth);
		}

		window.addEventListener("resize", handleWidthChange);

		return () => {
			window.removeEventListener("resize", handleWidthChange);
		};
	}, []);

	// useEffect - call api, event listeners, setTimeout arba setInterval
	return (
		<>
			{/* {windowWidth}px */}
			{window.innerWidth}px
			<h2>{count}</h2>
			<button
				onClick={() => {
					setCount((c) => c + 1);
				}}
			>
				Padidinti skaičių
			</button>
			<ul>
				{users.map((user) => (
					<li>
						{user.name.first} {user.name.last}
					</li>
				))}
			</ul>
		</>
	);
}
