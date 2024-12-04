// Sukurti komponentą, kuris gauną vieną props.
// Props yra bet koks tekstas, kuris komponente atvaizduojamas
// h1 tage.

// children - rezervuotas raktažodis react props'uose
// kuris perduoda vidinį HTML esantį komponente
export default function Component2({ children, color = "blue" }) {
	return (
		<div
			className="text-2xl font-bold my-2"
			style={{ color }}
		>
			{children}
		</div>
	);
}
