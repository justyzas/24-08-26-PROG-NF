import {
	Chip,
	Collapse,
	IconButton,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScootersContext from "../context/ScootersContext";

export default function ScootersTable() {
	const { scooters } = useContext(ScootersContext);
	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell>NO.</TableCell>
						<TableCell align="center">Reg. NO.</TableCell>
						<TableCell align="center">Last use time</TableCell>
						<TableCell align="center">Availability</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{scooters.map((data) => (
						<Row
							key={`scooter-${data.id}`}
							data={data}
						/>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

function Row({ data }) {
	const { selectScooter, selectedScooterId, clearSelectedScooter } =
		useContext(ScootersContext);
	const open = selectedScooterId === data.id;

	function selectOrClearScooter() {
		if (open) clearSelectedScooter();
		else selectScooter(data.id);
	}

	return (
		<>
			<TableRow>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={selectOrClearScooter}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell align="center">{data.id}</TableCell>
				<TableCell align="center">{data.registrationCode}</TableCell>
				<TableCell align="center">
					{data.lastUseTime.toLocaleDateString("lt-LT")}
				</TableCell>
				<TableCell align="center">
					{data.isBusy ? (
						<Chip
							label="Busy"
							color="error"
							variant="outlined"
						/>
					) : (
						<Chip
							label="Available"
							color="success"
							variant="outlined"
						/>
					)}
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell
					sx={{ py: 0 }}
					colSpan={6}
				>
					<Collapse
						in={open}
						timeout="auto"
						unmountOnExit
					>
						<Typography
							variant="h6"
							gutterBottom
							component="div"
							align="center"
						>
							Advanced Parameters
						</Typography>
						<div className="advanced-parameter-row">
							<div className="parameter-header">TOTAL RIDE (KM)</div>
							<div className="parameter-value">{data.totalRide}km</div>
						</div>
						<div className="advanced-parameter-row">
							<div className="parameter-header">PRICE/KM</div>
							<div className="parameter-value">
								{data.rideTariffPerKm.toFixed(2)}€
							</div>
						</div>
						<div className="advanced-parameter-row">
							<div className="parameter-header">PRICE/MIN</div>
							<div className="parameter-value">
								{data.leaseTariffPerMin.toFixed(2)}€
							</div>
						</div>
					</Collapse>
				</TableCell>
			</TableRow>
		</>
	);
}
