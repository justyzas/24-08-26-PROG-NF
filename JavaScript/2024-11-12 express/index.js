import express from "express";

const server = express();
// express.json() - middleware kuris pritaiko palaikomumą
// priimti JSON duomenis
server.use(express.json());

server.listen(8080, () => {
	console.log("Express serveris Sėkmingai paleistas. http://localhost:8080");
});

const idGen = generateId(3);
const users = [
	{
		id: 1,
		name: "Jonas",
		age: 27,
	},
	{
		id: 2,
		name: "Saulius",
		age: 32,
	},
	{
		id: 3,
		name: "Petras",
		age: 22,
	},
];

// /users
// GET - Gauti visus userius
server.get("/users", (req, res) => {
	res.status(200).json(users);
});

// /users/:id
// Gauti konkretų naudotoją pasinaudojant ID
server.get("/users/:id/", (req, res) => {
	// console.log(req.params); // { id: "9" }
	const id = Number(req.params.id); //3
	const user = users.find((usr) => usr.id === id);
	if (!user) return res.status(404).send("Naudotojas nerastas...");

	res.status(200).json(user);
});

// POST Naudotoju pridėjimas
server.post("/users", (req, res) => {
	const newUser = req.body;
	newUser.id = idGen.next().value;
	console.log(newUser);

	// users
	users.push(newUser);
	res.status(201).json(newUser);
});

// PUT
// Atnaujinti naudotojus
server.put("/users/:id", (req, res) => {
	const id = Number(req.params.id);
	const foundUser = users.find((usr) => usr.id === id); // undefined/User
	if (!foundUser) return res.status(404).send("Naudotojas nerastas...");

	const updateUserData = req.body; //{ name?: "", age?: ""}
	if (updateUserData.name) foundUser.name = updateUserData.name;
	if (updateUserData.age) foundUser.age = updateUserData.age;
	res.status(201).json(foundUser);
});

// DELETE
server.delete("/users/:id", (req, res) => {
	const id = Number(req.params.id);
	const index = users.findIndex((usr) => usr.id === id); // -1/userIndex
	if (index === -1) return res.status(404).send("Naudotojas nerastas...");

	users.splice(index, 1);
	res.status(204).json({ message: "sekmingai ivykdytas istrynimas" });
});

function* generateId(startId = 0) {
	while (true) {
		startId++;
		yield startId;
	}
}
