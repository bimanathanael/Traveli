const db = require("../config/firebaseSetup");
const userCollection = db.collection("Users");

class UserModel {
  static getAll() {
    return userCollection.get();
  }

  static getOne(username) {
    return userCollection.doc(username).get();
  }
  static addUser(newUser, username) {
    return userCollection.doc(username).set(newUser);
  }
  static deleteUser(username) {
    return userCollection.doc(username).delete();
  }

  static updateUser(updateUser, username) {
    return userCollection.doc(username).update(updateUser);
  }
}

module.exports = UserModel;
