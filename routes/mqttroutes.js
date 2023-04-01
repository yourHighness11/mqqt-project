const express = require("express");
const { createData } = require("../controllers/mqqtControllers");

const routes = express.Router();

routes.post("/", createData);
module.exports = routes;
