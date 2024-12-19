import { useContext } from "react";
import BoxesContext from "../contexts/BoxesContext";

export default function ComponentA() {
	// useEffect - jei keičia state
	// useState pakitimas (setState)
	// pakitę props'ai
	// useReducer'io state
	const contextValues = useContext(BoxesContext);
	console.log("A - Persikraunu");
	return (
		<div className="card">
			<h1>ComponentA</h1>
			<p>
				This component displays boxes regarding the count on <b>ComponentB</b>
			</p>

			{/* <b>Boxes count: </b>
			<span>{props.boxCount}</span> */}
			<AllBoxes boxCount={contextValues.boxesCount} />
		</div>
	);
}

function AllBoxes({ boxCount }) {
	const boxIds = new Array(boxCount).fill(0).map((_, i) => i + 1);

	return (
		<div className="all-boxes">
			{boxIds.map((id, index) => (
				<Box
					id={id}
					key={`box-${index}`}
				/>
			))}
		</div>
	);
}

function Box({ id }) {
	return <div className="box">{id}</div>;
}
