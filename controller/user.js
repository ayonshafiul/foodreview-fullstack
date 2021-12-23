const bcrypt = require("bcrypt");
const user = require("../model/user");
const jwt = require("jsonwebtoken");

module.exports.handleRegister = async (req, res) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;

  const saltRounds = 10;
  const hashedpass = await bcrypt.hash(password, saltRounds);

  try {
    const checkEmailResults = await user.checkEmail(email);
    if (checkEmailResults.length == 0) {
      const inserUserResults = await user.insertUser(email, hashedpass);
      res.send("user inserted");
    } else {
      res.send("email already exists");
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports.handleLogin = async (req, res) => {
  const body = req.body;
  const email = body.email;
  const password = body.password;
  if (
    email === "" ||
    password === "" ||
    typeof email == "undefined" ||
    typeof password == "undefined"
  ) {
    return res.status(400).send("email or password cannot be empty");
  }
  try {
    const loginQuery = await user.login(email);
    if (loginQuery.length == 0) {
      return res.send("User doesn't exist");
    }
    const storedPassword = loginQuery[0].password;
    const passwordMatch = await bcrypt.compare(password, storedPassword);
    if (!passwordMatch) {
      return res.send("Password doesn't match");
    }
    const jwt_token = await jwt.sign(
      { userID: loginQuery[0].userID },
      process.env.JWT_SECRET_TOKEN
    );
    res.cookie("jwt", jwt_token, {
      maxAge: 900000,
      httpOnly: true,
    });
    return res.send("Log in successfull");
  } catch (err) {
    return res.send(err);
  }
};
