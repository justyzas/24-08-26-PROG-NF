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
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const scooters = [
	{
		id: 1,
		registrationCode: "38343295",
		lastUseTime: new Date("2024-11-25"),
		isBusy: false,
		totalRide: 182.3,
		rideTariffPerKm: 0.35,
		leaseTariffPerMin: 0.27,
	},
	{
		id: 2,
		registrationCode: "51192437",
		lastUseTime: new Date("2024-12-23"),
		isBusy: true,
		totalRide: 142.7,
		rideTariffPerKm: 0.22,
		leaseTariffPerMin: 0.08,
	},
	{
		id: 3,
		registrationCode: "43608260",
		lastUseTime: new Date("2024-11-30"),
		isBusy: false,
		totalRide: 173.4,
		rideTariffPerKm: 0.33,
		leaseTariffPerMin: 0.2,
	},
	{
		id: 4,
		registrationCode: "73482128",
		lastUseTime: new Date("2024-12-04"),
		isBusy: false,
		totalRide: 194.8,
		rideTariffPerKm: 0.2,
		leaseTariffPerMin: 0.18,
	},
	{
		id: 5,
		registrationCode: "41294179",
		lastUseTime: new Date("2024-12-10"),
		isBusy: false,
		totalRide: 126.9,
		rideTariffPerKm: 0.33,
		leaseTariffPerMin: 0.1,
	},
];

export default function ScootersTable() {
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
					{/* <Row /> */}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

function Row({ data }) {
	const [open, setOpen] = useState(false);
	// const data = {
	// 	id: 4,
	// 	registrationCode: "73482128",
	// 	lastUseTime: new Date("2024-12-04"),
	// 	isBusy: true,
	// 	totalRide: 194.8,
	// 	rideTariffPerKm: 0.2,
	// 	leaseTariffPerMin: 0.18,
	// };
	return (
		<>
			<TableRow>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
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
							<div className="parameter-header">RIDA</div>
							<div className="parameter-value">{data.totalRide}km</div>
						</div>
						<div className="advanced-parameter-row">
							<div className="parameter-header">KAINA (KM)</div>
							<div className="parameter-value">
								{data.rideTariffPerKm.toFixed(2)}€
							</div>
						</div>
						<div className="advanced-parameter-row">
							<div className="parameter-header">KAINA (MIN)</div>
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
