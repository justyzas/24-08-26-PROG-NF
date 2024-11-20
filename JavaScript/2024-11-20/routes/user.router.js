import express from "express";
import * as User from "../models/User.model.js";

const router = express.Router();

// http://localhost:3000/users
router.get("/", async (req, res) => {
	const allUsers = await User.getAllUsers();
	res.status(200).send(allUsers);
});

router.get("/:id", async (req, res) => {
	try {
		const id = req.params.id;
		const selectedUser = await User.getUserById(id);
		// null, undefined yra falsy reiksmes
		if (!selectedUser) throw new Error("not found");
		res.status(200).send(selectedUser);
	} catch (err) {
		if (err.message === "not found")
			return res.status(404).json({ message: err.message });
		else {
			return res.status(500).json({ message: "internal server error" });
		}
	}
});

export default router;
