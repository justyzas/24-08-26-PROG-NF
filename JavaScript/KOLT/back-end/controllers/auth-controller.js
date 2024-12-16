import {
	generateSalt,
	hashPassword,
	isValidCredentials,
} from "../utils/security.js";
import { registrationSchema } from "../utils/validations/AuthSchema.js";
import UserModel from "../models/UserModel.js";
import { Op } from "sequelize";

export async function register(req, res) {
	if (req.session.isLogged)
		return res.status(403).json({
			message: "You are already logged in. Please log out to create a new User",
		});

	const { username, email, password } = req.body;

	try {
		const validationResult = registrationSchema.safeParse(req.body);
		if (!validationResult.success)
			return res.status(400).json({ error: validationResult.error.issues });

		const salt = generateSalt();
		const hashedPassword = hashPassword(password, salt);

		const user = await UserModel.create({
			username,
			email,
			hashedPassword,
			salt,
		});

		// if(!user)
		// {}

		req.session.user = {
			email,
			username,
		};
		req.session.isLogged = true;
		// req.session = {
		// 	user: {
		// 		email,
		// 		username,
		// 		// isAdmin : true/false
		// 	},
		// 	isLogged: true,
		// };
		res
			.status(201)
			.json({ message: "Registration was successful", session: req.session });
	} catch (err) {
		if (err?.original && err.original.errno === 1062) {
			return res
				.status(400)
				.json({ message: "username or email field was not unique" });
		}
		res
			.status(500)
			.json({ message: "internal server error", err: err.message });
	}
}
export async function login(req, res) {
	if (req.session.isLogged)
		return res.status(403).json({
			message: "You are already logged in",
		});
	const { password, usernameOrEmail } = req.body;

	const existingUser = await UserModel.findOne({
		where: {
			[Op.or]: {
				username: usernameOrEmail,
				email: usernameOrEmail,
			},
		},
	});

	if (!existingUser)
		return res.status(404).json({ message: "User was not found" });

	if (
		!isValidCredentials(
			password,
			existingUser.salt,
			existingUser.hashedPassword
		)
	)
		return res.status(400).json({ message: "Invalid credentials" });

	req.session.user = {
		email,
		username,
	};
	req.session.isLogged = true;

	return res
		.status(200)
		.json({ message: "Logged in successfully", session: req.session });
}
