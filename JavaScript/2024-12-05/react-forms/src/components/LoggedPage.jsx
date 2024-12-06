import SubmitButton from "./SubmitButton";

export default function LoggedPage() {
	const username = "Antanas12";
	const email = "Antanas12@gmail.com";
	const phone = "+3706450651";
	return (
		<div>
			<p>Sveiki prisijungę {username}.</p>
			<div>
				<h3>Jūsų duomenys:</h3>
				<p>Elektroninis paštas: {email}</p>
				<p>Telefono numeris: {phone}</p>
			</div>
			<SubmitButton>Atsijungti</SubmitButton>
		</div>
	);
}
