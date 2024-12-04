import "./App.css";
import Paragraph from "./components/Paragraph";
export default function App() {
	const x = "Sveiki";
	const y = 6;
	const z = 7;
	const a = 8;
	return (
		<div className="App">
			<Paragraph
				labas={x}
				paskutinisZodis="pasaulis"
			/>
			<Paragraph
				labas={y}
				paskutinisZodis="grazus"
			/>
			<Paragraph
				labas={z}
				paskutinisZodis="tik"
			/>
			<Paragraph
				labas={a}
				paskutinisZodis="mes"
			/>
		</div>
	);
}
