import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function App() {
	// useState
	const [inputValue, setInputValue] = useState("");
	console.log("Persikroviau");
	// useRef
	const inputRef = useRef(null);

	const previousValue = useRef("");
	useEffect(() => {
		inputRef.current.focus();
	}, []);

	useEffect(() => {
		previousValue.current = inputValue;
	}, [inputValue]);
	console.log(previousValue);
	// console.log(inputRef.current.value);
	return (
		<div>
			<p>
				Buvusi reikšmė: <b>{previousValue.current}</b>
			</p>
			<p>
				Reiksme: <b>{inputValue}</b>
			</p>
			<input
				type="text"
				placeholder="enter your name"
				ref={inputRef}
				onChange={(e) => {
					// inputValueRef.current = e.target.value;
					setInputValue(e.target.value);
				}}
			/>
			<button onClick={() => inputRef.current.focus()}>Aktyvuoti Įvestį</button>
		</div>
	);
}

export default App;
