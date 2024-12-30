import useLogout from "../custom-hooks/useLogout";
import Paper from "@mui/material/Paper";
import "../css/dashboard.css";
import ScootersTable from "../components/ScootersTable";

export default function DashboardPage() {
	const logout = useLogout();
	return (
		<main
			id="dashboard"
			className="container"
		>
			<div className="main-grid">
				<Paper className="item nav">
					<h2>Dashboard</h2>
					<button onClick={logout}>Log out</button>
				</Paper>
				<Paper className="item item-1">
					<ScootersTable />
				</Paper>
				<Paper className="item item-2">item-2</Paper>
				<Paper className="item item-3">item-3</Paper>
				{/* <div className="item item-4">item-4</div> */}
			</div>
		</main>
	);
}
