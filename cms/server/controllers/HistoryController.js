const HistoryModel = require("../models/History");

class HistoryController {
  static async readData(req, res) {
    try {
      const data = await HistoryModel.getAll();
      const result = [];
      data.forEach((doc) => {
        result.push(doc.data());
      });
      let filter = [];
      for (let i = 0; i < data.length; i++) {
        filter.push(data[i]);
      }
      return res.status(200).json({ message: result });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async addData(req, res) {
    try {
      const username = req.body.username;
      const pages = req.body.pages;
      const section = req.body.section.split(/(?=[A-Z])/).join(" ");
      const time = new Date();
      const timeInNumber = time.getTime();

      const newData = {
        username,
        pages,
        section,
        time: String(time).split(" ").slice(0, 5).join(" "),
        timeInNumber,
      };

      const result = await HistoryModel.addHistory(newData);
      return res.status(201).json({ message: newData });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

module.exports = HistoryController;
