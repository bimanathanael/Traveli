const PromoModel = require("../models/Promo");

class PromoController {
  static async getData(req, res) {
    try {
      const data = await PromoModel.getAll();
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
      const data = await PromoModel.getOne(param);
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
      let date = new Date();
      const listMonth = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
      ];
      let title = req.body.title;
      let image_url = req.body.image_url;
      let image_path = req.body.image_path;
      let content = req.body.content;
      const time = `${date.getDate()} ${
        listMonth[date.getMonth()]
      } ${date.getFullYear()}`;
      const timeInNumber = Date.now();

      const dataFromDB = await PromoModel.getAll();
      let idAllPromo = [];
      dataFromDB.forEach((doc) => {
        idAllPromo.push(doc.id);
      });
      const checkAvalaibleData = idAllPromo.filter(
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
          message: "this promo has been registered before!",
        });
      } else {
        req.body.time = time;
        req.body.timeInNumber = timeInNumber;
        const result = await PromoModel.addPromo(
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
      const data = await PromoModel.getOne(timeInNumber);
      if (!data.data()) {
        return res.status(404).json({ message: "data not found" });
      } else {
        const update = await PromoModel.updatePromo(req.body, timeInNumber);
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
      const deletePromo = await PromoModel.deletePromo(params);
      return res.status(200).json({ message: "success delete promo" });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

module.exports = PromoController;
