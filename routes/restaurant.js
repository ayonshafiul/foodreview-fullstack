const express = require("express");

const router = express.Router();

const restaurant = require("../controller/restaurant");

router.get("/restaurant/get", restaurant.getAll);

router.get("/restaurant/get/:restaurantID", restaurant.getOne);

router.get("/restaurant/toprated", restaurant.getTopRated);

router.get("/restaurant/popular", restaurant.getPopular);

router.get("/restaurant/search", restaurant.search);

router.post("/restaurant/insert", restaurant.insert);

router.post("/restaurant/update/:restaurantID", restaurant.update);

router.get("/restaurant/delete/:restaurantID", restaurant.delete);

router.post("/restaurant/review/:restaurantID", restaurant.review);

module.exports = router;
