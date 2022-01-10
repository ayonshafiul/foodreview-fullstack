const restaurant = require("../model/restaurant");
const utils = require("../utils/utils");

module.exports.insert = async (req, res) => {
  const body = req.body;
  console.log(body);
  try {
    const results = await restaurant.insert(body);
    return utils.success(res, "Inserted");
  } catch (err) {
    console.log(err);
    return utils.error(res, err.message);
  }
};

module.exports.update = async (req, res) => {
  const body = req.body;
  const id = req.params.restaurantID;
  try {
    const results = await restaurant.update(id, body);
    return utils.success(res, "Updated");
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.delete = async (req, res) => {
  const id = req.params.restaurantID;
  try {
    const results = await restaurant.delete(id);
    return utils.success(res, "Deleted");
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.getAll = async (req, res) => {
  const restaurantID = req.params.restaurantID;
  try {
    const results = await restaurant.getAll(restaurantID);
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};
module.exports.getOne = async (req, res) => {
  const id = req.params.restaurantID;
  try {
    const results = await restaurant.getOne(id);
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.getTopRated = async (req, res) => {
  const id = req.params.restaurantID;
  try {
    const results = await restaurant.getTopRated();
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.getPopular = async (req, res) => {
  const id = req.params.restaurantID;
  try {
    const results = await restaurant.getPopular();
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.getReviews = async (req, res) => {
  const restaurantID = req.params.restaurantID;
  try {
    const results = await restaurant.getReviews(restaurantID);
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.search = async (req, res) => {
  const query = req.query.q;
  try {
    const results = await restaurant.search(query);
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.review = async (req, res) => {
  const body = req.body;
  const userID = req.user.userID;
  const restaurantID = req.params.restaurantID;
  try {
    const reviewResults = await restaurant.getUserReview(userID, restaurantID);
    if (reviewResults.length == 0) {
      const insertUserResults = await restaurant.insertUserReview(
        userID,
        restaurantID,
        body
      );
      const insertSystemResults = await restaurant.insertSystemRestaurantReview(
        restaurantID,
        body
      );
      return utils.success(res, "review inserted");
    } else {
      const currentReview = reviewResults[0];
      const oldRating = currentReview.rating;
      const updateUserResults = await restaurant.updateUserRestaurantReview(
        userID,
        restaurantID,
        body
      );
      const updateSystemResults = await restaurant.updateSystemRestaurantReview(
        restaurantID,
        oldRating,
        body
      );
      return utils.success(res, "review updated");
    }
  } catch (err) {
    return utils.error(res, err.message);
  }
};
