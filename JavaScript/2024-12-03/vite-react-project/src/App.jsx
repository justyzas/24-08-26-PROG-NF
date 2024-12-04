import { useState } from "react";
import "./App.css";

function App() {
	const [dalyviuSarasas, nustatytiDalyviuSarasa] = useState([]);
	const [dabartinisDalyvis, nustatytiDabartiniDalyvi] = useState("");

	function nustatytiNaujaDalyvi(e) {
		nustatytiDabartiniDalyvi(e.target.value);
	}

	function pridetiDalyvi() {
		nustatytiDalyviuSarasa([...dalyviuSarasas, dabartinisDalyvis]);
		nustatytiDabartiniDalyvi("");
	}

	return (
		<>
			<ul>
				{dalyviuSarasas.map((dalyvis, index) => (
					<li key={`dalyvis-${index}`}>{dalyvis}</li>
				))}
			</ul>

			<input
				type="text"
				placeholder="Įveskite vardą"
				onChange={nustatytiNaujaDalyvi}
				value={dabartinisDalyvis}
			/>
			<button onClick={pridetiDalyvi}>Įrašyti dalyvį</button>
			<Button />
		</>
	);
}

export default App;

function Button() {
	const [skaicius, nustatytiSkaiciu] = useState(); //Hook

	function decideWhichColor() {
		if (skaicius < 10) return "white";
		else if (skaicius < 20) return "green";
		else return "blue";
	}

	function handleButtonClick() {
		nustatytiSkaiciu(skaicius + 1);
	}

	return (
		<button
			onClick={handleButtonClick}
			style={{ color: decideWhichColor() }}
		>
			count is {skaicius}
		</button>
	);
}
