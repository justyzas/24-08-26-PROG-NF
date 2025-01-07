import { Button, Dialog, Paper, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import ScootersContext from "../context/ScootersContext";

export default function ScooterUpdateModal() {
	const { updateModal, selectedScooter } = useContext(ScootersContext);
	console.log(selectedScooter);
	const regCode = selectedScooter?.registrationCode;
	console.log("AHOI");
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
					// onSubmit={handleSubmit}
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
						value={regCode}
					/>
					<TextField
						type="text"
						name="rideTariffPerKm"
						fullWidth
						variant="outlined"
						label="Ride tariff / km"
						defaultValue={selectedScooter?.rideTariffPerKm}
					/>
					<TextField
						type="text"
						name="leaseTariffPerMin"
						fullWidth
						variant="outlined"
						label="Lease tariff / min"
						defaultValue={selectedScooter?.leaseTariffPerMin}
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
