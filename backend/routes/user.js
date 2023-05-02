const express = require("express");

const router = express.Router();

const user = require("../controller/user");

router.post("/user/register", user.handleRegister);

router.post("/user/login", user.handleLogin);

router.get("/user/authenticated", user.checkLogin);

module.exports = router;
