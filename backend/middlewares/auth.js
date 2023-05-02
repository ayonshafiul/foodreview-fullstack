const jwt = require("jsonwebtoken");

module.exports.basic = async (req, res, next) => {
  const cookieToken = req.cookies["jwt"];
  const authorizationToken = req.headers["authorization"];
  const adminCookieToken = req.cookies["jwt-admin"];
  const adminAuthorizationToken = req.headers["authorization-admin"];
  console.log(process.env.JWT_ADMIN_SECRET_TOKEN, process.env.JWT_SECRET_TOKEN);
  console.log(cookieToken, authorizationToken, adminCookieToken, adminAuthorizationToken)
  if (
    !cookieToken &&
    !authorizationToken &&
    !adminCookieToken &&
    !adminAuthorizationToken
  ) {
    return res.status(400).json({ success: false, msg: "Token doesn't exist" });
  }

  let token = cookieToken ? cookieToken : authorizationToken;
  let adminToken = adminCookieToken
    ? adminCookieToken
    : adminAuthorizationToken;

  try {
    let payload;
    if (adminToken) {
      payload = await jwt.verify(
        adminToken,
        process.env.JWT_ADMIN_SECRET_TOKEN
      );
    } else {
      payload = await jwt.verify(token, process.env.JWT_SECRET_TOKEN);
    }
    req.user = payload;
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, msg: err.message });
  }
};

module.exports.advanced = async (req, res, next) => {
  const cookieToken = req.cookies["jwt-admin"];
  const authorizationToken = req.headers["authorization-admin"];

  console.log(process.env.JWT_ADMIN_SECRET_TOKEN, process.env.JWT_SECRET_TOKEN);
  console.log(cookieToken, authorizationToken);
  if (!cookieToken && !authorizationToken) {
    return res.status(400).json({ success: false, msg: "Token doesn't exist" });
  }

  let token = cookieToken ? cookieToken : authorizationToken;
  console.log(token);
  try {
    const payload = await jwt.verify(token, process.env.JWT_ADMIN_SECRET_TOKEN);
    console.log(payload);
    req.user = payload;
    next();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ success: false, msg: err.message });
  }
};
