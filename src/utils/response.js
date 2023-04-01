const responseSuccess = function (res, resData, status = 200) {
  const data = {
    status: status,
    message: "OK",
    data: resData,
  };

  res.jsonData = data;
  res.customStatus = status;
  return res.status(status).json(data);
};

const responseError = function (res, err, status = 500) {
  const data = {
    status: status,
    message: err.message || err,
  };

  res.jsonData = data;
  res.customStatus = status;
  res.status(status).json(data);
};

module.exports = {
  responseSuccess,
  responseError,
};
