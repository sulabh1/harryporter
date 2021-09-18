const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const characterRoutes = require("./routes/characterRoutes");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/characters", characterRoutes);
module.exports = app;
