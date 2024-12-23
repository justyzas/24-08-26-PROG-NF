import useLogout from "../custom-hooks/useLogout";

export default function DashboardPage() {
	const logout = useLogout();
	return (
		<div>
			<h2>Dashboard</h2>
			<button onClick={logout}>Log out</button>
		</div>
	);
}
