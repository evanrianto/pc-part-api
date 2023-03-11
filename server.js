const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const administrators = require("./routes/administratorRoutes");
const builds = require("./routes/buildRoutes");
const components = require("./routes/componentRoutes");
const users = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
    res.status(200).json({ message: "pong" });
});

app.use("/api/v1/administrators", administrators);
app.use("/api/v1/builds", builds);
app.use("/api/v1/components", components);
app.use("/api/v1/users", users);

app.use("/", (req, res) => {
    res.status(404).send("<p>Not Found</p>");
});

app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening at ${process.env.PORT || 3000}`);
});
