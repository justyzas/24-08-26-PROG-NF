import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	// createBrowserRouter,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SessionContext from "./context/SessionContext";
import { useSessionState } from "./custom-hooks/useSessionState";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
	const mode = "light";
	const darkTheme = createTheme({
		palette: {
			mode,
		},
	});
	document.querySelector("body").style.backgroundColor =
		darkTheme.palette.background.default;
	// Custom hook - tai musu pačių sukurtas hook, centralizuojantis logiką kitame faile.
	const { sessionState, setSessionState } = useSessionState();
	return (
		<ThemeProvider theme={darkTheme}>
			<SessionContext.Provider value={{ sessionState, setSessionState }}>
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								sessionState.isLogged ? <Dashboard /> : <Navigate to="/login" />
							}
						/>
						<Route
							path="/login"
							element={!sessionState.isLogged ? <Login /> : <Navigate to="/" />}
						/>
						<Route
							path="/register"
							element={
								!sessionState.isLogged ? <Register /> : <Navigate to="/" />
							}
						/>
					</Routes>
				</BrowserRouter>
			</SessionContext.Provider>
		</ThemeProvider>
	);
}

export default App;
