import express from "express";
import {
  statesList,
  minMaxDates,
  dashboardData,
} from "../controllers/salesController";

const router = express.Router();

// API to get list of states
router.get("/states", statesList);

// API to get min and max dates for selected state
router.get("/dates", minMaxDates);

// API to get dashboard data
router.get("/dashboard", dashboardData);

export default router;
