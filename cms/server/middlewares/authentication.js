const { jwtVerify } = require("../helpers/jsonwebtoken");
// const { User, Product } = require("../models");
const UserModel = require("../models/User");
const authentication = async function (req, res, next) {
  try {
    const access_token = req.headers.access_token;
    if (!access_token) {
      throw { message: "login first!" };
    } else {
      const checkData = jwtVerify(access_token);
      req.username = checkData.username;
      next();
    }
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Please login first!" });
    } else {
      return res.status(500).json({ message: err });
    }
  }
};

const authorization = async function (req, res, next) {
  try {
    if (req.username !== "admin1223") {
      return res.status(403).json({ message: "forbidden access" });
    } else {
      next();
    }
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = { authentication, authorization };
