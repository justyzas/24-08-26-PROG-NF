import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { readFromUsersFile, writeToUsersFile } from "./file-io.js";

const server = express();
// express.json() - middleware kuris pritaiko palaikomumą
// priimti JSON duomenis
server.use(express.json());
// Priimti formos duomenis
server.use(bodyParser.urlencoded({ extended: true }));

server.use(cors());
// server.use((req, res, next) => {
// 	res.setHeader("Access-Control-Allow-Origin", "*"); // Allow any origin
// 	res.setHeader(
// 		"Access-Control-Allow-Methods",
// 		"GET, POST, PUT, DELETE, OPTIONS"
// 	); // Allow specific methods
// 	res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allow specific headers
// 	next();
// });

server.listen(8080, () => {
	console.log("Express serveris Sėkmingai paleistas. http://localhost:8080");
});

const idGen = generateId();
// const users = [
// 	{
// 		id: 1,
// 		name: "Jonas",
// 		age: 27,
// 	},
// 	{
// 		id: 2,
// 		name: "Saulius",
// 		age: 32,
// 	},
// 	{
// 		id: 3,
// 		name: "Petras",
// 		age: 22,
// 	},
// ];

// /users
// GET - Gauti visus useriuss
server.get("/users", (req, res) => {
	const users = readFromUsersFile();
	res.status(200).json(users);
});

// /users/:id
// Gauti konkretų naudotoją pasinaudojant ID
server.get("/users/:id", (req, res) => {
	// console.log(req.params); // { id: "9" }
	const users = readFromUsersFile();
	const id = Number(req.params.id); //1
	const user = users.find((usr) => usr.id === id);
	if (!user) return res.status(404).json({ message: "Naudotojas nerastas" });

	res.status(200).json(user);
});

// POST Naudotoju pridėjimas
server.post("/users", (req, res) => {
	// Iš POST request'o gaunami duomenys pasinaudojant req.body
	const users = readFromUsersFile();
	const newUser = req.body;
	console.log(newUser);

	if (!newUser.age || !newUser.name)
		return res.status(400).json("not valid user schema");

	newUser.id = idGen.next().value;
	// users
	users.push(newUser);
	writeToUsersFile(users);
	res.status(201).json(newUser);
	// Redirect veikia tik tokiu atveju kai route yra pasiekiamas naudojantis formos elementu
	// res.redirect("http://127.0.0.1:5500/index.html");
});

// PUT
// Atnaujinti naudotojus
server.put("/users/:id", (req, res) => {
	const users = readFromUsersFile();
	const id = Number(req.params.id);
	const foundUser = users.find((usr) => usr.id === id); // undefined/User
	if (!foundUser)
		return res.status(404).json({ message: "Naudotojas nerastas" });

	const updateUserData = req.body; //{ name?: "", age?: ""}
	if (updateUserData.name) foundUser.name = updateUserData.name;
	if (updateUserData.age) foundUser.age = updateUserData.age;
	writeToUsersFile(users);
	res.status(201).json(foundUser);
});

// DELETE
server.delete("/users/:id", (req, res) => {
	const users = readFromUsersFile();
	const id = Number(req.params.id);
	const index = users.findIndex((usr) => usr.id === id); // -1/userIndex
	if (index === -1) return res.status(404).send("Naudotojas nerastas...");

	users.splice(index, 1);
	writeToUsersFile(users);
	res.status(204).json();
});

function* generateId(startId = 0) {
	while (true) {
		startId++;
		yield startId;
	}
}
