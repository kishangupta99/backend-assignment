const Subscription = require("../models/Subscription");
const Plan = require("../models/Plan");

exports.createSubscription = async (req, res) => {
  const { userId, planId } = req.body;

  const plan = await Plan.findById(planId);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + plan.duration);

  const newSub = await Subscription.create({
    userId,
    plan: planId,
    endDate,
  });

  res.status(201).json(newSub);
};

exports.getSubscription = async (req, res) => {
  const sub = await Subscription.findOne({ userId: req.params.userId }).populate("plan");
  if (!sub) return res.status(404).json({ message: "Subscription not found" });
  res.json(sub);
};

exports.updateSubscription = async (req, res) => {
  const { planId } = req.body;
  const plan = await Plan.findById(planId);
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + plan.duration);

  const updated = await Subscription.findOneAndUpdate(
    { userId: req.params.userId },
    { plan: planId, status: "ACTIVE", endDate },
    { new: true }
  );

  res.json(updated);
};

exports.cancelSubscription = async (req, res) => {
  await Subscription.findOneAndUpdate(
    { userId: req.params.userId },
    { status: "CANCELLED" }
  );
  res.json({ message: "Subscription cancelled" });
};
