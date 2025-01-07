import Paper from "@mui/material/Paper";
import "../css/dashboard.css";
import ScootersTable from "../components/ScootersTable";
import { TablePagination, Typography } from "@mui/material";
import ScootersHistoryTable from "../components/ScootersHistoryTable";
import ScootersContext from "../context/ScootersContext";
import useScooterData from "../custom-hooks/useScooterData";
import ScooterActions from "../components/ScooterActions";

import useCountScooterStats from "../custom-hooks/useCountScooterStats";
import DashboardCard from "../components/DashboardCard";
import { useState } from "react";

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
		updateScooter,
		pagination,
		scootersCount,
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
				updateScooter,
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
							totalAvailableScooters={scootersCount.availableScootersCount}
							totalBusyScooters={scootersCount.busyScootersCount}
							totalScooters={scootersCount.allScootersCount}
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
						<TablePagination
							component="div"
							count={scootersCount.allScootersCount}
							page={pagination.pageNumber}
							onPageChange={(_, page) => {
								pagination.setPageNumber(page);
							}}
							rowsPerPage={pagination.rowsPerPage}
							onRowsPerPageChange={(e) => {
								pagination.setRowsPerPage(e.target.value);
							}}
							rowsPerPageOptions={[5, 10, 15, 20]}
						/>
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
