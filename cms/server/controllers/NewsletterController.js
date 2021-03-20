const NewsletterModel = require("../models/Newsletter");

class NewsletterController {
  static async getData(req, res) {
    try {
      const data = await NewsletterModel.getAll();
      const result = [];
      data.forEach((doc) => {
        result.push(doc.data());
      });
      result.sort((a, b) =>
        a.timeInNumber > b.timeInNumber
          ? -1
          : a.timeInNumber < b.timeInNumber
          ? 1
          : 0
      );
      return res.status(200).json({ message: result });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async getOneData(req, res) {
    try {
      const param = req.params.id;
      const data = await NewsletterModel.getOne(param);
      if (!data.data()) {
        return res.status(404).json({ message: "data not found" });
      } else {
        return res.status(200).json({ message: data.data() });
      }
    } catch (err) {
      return res.status(404).json({ message: err });
    }
  }

  static async addData(req, res) {
    try {
      let title = req.body.title;
      let image_url = req.body.image_url;
      let image_path = req.body.image_path;
      let content = req.body.content;
      const time = Date().split(" ").splice(0, 5).join(" ");
      const timeInNumber = Date.now();

      const dataFromDB = await NewsletterModel.getAll();
      let idAllNewsletter = [];
      dataFromDB.forEach((doc) => {
        idAllNewsletter.push(doc.id);
      });
      const checkAvalaibleData = idAllNewsletter.filter(
        (data) => data.timeInNumber === timeInNumber
      );
      if (!title || title == "") {
        return res.status(400).json({ message: "title cannot empty" });
      } else if (!image_url || image_url == "") {
        return res.status(400).json({ message: "image cannot empty" });
      } else if (!image_path || image_path == "") {
        return res.status(400).json({ message: "image cannot empty" });
      } else if (!content || content == "") {
        return res.status(400).json({ message: "content cannot empty" });
      } else if (checkAvalaibleData.length > 0) {
        return res.status(400).json({
          message: "this Newsletter has been registered before!",
        });
      } else {
        req.body.time = time;
        req.body.timeInNumber = timeInNumber;
        const result = await NewsletterModel.addNewsletter(
          req.body,
          String(timeInNumber)
        );
        return res.status(201).json({ message: req.body });
      }
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
  static async updateData(req, res) {
    try {
      let timeInNumber = req.params.id;
      const data = await NewsletterModel.getOne(timeInNumber);
      if (!data.data()) {
        return res.status(404).json({ message: "data not found" });
      } else {
        const update = await NewsletterModel.updateNewsletter(
          req.body,
          timeInNumber
        );
        req.body.time = data.data().time;
        req.body.timeInNumber = data.data().timeInNumber;
        req.body.image_path = data.data().image_path;
        return res.status(200).json({ message: req.body });
      }
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  static async deleteData(req, res) {
    try {
      let params = req.params.id;
      const deleted = await NewsletterModel.deleteNewsletter(params);
      return res.status(200).json({ message: "success delete newsletter" });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

module.exports = NewsletterController;
