const { db } = require("../config/firebaseSetup");
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
}

module.exports = PromoModel;
