const food = require("../model/food");
const utils = require("../utils/utils");

module.exports.insert = async (req, res) => {
  const body = req.body;
  console.log(body);
  const restaurantID = req.params.restaurantID;
  try {
    const results = await food.insert(restaurantID, body);
    return utils.success(res, "Inserted");
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.update = async (req, res) => {
  const body = req.body;
  const id = req.params.foodID;
  try {
    const results = await food.update(id, body);
    return utils.success(res, "Updated");
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.delete = async (req, res) => {
  const id = req.params.foodID;
  try {
    const results = await food.delete(id);
    return utils.success(res, "Deleted");
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.getAll = async (req, res) => {
  const restaurantID = req.params.restaurantID;
  try {
    const results = await food.getAll(restaurantID);
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.getEverything = async (req, res) => {
  try {
    const results = await food.getEverything();
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};
module.exports.getOne = async (req, res) => {
  const id = req.params.foodID;
  try {
    const results = await food.getOne(id);
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.getTopRated = async (req, res) => {
  const id = req.params.foodID;
  try {
    const results = await food.getTopRated();
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.getPopular = async (req, res) => {
  const id = req.params.foodID;
  try {
    const results = await food.getPopular();
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.search = async (req, res) => {
  const query = req.query.q;
  try {
    const results = await food.search(query);
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.getReviews = async (req, res) => {
  const foodID = req.params.foodID;
  try {
    const results = await food.getReviews(foodID);
    return utils.successData(res, results);
  } catch (err) {
    return utils.error(res, err.message);
  }
};

module.exports.review = async (req, res) => {
  const body = req.body;
  const userID = req.user.userID;
  const foodID = req.params.foodID;
  try {
    const reviewResults = await food.getUserReview(userID, foodID);
    if (reviewResults.length == 0) {
      const insertUserResults = await food.insertUserReview(
        userID,
        foodID,
        body
      );
      const insertSystemResults = await food.insertSystemfoodReview(
        foodID,
        body
      );
      return utils.success(res, "review inserted");
    } else {
      const currentReview = reviewResults[0];
      const oldRating = currentReview.rating;
      const updateUserResults = await food.updateUserfoodReview(
        userID,
        foodID,
        body
      );
      const updateSystemResults = await food.updateSystemfoodReview(
        foodID,
        oldRating,
        body
      );
      return utils.success(res, "review updated");
    }
  } catch (err) {
    return utils.error(res, err.message);
  }
};
