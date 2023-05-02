const express = require("express");

const router = express.Router();

const admin = require("../controller/admin");

router.post("/admin/register", admin.handleRegister);

router.post("/admin/login", admin.handleLogin);

router.get("/admin/authenticated", admin.checkLogin);

module.exports = router;
