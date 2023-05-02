const db = require("../utils/db");

module.exports.checkEmail = async (email) => {
  const [rows, fields] = await db.query("SELECT * FROM admin where email = ? ", [
    email,
  ]);
  return rows;
};

module.exports.insertAdmin = async (email, password) => {
  const [rows, fields] = await db.query("INSERT into admin set ?", {
    email: email,
    password: password,
  });
};

module.exports.login = async (email) => {
  const [rows, fields] = await db.query("SELECT * FROM admin where email = ? ", [
    email,
  ]);
  return rows;
};
