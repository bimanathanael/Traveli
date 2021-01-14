const db = require("../config/firebaseSetup");
const indonesiaCollection = db.collection("Indonesia");

class IndonesiaModel {
  static getAll() {
    return indonesiaCollection.get();
  }

  static getOne(content) {
    return indonesiaCollection.doc(content).get();
  }
  static addBahasa(newData, content) {
    return indonesiaCollection.doc(content).set(newData);
  }
  static deleteBahasa(content) {
    return indonesiaCollection.doc(content).delete();
  }

  static updateBahasa(updateData, content) {
    return indonesiaCollection.doc(content).update(updateData);
  }
}

module.exports = IndonesiaModel;
