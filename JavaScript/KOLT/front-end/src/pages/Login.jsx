import {
	Button,
	Grid2 as Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import "../css/login.css";
export default function LoginPage() {
	return (
		<Paper id="login">
			<Typography variant="h5">Prisijungimas</Typography>
			<hr />
			<Grid
				container
				spacing={2}
				sx={{ mt: "2rem" }}
			>
				<Grid size={12}>
					<TextField
						type="text"
						variant="standard"
						label="Username or Email address"
						name="usernameOrEmail"
						fullWidth
					/>
				</Grid>
				<Grid size={12}>
					<TextField
						type="password"
						variant="standard"
						label="Password"
						name="password"
						fullWidth
					/>
				</Grid>
				<Grid size={12}>
					<Button
						type="submit"
						variant="outlined"
						sx={{ mt: "1rem" }}
					>
						Prisijungti
					</Button>
				</Grid>
			</Grid>
			<a
				href="/register"
				className="link-mt"
			>
				Go to Registration
			</a>
		</Paper>
	);
}
