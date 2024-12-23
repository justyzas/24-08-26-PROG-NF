import { useContext } from "react";
import SessionContext from "../context/SessionContext";

export default function useLogin() {
	const { setSessionState } = useContext(SessionContext);

	async function onSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		// susiformuojame obj, kad kreiptis į API
		const loginData = {
			usernameOrEmail: formData.get("usernameOrEmail"),
			password: formData.get("password"),
		};

		//validacijos jei ju prireiks

		const promise = await fetch("/server/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		});

		if (promise.ok) {
			const data = await promise.json();
			setSessionState({
				user: data.session.user,
				isLogged: data.session.isLogged,
			});
			// navigate("/");
		} else {
			const response = await promise.json();
			alert(response.message);
		}
	}
	return onSubmit;
}
