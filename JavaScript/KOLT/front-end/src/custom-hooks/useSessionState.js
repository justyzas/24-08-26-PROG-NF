import { useEffect, useState } from "react";

// Skirtas sukurti sesijos state bei kreiptis į API sesijos patikrinimui (kai pasileidžia)
export function useSessionState() {
	const [sessionState, setSessionState] = useState({
		user: { email: "", username: "" },
		isLogged: false,
	});

	useEffect(() => {
		async function checkSession() {
			// /server/api/auth/check-session GET
			const promise = await fetch("/server/api/auth/check-session");
			if (promise.ok) {
				//Sėkmės atveju nustatome sesijos duomenis
				const data = await promise.json();
				setSessionState(data);
			} else {
				// Priešingu atveju atstatome sesiją į pradinę būseną.
				setSessionState({
					user: { email: "", username: "" },
					isLogged: false,
				});
			}
		}
		checkSession();
	}, []);

	return { sessionState, setSessionState };
}
