import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import UsernameInput from "./UsernameInput";

export default function LoginForm({ switchPage }) {
	function handleLogin(e) {
		const formData = new FormData(e.target);
		const registrationData = {}; //

		formData.forEach((val, key) => {
			registrationData[key] = val === "on" ? true : val;
		});
	}
	return (
		<div className="container mx-auto bg-slate-50 py-5 px-10">
			<form onSubmit={handleLogin}>
				<div className="flex items-baseline gap-x-4">
					<h2 className="text-2xl">Login Form</h2>
					<span
						className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
						onClick={() => {
							switchPage("register");
						}}
					>
						Pereiti į registraciją
					</span>
				</div>
				<UsernameInput />
				<PasswordInput />
				<SubmitButton>My submit button</SubmitButton>
			</form>
		</div>
	);
}
