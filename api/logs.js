// Packages and Variables
const { Router } = require("express");
const router = Router();
const LogEntry = require("../models/LogEntry");

// get log entries
router.get("/", async (req, res, next) => {
  try {
    const entries = await LogEntry.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

// post new log entry
router.post("/", async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    next(error);
  }
});

// Export
module.exports = router;