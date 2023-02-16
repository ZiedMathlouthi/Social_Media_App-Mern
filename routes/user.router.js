const express = require("express");

const route = express.Router();

const userController = require("../controllers/user.controller.js");

route.post("/signup", userController.signup);

module.exports = route;
