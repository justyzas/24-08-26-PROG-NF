import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import ScootersContext from "../context/ScootersContext";
import { useContext } from "react";

export default function ScootersHistoryTable() {
	const { selectedScooterHistory } = useContext(ScootersContext);
	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell
							align="center"
							style={{ minWidth: "80px" }}
						>
							Beggining Date
						</TableCell>
						<TableCell align="center">Beggining mileage</TableCell>
						<TableCell align="center">Ending mileage</TableCell>
						<TableCell
							align="center"
							style={{ minWidth: "80px" }}
						>
							End date
						</TableCell>
						<TableCell align="center">Price</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{selectedScooterHistory.map((history, index) => (
						<Row
							key={`history-${index}`}
							data={history}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

function Row({ data }) {
	console.log(data);
	return (
		<TableRow>
			<TableCell align="center">
				{data.startingLeaseDate.toLocaleDateString("lt-LT")}
			</TableCell>
			<TableCell align="center">{data.startingRideKm}</TableCell>
			<TableCell align="center">{data.startingRideKm}</TableCell>
			<TableCell align="center">
				{data.endingLeaseDate.toLocaleDateString("lt-LT")}
			</TableCell>
			<TableCell align="center">{data.leasingPrice}</TableCell>
		</TableRow>
	);
}
