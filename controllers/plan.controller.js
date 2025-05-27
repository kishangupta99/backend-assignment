const Plan = require("../models/Plan");

// @desc    Get all subscription plans
// @route   GET /plans
// @access  Public
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch plans", error: err.message });
  }
};

// @desc    Create a new subscription plan
// @route   POST /plans
// @access  Public (or protected if needed)
exports.createPlan = async (req, res) => {
  try {
    const { name, price, features, duration } = req.body;

    // Input validation
    if (!name || !price || !features || !duration) {
      return res.status(400).json({ message: "All fields are required: name, price, features, duration" });
    }

    if (!Array.isArray(features)) {
      return res.status(400).json({ message: "Features must be an array of strings" });
    }

    const newPlan = new Plan({
      name,
      price,
      features,
      duration
    });

    const savedPlan = await newPlan.save();
    res.status(201).json(savedPlan);
  } catch (err) {
    res.status(500).json({ message: "Failed to create plan", error: err.message });
  }
};
