const db = require("../utils/db");

module.exports.insert = async (restaurantID, body) => {
  body.restaurantID = restaurantID;
  const [rows, fields] = await db.query("INSERT into food set ?", body);
  return rows;
};

module.exports.update = async (id, body) => {
  const [rows, fields] = await db.query("UPDATE food set ? where foodID = ?", [
    body,
    id,
  ]);
  return rows;
};

module.exports.delete = async (id) => {
  const [rows, fields] = await db.query("DELETE from food where foodID = ?", [
    id,
  ]);
  return rows;
};

module.exports.getOne = async (id) => {
  const [rows, fields] = await db.query(
    "Select *  from food where foodID = ?",
    [id]
  );
  return rows;
};

module.exports.getAll = async (restaurantID) => {
  const [rows, fields] = await db.query(
    "Select *  from food where restaurantID = ? order by foodID DESC",
    [restaurantID]
  );
  return rows;
};

module.exports.getEverything = async () => {
  const [rows, fields] = await db.query("Select *  from food");
  return rows;
};

module.exports.getTopRated = async () => {
  const [rows, fields] = await db.query(
    "Select * from food order by rating desc"
  );
  return rows;
};

module.exports.getPopular = async () => {
  const [rows, fields] = await db.query(
    "Select * from food order by ratingCount desc, rating desc"
  );
  return rows;
};

module.exports.search = async (query) => {
  const [rows, fields] = await db.query(
    "Select * from food where foodName like ?",
    ["%" + query + "%"]
  );
  return rows;
};

module.exports.getUserReview = async (userID, foodID) => {
  const [rows, fields] = await db.query(
    "SELECT * from foodReview where userID = ? and foodID = ?",
    [userID, foodID]
  );
  return rows;
};

module.exports.getReviews = async (foodID) => {
  const [rows, fields] = await db.query(
    "Select * from foodReview where foodID = ?",
    foodID
  );
  return rows;
};

module.exports.insertUserReview = async (userID, foodID, body) => {
  body.userID = userID;
  body.foodID = foodID;
  const [rows, fields] = await db.query("INSERT into foodreview set ?", body);
  return rows;
};

module.exports.updateUserfoodReview = async (userID, foodID, body) => {
  body.review = body.review + " (edited)";
  const [rows, fields] = await db.query(
    "UPDATE foodReview set ? where userID = ? and foodID = ?",
    [body, userID, foodID]
  );
  return rows;
};

module.exports.insertSystemfoodReview = async (foodID, body) => {
  const newRating = body.rating;
  const [rows, fields] = await db.query(
    "UPDATE food set ratingSum = ratingSum + ?, ratingCount = ratingCount + 1, rating = ratingSum / ratingCount where  foodID = ?",
    [newRating, foodID]
  );
  return rows;
};

module.exports.updateSystemfoodReview = async (foodID, oldRating, body) => {
  const ratingDelta = body.rating - oldRating;
  const [rows, fields] = await db.query(
    "UPDATE food set ratingSum = ratingSum + ?, rating = ratingSum / ratingCount where foodID = ?",
    [ratingDelta, foodID]
  );
  return rows;
};
