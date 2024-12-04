import { useState } from "react";
import MyButton from "./MyButton";

export default function State() {
	// const count = 5;

	// const [count, setCount] = useState(5);

	// Naudojant callback funkciją useState,
	// ši funkcija būna paleidžiama vieną kartą per visą komponento gyvavimo ciklą
	const [count, setCount] = useState(() => {
		console.log("Komponentas susikuria....");
		return 5;
	});

	console.log("Persikroviau");
	return (
		<div>
			<h2 className="bg-slate-100 text-red-500 p-4 text-2xl">
				dviguba reiksme {count * 2}
			</h2>
			<h2 className="bg-slate-100 text-red-500 p-4 text-2xl">
				vienguba reiksme {count}
			</h2>
			<h2
				className="bg-slate-100 p-4 text-2xl"
				style={{ color: count % 2 === 0 ? "blue" : "red" }}
			>
				{count % 2 === 0 ? "Lyginis" : "Nelyginis"}
			</h2>
			<MyButton
				onClick={() => {
					// Callbackinė funkcija atnaujinti būsenai yra naudojama kai reikia atnaujinti
					// reikšmę pagal buvusią reikšmę
					setCount((c) => c + 1); //5 -> 6
					setCount((c) => c + 1); //6 -> 7
				}}
			>
				Atnaujinti skaičių {count}
			</MyButton>
		</div>
	);
}
