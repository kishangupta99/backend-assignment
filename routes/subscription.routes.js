const express = require("express");
const router = express.Router();
const {
  createSubscription,
  getSubscription,
  updateSubscription,
  cancelSubscription,
} = require("../controllers/subscription.controller");

router.post("/", createSubscription);
router.get("/:userId", getSubscription);
router.put("/:userId", updateSubscription);
router.delete("/:userId", cancelSubscription);

module.exports = router;
