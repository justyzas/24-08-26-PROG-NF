export default class Profile {
	// Privatus laukelis
	#password;
	#isLoggedIn;
	#username;
	#slug;
	// Sukuriamas naujas objektas, isoreje panaudojant new Profile raktažodį
	constructor(newUserUsername, newUserPassword) {
		this.#username = newUserUsername;
		this.#password = newUserPassword;
		// slug - tai yra username'o versija, sudaryta iš mažųjų raidžių
		this.#slug = newUserUsername.toLowerCase(); //"skywalkeris19"
		this.#isLoggedIn = false;
	}

	// Getteris - gauna privataus laukelio reiksme isoreje
	// Setteris - nustato privataus laukelio reiksme is isores
	get isLoggedIn() {
		//GET - readonly reiksme
		return this.#isLoggedIn;
	}

	get username() {
		return this.#username;
	}

	set username(newUsername) {
		this.#username = newUsername;
		this.#slug = newUsername.toLowerCase();
	}

	get slug() {
		return this.#slug;
	}

	// Objekto Profile metodas
	login(enteredPassword) {
		if (this.#isLoggedIn) {
			console.log("Jūs jau esate prisijungę!");
			return;
		}

		if (enteredPassword === this.#password) {
			console.log("Jus sekmingai prisijungete!");
			this.#isLoggedIn = true;
		} else {
			console.log("Prisijungimo duomenys yra neteisingi...");
		}
	}
	//Senas slaptažodis, naujas slaptažodis
	changePassword(oldPassword, newPassword) {
		if (!this.#isLoggedIn) {
			console.log("Kad pakeisti slaptažodį, jūs turėtumėte prisijungti");
			return;
		}
		if (oldPassword === this.#password) {
			this.#password = newPassword;
			console.log("Slaptažodis sėkmingai pakeistas");
		} else {
			console.log(
				"Neteisingai buvo ivestas senas slaptažodis.. Bandykite vėliau dar kartą, slaptažodis - nepakeistas"
			);
		}
	}

	logout() {
		if (!this.#isLoggedIn) return console.log("Jūs esate neprisijungę!");
		this.#isLoggedIn = false;
		console.log("sėkmingai atsijungta");
	}
}
