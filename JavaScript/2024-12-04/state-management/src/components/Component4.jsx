// Sukurti komponentą, kuris gauna du props.
// Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage,
//  o antras bet koks tekstas kuris atvaizduojamas h2 tage.

const Component4 = ({ prop1, prop2 }) => {
	return (
		<>
			<h1>{prop1}</h1>
			<h2>{prop2}</h2>
		</>
	);
};

export default Component4;
