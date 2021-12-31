const express = require("express");

const router = express.Router();

const auth = require("../middlewares/auth");

const food = require("../controller/food");

router.get("/food/get/restaurant/:restaurantID", food.getAll);

router.get("/food/get/:foodID", food.getOne);

router.get("/food/toprated", food.getTopRated);

router.get("/food/popular", food.getPopular);

router.get("/food/search", food.search);

router.post("/food/insert/:restaurantID", food.insert);

router.post("/food/update/:foodID", food.update);

router.get("/food/delete/:foodID", food.delete);

router.post("/food/review/:foodID", food.review);

module.exports = router;
