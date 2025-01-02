import { useEffect, useState } from "react";
import scooters from "../scootersData";
// Duomenys apie visus paspirtukus iš duomenų bazės
export default function useScooterData() {
	const [allScooters, setAllScooters] = useState([]);
	const [selectedScooterHistory, setSelectedScooterHistory] = useState([]);
	const [selectedScooterId, setSelectedScooterId] = useState(null); //null/id
	const [isCreateModalOpen, setCreateModalOpen] = useState(false);

	useEffect(() => {
		async function fetchScooterData() {
			// FETCH API FOR SCOOTERS

			setAllScooters(scooters);
		}
		fetchScooterData();
	}, []);

	function addNewScooter(newScooter) {
		newScooter.history = [];
		setAllScooters((c) => [...c, newScooter]);
	}

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

	function onCreateModalClose() {
		setCreateModalOpen(false);
	}

	function onOpen() {
		setCreateModalOpen(true);
	}

	return {
		addNewScooter,
		allScooters,
		selectedScooterHistory,
		selectScooter,
		clearSelectedScooter,
		selectedScooterId,
		createModal: {
			isOpen: isCreateModalOpen,
			onClose: onCreateModalClose,
			onOpen,
		},
	};
}
