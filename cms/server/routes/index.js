const router = require("express").Router();
const UserController = require("../controllers/UserController");
const EnglishController = require("../controllers/EnglishController");
const IndonesiaController = require("../controllers/IndonesiaController");
const HistoryController = require("../controllers/HistoryController");
const PromoController = require("../controllers/PromoController");
const NewsletterController = require("../controllers/NewsletterController");
const {
  authentication,
  authorization,
} = require("../middlewares/authentication");

router.post("/login", UserController.login);
router.post("/register", authentication, authorization, UserController.addUser);
router.get(
  "/listAdmin",
  authentication,
  authorization,
  UserController.readUser
);
router.delete(
  "/:username",
  authentication,
  authorization,
  UserController.deleteUser
);
router.put("/:username", authentication, UserController.updateUser);

router.get("/en/", EnglishController.readData);
router.get("/en/:pages", EnglishController.readOneData);
router.get("/en/:pages/:section", EnglishController.readSpecifyData);
router.post("/en/:pages/:section", authentication, EnglishController.addData);
router.put("/en/:pages/:section", authentication, EnglishController.updateData);

router.get("/id/", IndonesiaController.readData);
router.get("/id/:pages", IndonesiaController.readOneData);
router.get("/id/:pages/:section", IndonesiaController.readSpecifyData);
router.post("/id/:pages/:section", authentication, IndonesiaController.addData);
router.put(
  "/id/:pages/:section",
  authentication,
  IndonesiaController.updateData
);

router.get("/history", authentication, HistoryController.readData);
router.post("/history", authentication, HistoryController.addData);

router.get("/promo", authentication, PromoController.getData);
router.get("/promo/:id", authentication, PromoController.getOneData);
router.post("/promo", authentication, PromoController.addData);
router.put("/promo/:id", authentication, PromoController.updateData);
router.delete("/promo/:id", authentication, PromoController.deleteData);

router.get("/newsletter", authentication, NewsletterController.getData);
router.get("/newsletter/:id", authentication, NewsletterController.getOneData);
router.post("/newsletter", authentication, NewsletterController.addData);
router.put("/newsletter/:id", authentication, NewsletterController.updateData);
router.delete(
  "/newsletter/:id",
  authentication,
  NewsletterController.deleteData
);

module.exports = router;
