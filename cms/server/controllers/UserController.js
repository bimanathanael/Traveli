const UserModel = require("../models/User");
const { hashPassword, decodePassword } = require("../helpers/bcrypt");
const { jwtSignIn } = require("../helpers/jsonwebtoken");

class AdminController {
  static async login(req, res, next) {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const checkUsername = await UserModel.getOne(username);
      if (!username) {
        return res.status(404).json({ message: "username cannot empty" });
      } else if (!password) {
        return res.status(404).json({ message: "password cannot empty" });
      } else if (!checkUsername.data()) {
        return res.status(400).json({ message: "username/password wrong" });
      } else if (
        decodePassword(password, checkUsername.data().password) === false
      ) {
        return res.status(400).json({ message: "username/password wrong" });
      } else {
        const encodeJWT = {
          username: checkUsername.data().username,
          password: checkUsername.data().password,
        };
        const access_token = jwtSignIn(encodeJWT);
        return res.status(200).json({ access_token });
      }
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  static async readUser(req, res) {
    try {
      const data = await UserModel.getAll();
      const result = [];
      data.forEach((doc) => {
        console.log(doc.id, "cek");
        result.push(doc.data());
      });
      return res.status(200).json({ message: result });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async addUser(req, res) {
    try {
      let username = req.body.username;
      let password = req.body.password;

      const dataFromDB = await UserModel.getAll();
      let idAllUser = [];
      dataFromDB.forEach((doc) => {
        idAllUser.push(doc.id);
      });
      const checkAvalaibleData = idAllUser.filter((data) => data === username);
      if (!username || username == "") {
        return res.status(400).json({ message: "username cannot empty" });
      } else if (!password || password == "") {
        return res.status(400).json({ message: "password cannot empty" });
      } else if (checkAvalaibleData.length > 0) {
        return res
          .status(400)
          .json({ message: "this user has been registered before!" });
      } else {
        const newUser = {
          username,
          password: hashPassword(password),
        };
        const result = await UserModel.addUser(newUser, username);
        return res.status(201).json({ message: newUser });
      }
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  static async deleteUser(req, res) {
    try {
      let params = req.params.username;
      if (params === "admin1223") {
        return res.status(400).json({
          message: "Cannot delete this account, because this is main account",
        });
      } else {
        const deleteUser = await UserModel.deleteUser(params);
        return res.status(200).json({ message: "success delete user" });
      }
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  static async updateUser(req, res) {
    try {
      let username = req.body.username;
      let oldPassword = req.body.oldPassword;
      let newPassword = req.body.newPassword;

      console.log(req.body, "apa yang masuk");
      const checkUsername = await UserModel.getOne(username);

      if (
        decodePassword(oldPassword, checkUsername.data().password) === false
      ) {
        return res.status(400).json({ message: "wrong old password" });
      } else {
        console.log(req.body, "cekcek");
        const updatedUser = {
          password: hashPassword(newPassword),
        };
        console.log(updatedUser, "cekcekcek");
        const update = await UserModel.updateUser(updatedUser, username);

        return res.status(200).json({ message: "success update" });
      }
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

module.exports = AdminController;
