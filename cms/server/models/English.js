const db = require("../config/firebaseSetup");
const englishCollection = db.collection("English");

class English {
  static getAll() {
    return englishCollection.get();
  }

  static getOne(content) {
    return englishCollection.doc(content).get();
  }

  static addEnglish(newData, content) {
    return englishCollection.doc(content).set(newData);
  }
  static deleteEnglish(content) {
    return englishCollection.doc(content).delete();
  }

  static updateEnglish(updateData, content) {
    return englishCollection.doc(content).update(updateData);
  }
}

module.exports = English;
