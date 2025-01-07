import { useEffect, useState } from "react";

// Duomenys apie visus paspirtukus iš duomenų bazės
export default function useScooterData() {
	const [allScooters, setAllScooters] = useState([]);
	const [selectedScooterHistory, setSelectedScooterHistory] = useState([]);
	const [selectedScooterId, setSelectedScooterId] = useState(null); //null/id
	const [selectedScooter, setSelectedScooter] = useState(null); //null/Object
	const [isCreateModalOpen, setCreateModalOpen] = useState(false);
	const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

	const [rowsPerPage, setRowsPerPage] = useState(5);
	const [pageNumber, setPageNumber] = useState(0);
	const [scootersCount, setScootersCount] = useState({
		allScootersCount: 0,
		busyScootersCount: 0,
		availableScootersCount: 0,
	});
	useEffect(() => {
		async function getScootersCount() {
			const promise = await fetch("/server/api/scooters/count");
			const response = await promise.json();
			setScootersCount(response);
		}
		getScootersCount();
	}, []);
	useEffect(() => {
		async function fetchScooterData() {
			// FETCH API FOR SCOOTERS
			// fetch(URL?)
			const promise = await fetch(
				`/server/api/scooters?history=true&page=${pageNumber}&rowsPerPage=${rowsPerPage}`
			);
			if (promise.ok) {
				const response = await promise.json();
				setAllScooters(response);
			}
		}
		fetchScooterData();
	}, [rowsPerPage, pageNumber]);

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
	function updateScooter(id, newValues) {
		// Originalaus paspirtuku masyvo kopija atskirame kintamajamee
		const originalScootersArray = [...allScooters];
		// Masyvo indeksas atnaujinamam paspirtukui
		const foundScooterIndex = allScooters.findIndex(
			(scooter) => scooter.id == id
		);
		// Jei nerandame paspirtuko - funkcija pasibaigia
		if (!foundScooterIndex) return;

		// Ant originalaus masyvo indekso objekto kopijos užrašomos naujos reikšmės iš atnaujinimo funkcijos
		originalScootersArray[foundScooterIndex] = {
			...originalScootersArray[foundScooterIndex],
			...newValues,
		};
		setSelectedScooter(originalScootersArray[foundScooterIndex]);
		setAllScooters(originalScootersArray);
		setUpdateModalOpen(false);
	}
	return {
		addNewScooter,
		deleteScooter,
		updateScooter,
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
			onOpen: () => setUpdateModalOpen(true),
		},
		pagination: {
			setPageNumber,
			pageNumber,
			setRowsPerPage,
			rowsPerPage,
		},
		scootersCount,
	};
}
