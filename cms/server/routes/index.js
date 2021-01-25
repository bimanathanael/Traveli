const router = require("express").Router();
const UserController = require("../controllers/UserController");
const EnglishController = require("../controllers/EnglishController");
const IndonesiaController = require("../controllers/IndonesiaController");
const HistoryController = require("../controllers/HistoryController");
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
router.post("/en", authentication, EnglishController.addData);
router.put("/en/:pages", authentication, EnglishController.updateData);

router.get("/id/", IndonesiaController.readData);
router.get("/id/:pages", IndonesiaController.readOneData);
router.get("/id/:pages/:section", IndonesiaController.readSpecifyData);
router.post("/id", authentication, IndonesiaController.addData);
router.put("/id/:pages", authentication, IndonesiaController.updateData);

router.get("/history", authentication, HistoryController.readData);
router.post("/history", authentication, HistoryController.addData);

module.exports = router;
