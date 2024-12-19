import {
	BrowserRouter,
	Routes,
	Route,
	// createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SessionContext from "./context/SessionContext";
import { useEffect, useState } from "react";
function App() {
	const [sessionState, setSessionState] = useState({
		user: { email: "", username: "" },
		isLogged: false,
	});
	useEffect(() => {
		async function checkSession() {
			// /server/api/auth/check-session
		}
		checkSession();
	}, []);
	return (
		<SessionContext.Provider value={sessionState}>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Dashboard />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
				</Routes>
			</BrowserRouter>
		</SessionContext.Provider>
	);
}

export default App;
