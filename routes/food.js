const express = require("express");

const router = express.Router();

const food = require("../controller/food");

router.post("/food/insert", food.insert);

router.post("/food/update/:foodID", food.update);

router.get("/food/delete/:foodID", food.delete);

router.post("/food/review/:foodID", food.review);

module.exports = router;
