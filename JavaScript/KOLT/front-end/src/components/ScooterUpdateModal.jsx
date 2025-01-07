import { Button, Dialog, Paper, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import ScootersContext from "../context/ScootersContext";
import { ScooterUpdateSchema } from "../utils/validations/ScooterSchema";

export default function ScooterUpdateModal() {
	const { updateModal, selectedScooter, updateScooter } =
		useContext(ScootersContext);

	async function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		const values = {};
		formData.forEach((value, key) => (values[key] = +value));
		console.log(values);

		const validationResult = ScooterUpdateSchema.safeParse(values);

		if (!validationResult.success)
			alert(validationResult.error.issues[0].message);

		console.log(selectedScooter);
		console.log(`/server/api/scooters/${selectedScooter.id}`);
		const promise = await fetch(`/server/api/scooters/${selectedScooter.id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		});
		const response = await promise.json();

		if (!promise.ok) {
			alert(response.message);
		} else {
			updateScooter(selectedScooter.id, values);
		}
	}

	return (
		<Dialog
			open={updateModal.isOpen}
			onClose={updateModal.onClose}
			maxWidth="sm"
			fullWidth
		>
			<Paper sx={{ p: 4 }}>
				<Typography variant="h5">Scooter Update Dialog</Typography>
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
						defaultValue={selectedScooter?.registrationCode}
						disabled
					/>
					<TextField
						type="number"
						name="rideTariffPerKm"
						fullWidth
						variant="outlined"
						label="Ride tariff / km"
						defaultValue={selectedScooter?.rideTariffPerKm}
						slotProps={{
							htmlInput: {
								step: 0.01,
							},
						}}
						onChange={(e) => {
							// min ir max reiksmes naudojantis e.target
							if (e.target.value < 0.05) e.target.value = 0.05;
							else if (e.target.value > 10) e.target.value = 10;
						}}
					/>
					<TextField
						type="number"
						name="leaseTariffPerMin"
						fullWidth
						variant="outlined"
						label="Lease tariff / min"
						defaultValue={selectedScooter?.leaseTariffPerMin}
						slotProps={{
							htmlInput: {
								step: 0.01,
							},
						}}
						onChange={(e) => {
							// min ir max reiksmes naudojantis e.target
							if (e.target.value < 0.05) e.target.value = 0.05;
							else if (e.target.value > 10) e.target.value = 10;
						}}
					/>
					<TextField
						type="number"
						name="totalRide"
						fullWidth
						variant="outlined"
						label="Total ride (km)"
						onChange={(e) => {
							// min ir max reiksmes naudojantis e.target
							if (e.target.value < 0) e.target.value = 0;
							else if (e.target.value > 1000000) e.target.value = 1000000;
						}}
						// inputProps={{
						// 	maxLength: 13,
						// 	step: "1"
						//   }}
						slotProps={{
							htmlInput: {
								step: 0.01,
							},
						}}
						defaultValue={selectedScooter?.totalRide}
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
							onClick={updateModal.onClose}
						>
							Cancel
						</Button>
					</div>
				</form>
			</Paper>
			{/* <Snackbar
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
			</Snackbar> */}
		</Dialog>
	);
}
