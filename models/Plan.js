const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  features: [String],
  duration: { type: Number, required: true }, // in days
});

module.exports = mongoose.model("Plan", planSchema);
