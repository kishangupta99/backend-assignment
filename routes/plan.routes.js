const express = require("express");
const router = express.Router();
const { getAllPlans, createPlan } = require("../controllers/plan.controller");

router.get("/", getAllPlans);
router.post("/", createPlan);

module.exports = router;
