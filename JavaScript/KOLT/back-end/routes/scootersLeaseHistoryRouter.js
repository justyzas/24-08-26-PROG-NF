import express from "express";
import * as scooterHistoryController from "../controllers/scoters-history-controller.js";
const router = express.Router();

// /server/api/scooters-lease-history
router.get("/", scooterHistoryController.getAllScootersHistory);
router.get("/:id", scooterHistoryController.getScooterHistoryById);
router.post("/:scooterId", scooterHistoryController.createScooterHistoryRecord);

export default router;
