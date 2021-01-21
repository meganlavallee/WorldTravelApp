// dependencies
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");

// dotenve
require("dotenv").config();

// middleware
const middlewares = require("./middlewares");

// mongoose connection
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const app = express();

// middleware
app.use(morgan("common"));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

// api get route
app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    })
});

// listening on port
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
});