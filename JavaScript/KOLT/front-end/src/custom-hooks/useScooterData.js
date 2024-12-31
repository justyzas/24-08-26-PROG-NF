import { useEffect, useState } from "react";
import scooters from "../scootersData";
// Duomenys apie visus paspirtukus iš duomenų bazės
export default function useScooterData() {
	const [allScooters, setAllScooters] = useState([]);
	const [selectedScooterHistory, setSelectedScooterHistory] = useState([]);
	const [selectedScooterId, setSelectedScooterId] = useState(null); //null/id

	useEffect(() => {
		async function fetchScooterData() {
			// FETCH API FOR SCOOTERS
			setAllScooters(scooters);
		}
		fetchScooterData();
	}, []);

	function selectScooter(id) {
		const foundScooter = allScooters.find((scooter) => scooter.id == id);
		if (!foundScooter) return;
		setSelectedScooterHistory(foundScooter.history);
		setSelectedScooterId(id);
	}

	function clearSelectedScooter() {
		setSelectedScooterHistory([]);
		setSelectedScooterId(null);
	}

	return {
		allScooters,
		selectedScooterHistory,
		selectScooter,
		clearSelectedScooter,
		selectedScooterId,
	};
}
