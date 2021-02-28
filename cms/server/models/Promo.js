const { db, apps } = require("../config/firebaseSetup");
const promoCollection = db.collection("Promo");

class PromoModel {
  static getAll() {
    return promoCollection.get();
  }

  static getOne(id) {
    return promoCollection.doc(id).get();
  }

  static addPromo(data, time) {
    return promoCollection.doc(time).set(data);
  }
  static deletePromo(time) {
    return promoCollection.doc(time).delete();
  }

  static updatePromo(data, time) {
    return promoCollection.doc(time).update(data);
  }

  static uploadImage(imageUrl, data) {
    const storageRef = apps.storage().ref();
    const fileRef = storageRef.child(imageUrl);
    return fileRef.put(data);
  }
}

module.exports = PromoModel;
