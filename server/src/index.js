const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const middlewares = require("./middlewares");

const app = express();

// middleware
app.use(morgan("common"));
app.use(helmet());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.get("/", (req, res) => {
    res.json({
        message: "hello world"
    })
});

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
});