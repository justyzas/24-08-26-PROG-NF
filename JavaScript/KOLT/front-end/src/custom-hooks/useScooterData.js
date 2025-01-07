import { useEffect, useState } from "react";

// Duomenys apie visus paspirtukus iš duomenų bazės
export default function useScooterData() {
	const [allScooters, setAllScooters] = useState([]);
	const [selectedScooterHistory, setSelectedScooterHistory] = useState([]);
	const [selectedScooterId, setSelectedScooterId] = useState(null); //null/id
	const [selectedScooter, setSelectedScooter] = useState(null); //null/Object
	const [isCreateModalOpen, setCreateModalOpen] = useState(false);
	const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

	useEffect(() => {
		async function fetchScooterData() {
			// FETCH API FOR SCOOTERS
			// fetch(URL?)
			const promise = await fetch("/server/api/scooters?history=true");
			if (promise.ok) {
				const response = await promise.json();
				setAllScooters(response);
			}
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
		setSelectedScooter(foundScooter);
		setSelectedScooterId(id);
	}

	function clearSelectedScooter() {
		setSelectedScooterHistory([]);
		setSelectedScooterId(null);
	}

	function deleteScooter(id) {
		const filteredScooters = allScooters.filter((scooter) => scooter.id !== id);
		setAllScooters(filteredScooters);
	}
	return {
		addNewScooter,
		deleteScooter,
		allScooters,
		selectedScooterHistory,
		selectScooter,
		clearSelectedScooter,
		selectedScooterId,
		selectedScooter,
		createModal: {
			isOpen: isCreateModalOpen,
			onClose: () => setCreateModalOpen(false),
			onOpen: () => setCreateModalOpen(true),
		},
		updateModal: {
			isOpen: isUpdateModalOpen,
			onClose: () => setUpdateModalOpen(false),
			onOpen: () => setCreateModalOpen(true),
		},
	};
}
