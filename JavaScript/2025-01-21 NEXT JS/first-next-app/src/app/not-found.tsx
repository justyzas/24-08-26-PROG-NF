import Link from "next/link";

// Šis failas skirtas atvaizduoti komponentą, kuris turi atsirasti kai puslapis nerandamas (arba paprašoma neegzistuojančio resurso)
export default function NotFound() {
	return (
		<div className="select-none">
			<h2 className="text-xl">Not Found</h2>
			<p className="italic">Could not find requested resource</p>
			<Link
				href="/"
				className="text-white px-6 py-1 bg-blue-500 hover:bg-blue-600 rounded-xl"
			>
				Return Home
			</Link>
		</div>
	);
}
