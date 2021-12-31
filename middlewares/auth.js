const jwt = require("jsonwebtoken");

module.exports.basic = async (req, res, next) => {
  const cookieToken = req.cookies["jwt"];
  const authorizationToken = req.headers["Authorization"];

  if (!cookieToken && !authorizationToken) {
    return res.status(400).json({ success: false, msg: "Token doesn't exist" });
  }

  let token = cookieToken ? cookieToken : authorizationToken;

  try {
    const payload = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(400).json({ success: false, msg: err.message });
  }
};

module.exports.advanced = async (req, res, next) => {
  const cookieToken = req.cookies["jwt-admin"];
  const authorizationToken = req.headers["authorization-admin"];

  if (!cookieToken && !authorizationToken) {
    return res.status(400).json({ success: false, msg: "Token doesn't exist" });
  }

  let token = cookieToken ? cookieToken : authorizationToken;

  try {
    const payload = await jwt.verify(token, process.env.JWT_ADMIN_SECRET_TOKEN);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(400).json({ success: false, msg: err.message });
  }
};
