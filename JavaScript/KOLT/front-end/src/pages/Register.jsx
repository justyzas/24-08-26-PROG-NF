import "../css/register.css";
import { TextField } from "@mui/material";
export default function RegisterPage() {
	return (
		<main id="register">
			<h2>Registration</h2>
			<form
				onSubmit={(e) => {
					const formData = new FormData(e.target);
				}}
			>
				<TextField
					label="Username"
					variant="standard"
					// color="success"
					fullWidth
					name="username"
					sx={{ margin: "10px 0 " }}
				/>
				<TextField
					label="Email"
					variant="standard"
					fullWidth
					name="email"
					sx={{ margin: "10px 0 " }}
				/>
				<TextField
					label="Password"
					variant="standard"
					fullWidth
					name="password"
					sx={{ margin: "10px 0 " }}
				/>
				<TextField
					label="Repeat Password"
					variant="standard"
					fullWidth
					name="repeatPassword"
					sx={{ margin: "10px 0 " }}
				/>
			</form>
		</main>
	);
}
