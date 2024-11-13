// funkcija, gauti visiems useriams
async function getAllUsers() {
	const promise = await fetch("http://localhost:8080/users");

	try {
		if (promise.status !== 200)
			throw new Error("Atsakymas iš serverio yra neigiamas");
		const result = await promise.json();
		return result;
	} catch (err) {
		console.error(`Klaida mano kreiptisIServeri funkcijoje: ${err}`);
	}
}

// funkcija, gauti konkrečiam naudotojui pagal ID
async function getUserById(id) {
	const promise = await fetch(`http://localhost:8080/users/${id}`);

	try {
		if (promise.status !== 200)
			throw new Error("Atsakymas iš serverio yra neigiamas");
		const result = await promise.json();
		return result;
	} catch (err) {
		console.error(`Klaida mano kreiptisIServeri funkcijoje: ${err}`);
	}
}

// funkcija, skirta pridėti naują naudotoją
async function addUser(user) {
	const options = {
		method: "post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(user),
	};
	const promise = await fetch(`http://localhost:8080/users`, options);

	try {
		if (promise.status !== 201)
			throw new Error("Atsakymas iš serverio yra neigiamas");
		const result = await promise.json();
		return result;
	} catch (err) {
		console.error(`Klaida mano kreiptisIServeri funkcijoje: ${err}`);
	}
}

// funkcija, skirta ištrinti naudotoją pagal ID
async function deleteUserById(id) {
	const promise = await fetch(`http://localhost:8080/users/${id}`, {
		method: "DELETE",
	});

	try {
		if (promise.status !== 204)
			throw new Error("Atsakymas iš serverio yra neigiamas");
	} catch (err) {
		console.error(`Klaida mano kreiptisIServeri funkcijoje: ${err}`);
	}
}

// funkcija, skirta atnaujinti naudotoją pagal ID
async function updateUserById(id, updateData) {
	const options = {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updateData),
	};
	const promise = await fetch(`http://localhost:8080/users/${id}`, options);

	try {
		if (promise.status !== 201)
			throw new Error("Atsakymas iš serverio yra neigiamas");
		const result = await promise.json();
		return result;
	} catch (err) {
		console.error(`Klaida mano kreiptisIServeri funkcijoje: ${err}`);
	}
}

export default {
	getAllUsers,
	getUserById,
	addUser,
	deleteUserById,
	updateUserById,
};
