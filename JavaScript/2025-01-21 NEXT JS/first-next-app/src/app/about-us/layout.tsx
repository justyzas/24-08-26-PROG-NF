import { Metadata } from "next";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<header>
			<h1 className="text-lg">Apie mus</h1>
			{children}
		</header>
	);
}

export const metadata: Metadata = {
	title: "Ribera - Apie mus",
};

// D - Don't
// R - Repeat
// Y - Yourself
