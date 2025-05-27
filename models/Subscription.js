const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  plan: { type: mongoose.Schema.Types.ObjectId, ref: "Plan", required: true },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE", "CANCELLED", "EXPIRED"],
    default: "ACTIVE",
  },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
