const jwt = require("jsonwebtoken");
const TOKEN_KEY = "travelioKeys";

const jwtSignIn = (data) => {
  let token = jwt.sign(data, TOKEN_KEY);
  return token;
};

const jwtVerify = (data) => {
  var decoded = jwt.verify(data, TOKEN_KEY);
  return decoded;
};

module.exports = { jwtSignIn, jwtVerify };
