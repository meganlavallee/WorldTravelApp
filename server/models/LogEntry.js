const mongoose = require("mongoose");

const { Schema } = mongoose;

const logEntrySchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    comments: String,
    rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0
    },
    latitude: {
        type: Number,
        min: -90,
        max: 90,
        required: true,
    },
    longitutde: {
        type: Number,
        min: -180,
        max: 180,
        required: true,
    },
    visited: {
        type: Date,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now
    }
});

const LogEntry = mongoose.model("LogEntry", logEntrySchema)
module.exports = LogEntry;