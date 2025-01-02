import {
	Alert,
	Button,
	Dialog,
	Paper,
	Snackbar,
	TextField,
	Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import ScootersContext from "../context/ScootersContext";
import { ScooterCreateSchema } from "../utils/validations/ScooterSchema";

export default function ScooterCreateDialog() {
	const [isSnackbarOpen, setSnackbarOpen] = useState(false);
	const [message, setMessage] = useState("");
	const { createModal, addNewScooter } = useContext(ScootersContext);

	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);

		const newScooterData = {
			registrationCode: formData.get("registrationCode"),
			rideTariffPerKm: Number(formData.get("rideTariffPerKm")),
			leaseTariffPerMin: Number(formData.get("leaseTariffPerMin")),
		};

		const validationResult = ScooterCreateSchema.safeParse(newScooterData);
		if (!validationResult.success) {
			setSnackbarOpen(true);
			setMessage(validationResult.error.issues[0].message);
			return;
		}

		const promise = await fetch("/server/api/scooters", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newScooterData),
		});
		const data = await promise.json();
		if (promise.ok) {
			createModal.onClose();
			addNewScooter(data);
		} else {
			if (promise.status !== 400) {
				setSnackbarOpen(true);
				setMessage(data.message);
			}
		}
	}
	return (
		<Dialog
			open={createModal.isOpen}
			onClose={createModal.onClose}
			maxWidth="sm"
			fullWidth
		>
			<Paper sx={{ p: 4 }}>
				<Typography variant="h5">Scooter Creation Dialog</Typography>
				<form
					onSubmit={handleSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						margin: "2rem 0",
					}}
				>
					<TextField
						type="text"
						name="registrationCode"
						fullWidth
						variant="outlined"
						label="Registration Code"
					/>
					<TextField
						type="text"
						name="rideTariffPerKm"
						fullWidth
						variant="outlined"
						label="Ride tariff / km"
					/>
					<TextField
						type="text"
						name="leaseTariffPerMin"
						fullWidth
						variant="outlined"
						label="Lease tariff / min"
					/>
					<div>
						<Button
							type="submit"
							variant="outlined"
							sx={{ mr: 1 }}
						>
							Submit
						</Button>
						<Button
							color="error"
							variant="outlined"
							onClick={createModal.onClose}
						>
							Cancel
						</Button>
					</div>
				</form>
			</Paper>
			<Snackbar
				open={isSnackbarOpen}
				autoHideDuration={6000}
				onClose={() => setSnackbarOpen(false)}
				// action={action}
			>
				<Alert
					variant="filled"
					sx={{ width: "100%" }}
					color="error"
					severity="error"
				>
					{message}
				</Alert>
			</Snackbar>
		</Dialog>
	);
}
