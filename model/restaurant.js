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

module.exports.search = async (query) => {
  const [rows, fields] = await db.query(
    "Select * from restaurant where restaurantName like ? or restaurantDescription like ?",
    ["%" + query + "%", "%" + query + "%"]
  );
  return rows;
};

module.exports.getReview = async (id) => {
  const [rows, fields] = await db.query(
    "SELECT * from restaurantReview where restaurantID = ?",
    id
  );
  return rows;
};

module.exports.insertReview = async (body) => {
  const [rows, fields] = await db.query(
    "INSERT into restaurantreview set ?",
    body
  );
  return rows;
};

module.exports.updateRestaurantReview = async (id, body) => {
  const [rows, fields] = await db.query(
    "UPDATE restaurant set ? where restaurantID = ?",
    [body, id]
  );
  return rows;
};
