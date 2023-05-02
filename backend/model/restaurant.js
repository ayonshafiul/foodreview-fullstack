const db = require("../utils/db");

module.exports.insert = async (body) => {
  const [rows, fields] = await db.query("INSERT into restaurant set ?", body);
  return rows;
};

module.exports.update = async (id, body) => {
  const [rows, fields] = await db.query(
    "UPDATE restaurant set ? where restaurantID = ?",
    [body, id]
  );
  return rows;
};

module.exports.delete = async (id) => {
  const [rows, fields] = await db.query(
    "DELETE from restaurant where restaurantID = ?",
    [id]
  );
  return rows;
};

module.exports.getOne = async (id) => {
  const [rows, fields] = await db.query(
    "Select *  from restaurant where restaurantID = ?",
    [id]
  );
  return rows;
};

module.exports.getAll = async () => {
  const [rows, fields] = await db.query(
    "Select *  from restaurant order by restaurantID DESC"
  );
  return rows;
};

module.exports.getTopRated = async () => {
  const [rows, fields] = await db.query(
    "Select * from restaurant order by rating desc"
  );
  return rows;
};

module.exports.getPopular = async () => {
  const [rows, fields] = await db.query(
    "Select * from restaurant order by ratingCount desc, rating desc"
  );
  return rows;
};

module.exports.getReviews = async (restaurantID) => {
  const [rows, fields] = await db.query(
    "Select * from restaurantReview where restaurantID = ?",
    restaurantID
  );
  return rows;
};

module.exports.search = async (query) => {
  const [rows, fields] = await db.query(
    "Select * from restaurant where restaurantName like ? or restaurantDescription like ?",
    ["%" + query + "%", "%" + query + "%"]
  );
  return rows;
};

module.exports.getUserReview = async (userID, restaurantID) => {
  const [rows, fields] = await db.query(
    "SELECT * from restaurantReview where userID = ? and restaurantID = ?",
    [userID, restaurantID]
  );
  return rows;
};

module.exports.insertUserReview = async (userID, restaurantID, body) => {
  body.userID = userID;
  body.restaurantID = restaurantID;
  const [rows, fields] = await db.query(
    "INSERT into restaurantreview set ?",
    body
  );
  return rows;
};

module.exports.updateUserRestaurantReview = async (
  userID,
  restaurantID,
  body
) => {
  body.review = body.review + " (edited)";
  const [rows, fields] = await db.query(
    "UPDATE restaurantReview set ? where userID = ? and restaurantID = ?",
    [body, userID, restaurantID]
  );
  return rows;
};

module.exports.insertSystemRestaurantReview = async (restaurantID, body) => {
  const newRating = body.rating;
  const [rows, fields] = await db.query(
    "UPDATE restaurant set ratingSum = ratingSum + ?, ratingCount = ratingCount + 1, rating = ratingSum / ratingCount where  restaurantID = ?",
    [newRating, restaurantID]
  );
  return rows;
};

module.exports.updateSystemRestaurantReview = async (
  restaurantID,
  oldRating,
  body
) => {
  const ratingDelta = body.rating - oldRating;
  const [rows, fields] = await db.query(
    "UPDATE restaurant set ratingSum = ratingSum + ?, rating = ratingSum / ratingCount where restaurantID = ?",
    [ratingDelta, restaurantID]
  );
  return rows;
};
