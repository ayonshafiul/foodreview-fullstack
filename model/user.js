const db = require("../utils/db");

module.exports.checkEmail = async (email) => {
  const [rows, fields] = await db.query("SELECT * FROM user where email = ? ", [
    email,
  ]);
  return rows;
};

module.exports.insertUser = async (email, password) => {
  const [rows, fields] = await db.query("INSERT into user set ?", {
    email: email,
    password: password,
  });
};

module.exports.login = async (email) => {
  const [rows, fields] = await db.query("SELECT * FROM user where email = ? ", [
    email,
  ]);
  return rows;
};
