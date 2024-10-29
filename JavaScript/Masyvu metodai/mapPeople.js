async function main() {
	// Užduotis 1: Gauti žmonių informacijos masyvą iš API:
	// https://randomuser.me/api/?results=100&nat=gb,au,us
	// Ir console.log'inti gautus rezultatus
	const promise = await fetch(
		"https://randomuser.me/api/?results=100&nat=gb,au,us"
	);
	const dataFromFetch = await promise.json();
	const peopleArray = dataFromFetch.results;
	console.log(peopleArray);

	// Užduotis 2: Iš gauto žmonių masyvo informacijos sukurti masyvą iš štai tokių
	// objektų:

	// {
	//     "firstName": "Erin",
	//     "lastName": "Alvarez",
	//     "country": "United Kingdom",
	//     "city": "Salford",
	//     "email": "erin.alvarez@example.com",
	//     "dateOfBirth": "1972-07-16T00:44:15.079Z",
	//     "phone": "016974 92836",
	//     "nat": "GB"
	// }
	const parsedPeopleArray = peopleArray.map((personObj) => ({
		firstName: personObj.name.first,
		lastName: personObj.name.last,
		country: personObj.location.country,
		city: personObj.location.city,
		email: personObj.email,
		dateOfBirth: personObj.dob.date,
		phone: personObj.phone,
		nat: personObj.nat,
	}));
	// ["Damon", "Simon", "Zelda", "Abby"]
	// Rikiavimas pagal žmogaus vardą
	parsedPeopleArray.sort((personA, personB) => {
		// -1, 0, 1
		const personAName = personA.nat; //Abby
		const personBName = personB.nat; //Simon

		if (personAName > personBName) return 1; // Simon, Abby
		if (personAName < personBName) return -1; // Abby, Simon
		return 0; //Simon, Abby
	});
	console.log(parsedPeopleArray);
}
main();
