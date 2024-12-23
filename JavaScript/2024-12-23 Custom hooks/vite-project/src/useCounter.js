import { useEffect, useState } from "react";

export default function useCounter(defaultCounterValue) {
	const [count, setCount] = useState(defaultCounterValue);

	function handleIncrement() {
		setCount((c) => c + 1);
	}
	function handleDecrement() {
		setCount((c) => c - 1);
	}

	// useEffect(()=>{

	// },[defaultCounterValue])

	return { count, handleDecrement, handleIncrement };
}
