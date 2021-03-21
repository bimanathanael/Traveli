const { db } = require("../config/firebaseSetup");
const newsletterCollection = db.collection("Newsletter");

class NewsletterModel {
  static getAll() {
    return newsletterCollection.get();
  }

  static getOne(id) {
    return newsletterCollection.doc(id).get();
  }

  static addNewsletter(data, time) {
    return newsletterCollection.doc(time).set(data);
  }

  static deleteNewsletter(time) {
    return newsletterCollection.doc(time).delete();
  }

  static updateNewsletter(data, title) {
    return newsletterCollection.doc(title).update(data);
  }
}

module.exports = NewsletterModel;
