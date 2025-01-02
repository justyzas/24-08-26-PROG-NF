import useLogout from "../custom-hooks/useLogout";
import Paper from "@mui/material/Paper";
import "../css/dashboard.css";
import ScootersTable from "../components/ScootersTable";
import { Button, Typography } from "@mui/material";
import ScootersHistoryTable from "../components/ScootersHistoryTable";
import ScootersContext from "../context/ScootersContext";
import useScooterData from "../custom-hooks/useScooterData";
import ScooterActions from "../components/ScooterActions";

export default function DashboardPage() {
	const logout = useLogout();
	const {
		allScooters,
		selectedScooterHistory,
		selectScooter,
		clearSelectedScooter,
		selectedScooterId,
		createModal,
		addNewScooter,
	} = useScooterData();

	return (
		<ScootersContext.Provider
			value={{
				scooters: allScooters,
				selectedScooterId,
				selectedScooterHistory,
				selectScooter,
				clearSelectedScooter,
				createModal,
				addNewScooter,
			}}
		>
			<main
				id="dashboard"
				className="container"
			>
				<div className="main-grid">
					<Paper className="item nav">
						{/* TODO DashboardNavigation component 
						1. Pridėti kas šiuo metu yra prisijungęs (username, role)
						2. Išpozicionuoti elementus
						3. Pridėti responsyvumą
					*/}
						<Typography variant="h5">Dashboard</Typography>
						<Button
							variant="outlined"
							onClick={logout}
						>
							Log out
						</Button>
					</Paper>
					<Paper className="item item-1">
						<Typography
							variant="h5"
							sx={{ mb: 4 }}
						>
							Scooters Table
						</Typography>
						<ScootersTable />
					</Paper>
					<Paper className="item item-2">
						<Typography
							variant="h5"
							sx={{ mb: 4 }}
						>
							Scooters Lease History
						</Typography>
						<ScootersHistoryTable />
					</Paper>
					<Paper className="item item-3">
						<Typography
							variant="h5"
							sx={{ mb: 3 }}
						>
							Actions
						</Typography>
						<ScooterActions />
					</Paper>
					{/* <div className="item item-4">item-4</div> */}
				</div>
			</main>
		</ScootersContext.Provider>
	);
}
