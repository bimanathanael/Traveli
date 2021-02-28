const { db } = require("../config/firebaseSetup");
const historyCollection = db.collection("Histories");

class History {
  static getAll() {
    return historyCollection.get();
  }

  static addHistory(newData) {
    return historyCollection.doc().set(newData);
  }
}

module.exports = History;
