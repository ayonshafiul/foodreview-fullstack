const express = require("express");

const router = express.Router();

const auth = require("../middlewares/auth");

const food = require("../controller/food");

router.get("/food/get/restaurant/:restaurantID", auth.basic, food.getAll);

router.get("/food/get/:foodID", auth.basic, food.getOne);

router.get("/food/geteverything/", auth.advanced, food.getEverything);

router.get("/food/toprated", auth.basic, food.getTopRated);

router.get("/food/popular", auth.basic, food.getPopular);

router.get("/food/search", auth.basic, food.search);

router.post("/food/insert/:restaurantID", auth.advanced, food.insert);

router.post("/food/update/:foodID", auth.advanced, food.update);

router.get("/food/delete/:foodID", auth.advanced, food.delete);

router.post("/food/review/:foodID", auth.basic, food.review);

router.get("/food/review/:foodID", auth.basic, food.getReviews);

module.exports = router;
