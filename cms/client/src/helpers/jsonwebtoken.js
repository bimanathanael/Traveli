const jwt = require("jsonwebtoken");
const TOKEN_KEY = "travelioKeys";

const jwtSignInToken = (data) => {
  let token = jwt.sign(data, TOKEN_KEY);
  return token;
};

const jwtVerifyToken = (data) => {
  var decoded = jwt.verify(data, TOKEN_KEY);
  return decoded;
};

const jwtSetUsername = (data) => {
  let token = jwt.sign(data, TOKEN_KEY);
  return token;
};

const jwtVerifyUsername = (data) => {
  var decoded = jwt.verify(data, TOKEN_KEY);
  return decoded;
};

module.exports = {
  jwtSignInToken,
  jwtVerifyToken,
  jwtSetUsername,
  jwtVerifyUsername,
};
