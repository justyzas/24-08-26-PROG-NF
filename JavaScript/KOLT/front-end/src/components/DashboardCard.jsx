import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import useLogout from "../custom-hooks/useLogout";
import SessionContext from "../context/SessionContext";

export default function DashboardCard({
	totalScooters,
	totalBusyScooters,
	totalAvailableScooters,
}) {
	const { sessionState } = useContext(SessionContext);
	const logout = useLogout();
	return (
		<>
			<div>
				<Typography variant="h5">Dashboard</Typography>
				<p>
					Logged in as: <b>{sessionState.user.username}</b>
				</p>
				<Button
					variant="outlined"
					onClick={logout}
				>
					Log out
				</Button>
			</div>
			<div>
				<p>
					Total scooters: <b>{totalScooters}</b>
				</p>
				<p>
					Busy scooters: <b>{totalBusyScooters}</b>
				</p>
				<p>
					Available scooters: <b>{totalAvailableScooters}</b>
				</p>
			</div>
		</>
	);
}
