import Paper from "@mui/material/Paper";
import "../css/dashboard.css";
import ScootersTable from "../components/ScootersTable";
import { Typography } from "@mui/material";
import ScootersHistoryTable from "../components/ScootersHistoryTable";
import ScootersContext from "../context/ScootersContext";
import useScooterData from "../custom-hooks/useScooterData";
import ScooterActions from "../components/ScooterActions";

import useCountScooterStats from "../custom-hooks/useCountScooterStats";
import DashboardCard from "../components/DashboardCard";

export default function DashboardPage() {
	const {
		allScooters,
		selectedScooterHistory,
		selectScooter,
		clearSelectedScooter,
		selectedScooterId,
		selectedScooter,
		createModal,
		addNewScooter,
		deleteScooter,
		updateModal,
	} = useScooterData();

	const { totalScooters, totalBusyScooters, totalAvailableScooters } =
		useCountScooterStats(allScooters);

	return (
		<ScootersContext.Provider
			value={{
				scooters: allScooters,
				selectedScooterId,
				selectedScooter,
				selectedScooterHistory,
				selectScooter,
				clearSelectedScooter,
				createModal,
				updateModal,
				addNewScooter,
				deleteScooter,
			}}
		>
			<main
				id="dashboard"
				className="container"
			>
				<div className="main-grid">
					<Paper
						className="item nav"
						id="dashboard-card"
					>
						<DashboardCard
							totalAvailableScooters={totalAvailableScooters}
							totalBusyScooters={totalBusyScooters}
							totalScooters={totalScooters}
						/>
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
				</div>
			</main>
		</ScootersContext.Provider>
	);
}
