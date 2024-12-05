import { useState } from "react";
import PasswordInput from "./PasswordInput";
import SubmitButton from "./SubmitButton";
import UsernameInput from "./UsernameInput";
import RepeatPassword from "./RepeatPassword";
import EmailInput from "./EmailInput";

export default function RegistrationForm({ switchPage }) {
	const [password, setPassword] = useState("");
	return (
		<div className="container mx-auto bg-slate-50 py-5 px-10">
			<form>
				<div className="flex items-baseline gap-x-4">
					<h2 className="text-2xl">Register Form</h2>
					<span
						className="text-blue-500 hover:text-blue-600 hover:underline cursor-pointer"
						onClick={() => {
							switchPage("login");
						}}
					>
						Go to Log In
					</span>
				</div>
				<UsernameInput />
				<PasswordInput onPasswordChange={setPassword} />
				<RepeatPassword password={password} />
				<EmailInput />
				{/* Phone */}
				{/* Checkbox */}
				<SubmitButton>My submit button</SubmitButton>
			</form>
		</div>
	);
}
