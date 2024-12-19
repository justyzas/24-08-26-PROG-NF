import { useContext } from "react";
import BoxesContext from "../contexts/BoxesContext";
export default function ComponentB() {
	const { boxesCount } = useContext(BoxesContext);

	console.log("Persikraunu");
	return (
		<div className="card">
			<h1>ComponentB</h1>
			<p>
				Increase the count to see more boxes in <b>ComponentA</b>
			</p>

			{/* Keičia boxesCount būsenas */}
			<Buttons />

			<div>
				<b>My state value: </b>
				<span id="boxesCount">{boxesCount}</span>
			</div>
		</div>
	);
}

function Buttons() {
	const { boxesCount, setBoxesCount } = useContext(BoxesContext);

	function decreaseValue() {
		if (boxesCount <= 0) alert("skaicius negali buti mazesnis nei 0");
		else setBoxesCount((c) => c - 1);
	}

	return (
		<div className="buttons">
			<button onClick={() => setBoxesCount((c) => c + 1)}>
				Increase value
			</button>
			<button onClick={() => setBoxesCount(0)}>Make it zero</button>
			<button onClick={decreaseValue}>Decrease value</button>
		</div>
	);
}
