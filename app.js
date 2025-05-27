const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const planRoutes = require("./routes/plan.routes");
const subscriptionRoutes = require("./routes/subscription.routes");
const errorHandler = require("./middlewares/error.middleware");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/plans", planRoutes);
app.use("/subscriptions", subscriptionRoutes);

// API root check
app.get("/", (req, res) => {
  res.send(" API Connected");
});

// Error handler
app.use(errorHandler);

module.exports = app;
