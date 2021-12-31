module.exports.success = (res, msg) => {
  return res.status(200).json({
    success: true,
    msg: msg,
  });
};

module.exports.error = (res, msg) => {
  return res.status(400).json({
    success: false,
    msg: msg,
  });
};

module.exports.successData = (res, data) => {
  return res.status(200).json({
    success: true,
    data: data,
  });
};
