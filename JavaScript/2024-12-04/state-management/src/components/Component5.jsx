// Sukurti komponentą, kuris gauna tris props.
// Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage,
// o antras bet koks tekstas kuris atvaizduojamas h2 tage,
// o trečias yra spalva, kuria nudažomi abu tekstai.

import Component4 from "./Component4";

const Component5 = ({ prop1, prop2, color }) => {
	return (
		<div style={{ color }}>
			<Component4
				prop1={prop1}
				prop2={prop2}
			/>
		</div>
	);
};

export default Component5;
