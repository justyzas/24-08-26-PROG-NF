import { useState } from "react";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import BoxesContext from "./contexts/BoxesContext";

function App() {
	const [boxesCount, setBoxesCount] = useState(0); //[x,y]

	return (
		<main className="container">
			<BoxesContext.Provider value={{ boxesCount, setBoxesCount }}>
				<ComponentA />
				<ComponentB />
			</BoxesContext.Provider>
		</main>
	);
}

export default App;
