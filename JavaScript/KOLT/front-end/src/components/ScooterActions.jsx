import { Alert, Button, Snackbar } from "@mui/material";
import { useContext, useState } from "react";
import ScootersContext from "../context/ScootersContext";
import ScooterCreateDialog from "./ScooterCreateDialog";
import ScooterUpdateModal from "./ScooterUpdateModal";

export default function ScooterActions() {
	// const [isOpen, setCreateModalOpen] = useState(false);
	const [snackbarOptions, setSnackbarOptions] = useState({
		variant: "",
		message: "",
		isOpen: false,
	});
	const {
		selectedScooter,
		createModal,
		deleteScooter: deleteFromArray,
		updateModal,
	} = useContext(ScootersContext);

	async function deleteScooter(id) {
		const promise = await fetch(`/server/api/scooters/${id}`, {
			method: "DELETE",
		});
		if (promise.ok) {
			setSnackbarOptions({
				variant: "success",
				message: "Successfully deleted scooter",
				isOpen: true,
			});
			deleteFromArray(id);
		} else {
			setSnackbarOptions({
				variant: "error",
				message: "Failed to delete scooter",
				isOpen: true,
			});
			const response = await promise.json();
			console.error(response.message);
		}
	}
	async function leaseScooter() {
		const city = prompt("Įveskite miestą kuriame nuomojatės paspirtuką");

		const promise = await fetch(
			`/server/api/scooters-lease-history/${selectedScooter.id}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ city }),
			}
		);

		if (promise.ok) {
			const response = await promise.json();
			console.log(response);
		}
	}
	return (
		<div>
			<Button
				variant="outlined"
				color={selectedScooter?.isBusy ? "warning" : "primary"} //primary/warning
				disabled={selectedScooter === null}
				onClick={leaseScooter}
			>
				{selectedScooter?.isBusy ? "Baigti Nuomą" : "Išnuomoti"}
			</Button>
			<Button
				variant="outlined"
				color="success"
				onClick={createModal.onOpen}
			>
				Sukurti
			</Button>
			<ScooterCreateDialog />
			<Button
				variant="outlined"
				color="primary"
				disabled={selectedScooter === null}
				onClick={updateModal.onOpen}
			>
				Atnaujinti
			</Button>
			<ScooterUpdateModal />
			<Button
				variant="outlined"
				color="error"
				disabled={selectedScooter === null}
				onClick={() => {
					deleteScooter(selectedScooter.id);
				}}
			>
				Ištrinti
			</Button>
			<Snackbar
				open={snackbarOptions.isOpen}
				autoHideDuration={6000}
				onClose={() => setSnackbarOptions((c) => ({ ...c, isOpen: false }))}
			>
				<Alert
					variant="filled"
					sx={{ width: "100%" }}
					color={snackbarOptions.variant}
					severity={snackbarOptions.variant}
				>
					{snackbarOptions.message}
				</Alert>
			</Snackbar>
		</div>
	);
}
