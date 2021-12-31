const db = require("../utils/db");

module.exports.insert = async (body) => {
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

module.exports.getReview = async (id) => {
  const [rows, fields] = await db.query(
    "SELECT * from foodReview where foodID = ?",
    id
  );
  return rows;
};

module.exports.insertReview = async (body) => {
  const [rows, fields] = await db.query("INSERT into foodreview set ?", body);
  return rows;
};

module.exports.updatefoodReview = async (id, body) => {
  const [rows, fields] = await db.query("UPDATE food set ? where foodID = ?", [
    body,
    id,
  ]);
  return rows;
};
