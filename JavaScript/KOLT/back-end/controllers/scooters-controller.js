import ScooterModel from "../models/ScooterModel.js";
import ScooterHistoryModel from "../models/ScooterLeaseHistoryModel.js";
import {
	ScooterCreateSchema,
	ScooterUpdateSchema,
} from "../utils/validations/ScooterSchema.js";

export async function getScootersCount(req, res) {
	//busyScootersCount, availableScootersCount, scootersCount

	// const countOfScooters = ScooterModel.count();
	// const countOfBusyScooters = ScooterModel.count({ where: { busy: true } });
	// const countOfAvailableScooters = ScooterModel.count({
	// 	where: { busy: false },
	// });
	// const responses = await Promise.all([
	// 	countOfScooters,
	// 	countOfBusyScooters,
	// 	countOfAvailableScooters,
	// ]);

	// res.status(200).json({
	// 	allScootersCount: responses[0],
	// 	busyScootersCount: responses[1],
	// 	availableScootersCount: responses[2],
	// });
	const allScooters = await ScooterModel.findAll({ attributes: ["isBusy"] });
	const allScootersJson = allScooters.map((v) => v.toJSON());

	const totalBusyScooters = allScootersJson.filter(
		(scooter) => scooter.isBusy
	).length;
	const totalAvailableScooters = allScootersJson.length - totalBusyScooters;
	res.status(200).json({
		allScootersCount: allScooters.length,
		busyScootersCount: totalBusyScooters,
		availableScootersCount: totalAvailableScooters,
	});
}

export async function getAllScooters(req, res) {
	// req.params - parametrai pateikiami adrese kaip tarpiniai routai.    pvz: /api/scooters/:id /api/scooters/8

	// Query params - req.query  pvz: /api/scooters?history=false&page=0&rowsPerPage=5
	console.log(req.query);
	const dbQueryParams = {};
	const pageNumber = +req.query?.page || 0;
	const rowsPerPage = +req.query?.rowsPerPage || 5;
	if (req.query.history === "true")
		dbQueryParams.include = { model: ScooterHistoryModel, as: "history" };

	dbQueryParams.offset = rowsPerPage * pageNumber; //1*5 = 5
	dbQueryParams.limit = rowsPerPage; //5-10
	const allScooters = await ScooterModel.findAll(dbQueryParams);
	res.status(200).json(allScooters);
}

export async function getScooterById(req, res) {
	// /api/data/7
	const { id } = req.params;
	if (!id || isNaN(id))
		return res
			.status(400)
			.json({ message: "Scooter ID was not provided or was in wrong format" });
	const foundScooter = await ScooterModel.findByPk(id);
	if (!foundScooter)
		return res.status(404).json({ message: "Scooter was not found" });
	res.status(200).json(foundScooter);
}
export async function createScooter(req, res) {
	const validationResult = ScooterCreateSchema.safeParse(req.body);
	if (!validationResult.success)
		return res.status(400).json({ error: validationResult.error.issues });

	try {
		const newScooter = await ScooterModel.create(req.body);

		res.status(201).json(newScooter);
	} catch (err) {
		// Error, SequelizeError
		if (err?.name === "SequelizeUniqueConstraintError")
			res.status(409).json({ message: err.errors[0].message });
		else {
			res.status(500).json({ message: "Internal server error occured" });
		}
	}
}
export async function deleteScooterById(req, res) {
	const { id } = req.params;
	if (!id || isNaN(id))
		return res
			.status(400)
			.json({ message: "Scooter ID was not provided or was in wrong format" });
	const deletedScooter = await ScooterModel.destroy({ where: { id } });
	if (!deletedScooter)
		return res
			.status(404)
			.json({ message: "Scooter with provided ID was not found" });

	res.status(204).json();
}
export async function updateScooterById(req, res) {
	const { id } = req.params;
	if (!id || isNaN(id))
		return res
			.status(400)
			.json({ message: "Scooter ID was not provided or was in wrong format" });
	const validationResult = ScooterUpdateSchema.safeParse(req.body);
	if (!validationResult.success)
		return res.status(400).json({ error: validationResult.error.issues });
	const updatedScooter = await ScooterModel.update(req.body, { where: { id } });
	if (!updatedScooter)
		return res
			.status(404)
			.json({ message: "Scooter with provided ID was not found" });
	res.status(201).json(updatedScooter);
}

export async function addRandom(req, res) {
	function rand(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const newScooterData = {
		registrationCode: rand(10000000, 99999999),
		leaseTariffPerMin: rand(1, 100) / 100,
		rideTariffPerKm: rand(1, 100) / 100,
	};
	const newScooter = await ScooterModel.create(newScooterData);

	res.status(201).json(newScooter);
}
