import { useContext } from "react";
import SessionContext from "../context/SessionContext";

// Custom hookai priima funkcijos parametrą tik vieną kartą - kai susikuria
export default function useLogout() {
	const { setSessionState } = useContext(SessionContext);

	// /server/api/auth/log-out
	async function logout() {
		const promise = await fetch("/server/api/auth/log-out");
		if (promise.ok) {
			setSessionState({
				user: { email: "", username: "" },
				isLogged: false,
			});
		} else {
			const response = await promise.json();
			alert(response.message);
		}
	}

	return logout;
}
