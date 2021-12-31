const express = require("express");

const router = express.Router();

const restaurant = require("../controller/restaurant");

const auth = require("../middlewares/auth");

router.get("/restaurant/get", auth.basic, restaurant.getAll);

router.get("/restaurant/get/:restaurantID", auth.basic, restaurant.getOne);

router.get("/restaurant/toprated", auth.basic, restaurant.getTopRated);

router.get("/restaurant/popular", auth.basic, restaurant.getPopular);

router.get("/restaurant/search", auth.basic, restaurant.search);

router.get(
  "/restaurant/review/:restaurantID",
  auth.basic,
  restaurant.getReviews
);

router.post("/restaurant/insert", auth.advanced, restaurant.insert);

router.post(
  "/restaurant/update/:restaurantID",
  auth.advanced,
  restaurant.update
);

router.get(
  "/restaurant/delete/:restaurantID",
  auth.advanced,
  restaurant.delete
);

router.post("/restaurant/review/:restaurantID", auth.basic, restaurant.review);

module.exports = router;
