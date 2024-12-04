import { useState } from "react";
import MyButton from "./MyButton";

export default function State2() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	console.log(username, password);
	return (
		<div>
			<input
				type="text"
				className="border-2 border-slate-700 m-4"
				placeholder="Username"
				value={username}
				onChange={(e) => {
					setUsername(e.target.value.replaceAll(" ", ""));
				}}
			/>
			<input
				type="password"
				placeholder="Password"
				className="border-2 border-slate-700 m-4"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value.replaceAll(" ", ""));
				}}
			/>
			<MyButton
				onClick={() => {
					// passwordInput.value = "";
					setPassword("");
					setUsername("");
				}}
			>
				Išsiūsti
			</MyButton>
		</div>
	);
}
