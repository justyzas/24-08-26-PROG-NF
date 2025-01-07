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
		selectedScooterId,
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

	return (
		<div>
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
				disabled={selectedScooterId === null}
				onClick={updateModal.onOpen}
			>
				Atnaujinti
			</Button>
			<ScooterUpdateModal />
			<Button
				variant="outlined"
				color="error"
				disabled={selectedScooterId === null}
				onClick={() => {
					deleteScooter(selectedScooterId);
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
