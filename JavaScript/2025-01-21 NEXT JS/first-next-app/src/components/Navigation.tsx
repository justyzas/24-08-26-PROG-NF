import Link from "next/link";

export default function Navigation() {
	return (
		<nav className="p-4 flex gap-4">
			<Link
				href="/"
				className="text-blue-500 hover:text-blue-600 hover:underline"
			>
				Pagrindinis puslapis
			</Link>
			<Link
				href="/about-us"
				className="text-blue-500 hover:text-blue-600 hover:underline"
			>
				Apie mus
			</Link>
			<Link
				href="/gallery"
				className="text-blue-500 hover:text-blue-600 hover:underline"
			>
				Galerija
			</Link>
		</nav>
	);
}
