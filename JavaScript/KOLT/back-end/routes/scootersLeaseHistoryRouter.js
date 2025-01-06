import express from "express";

const router = express.Router();
// /server/api/scooters-lease-history
router.get("/", (req, res) => {
	res.send("Paspirtukų nuomos istorija");
});

export default router;
