"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

// NextJS komponentas, skirtas atvaizduoti kai iškrenta klaida
// Automatiškai pridedami du propsai: error ir reset
// error - native Error klaida
// reset - funkcija puslapio perkrovimui
export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<div>
			<h2 className="text-xl font-bold">Something went wrong!</h2>
			<button
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}
				className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-1 rounded-xl"
			>
				Try again
			</button>
		</div>
	);
}
