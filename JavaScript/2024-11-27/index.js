import express from "express";
import path from "path";
import root from "./lib/dirname.js";
import multer from "multer";
import bodyParser from "body-parser";
import { readdir } from "node:fs/promises";
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const staticFilesPath = path.join(root, "public");
//c:/users/......./public

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(staticFilesPath, "uploads"));
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});
const uploadMw = multer({ storage });

// app.use("/public", express.static(staticFilesPath));
const users = [
	{
		username: "user",
		password: "password123?",
	},
	{
		username: "skywalker",
		password: "Skywalker19",
	},
];

let isLoggedIn = false;
let loggedInAs = null;

app.get("/", (req, res) => {
	// Patikrinimas ar naudotojas yra prisijungęs
	if (isLoggedIn) res.sendFile(path.join(staticFilesPath, "index.html"));
	else res.redirect("/login");
});

app.get("/login", (req, res) => {
	// Patikrinimas ar naudotojas yra prisijungęs
	if (isLoggedIn) res.redirect("/");
	else res.sendFile(path.join(staticFilesPath, "login.html"));
});

app.get("/gallery", (req, res) => {
	// Patikrinimas ar naudotojas yra prisijungęs
	if (isLoggedIn) res.sendFile(path.join(staticFilesPath, "gallery.html"));
	else res.redirect("/login");
});

app.post("/profile", uploadMw.single("profiline"), (req, res) => {
	console.log(req.file);
	res.redirect("/");
});

app.get("/image/:imageName", (req, res) => {
	const imageName = req.params.imageName;

	if (!isLoggedIn) return res.redirect("/login");
	// Patikrinimas ar nuotraukos failas egzistuoja

	return res.sendFile(path.join(staticFilesPath, "uploads", imageName));
});

app.get("/all-images", async (req, res) => {
	const allFiles = await readdir(path.join(staticFilesPath, "uploads"));
	const filteredFiles = allFiles.filter((fileName) => {
		const acceptedFileTypes = [".png", ".jpg", ".bmp", ".jpeg", ".gif"];
		for (const type of acceptedFileTypes)
			if (fileName.toLowerCase().endsWith(type)) return true;
		return false;
	});

	console.log(allFiles);
	console.log(filteredFiles);

	res.status(200).json(filteredFiles);
});

app.post("/login-action", (req, res) => {
	const { username, password } = req.body;
	const loggingInUser = users.find(
		(user) => user.username === username && user.password === password
	);
	if (!loggingInUser) return res.redirect("/login");
	loggedInAs = loggingInUser;
	isLoggedIn = true;
	res.redirect("/");
});

app.listen(3000, () => {
	console.log("Serveris sėkmingai paleistas, adresas http://localhost:3000");
});

console.log(root);
