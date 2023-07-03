const { login, register } = require("../controller/user");
const loginRoute = require("express").Router();

loginRoute.post("/login", login);
loginRoute.post("/register", register);
module.exports = loginRoute;
