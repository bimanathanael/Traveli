const IndonesiaModel = require("../models/Indonesia");

class IndonesiaController {
  static async readData(req, res) {
    try {
      const data = await IndonesiaModel.getAll();
      const result = [];
      data.forEach((doc) => {
        result.push(doc.data());
      });
      return res.status(200).json({ message: result });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }

  static async readOneData(req, res) {
    try {
      const param = req.params.pages;
      const data = await IndonesiaModel.getOne(param);
      if (!data.data()) {
        return res.status(404).json({ message: "data not found" });
      } else {
        let unordered = data.data();
        const ordered = Object.entries(unordered)
          .sort()
          .reduce((o, [k, v]) => ((o[k] = v), o), {});

        return res.status(200).json({ message: ordered });
      }
    } catch (err) {
      return res.status(404).json({ message: err });
    }
  }

  static async readSpecifyData(req, res) {
    try {
      const pages = req.params.pages;
      const section = req.params.section;
      const data = await IndonesiaModel.getOne(pages);
      if (!data.data()) {
        return res.status(404).json({ message: "data not found" });
      } else {
        let unordered = data.data();
        const ordered = Object.entries(unordered)
          .sort()
          .reduce((o, [k, v]) => ((o[k] = v), o), {});
        let sortedList = {};
        for (let [key, value] of Object.entries(ordered)) {
          if (key.slice(0, section.length) === section) {
            sortedList[key] = value;
          }
        }
        let checkSection = 0;
        for (var key in sortedList) {
          if (sortedList.hasOwnProperty(key)) {
            checkSection += 1;
          }
        }
        if (checkSection === 0) {
          return res.status(404).json({ message: "data not found" });
        } else {
          const newList = {};
          for (const [key, value] of Object.entries(sortedList)) {
            if (key !== pages && key.split(/(?=[A-Z])/)[0] === section) {
              newList[key] = value;
            }
          }
          return res.status(200).json({ message: newList });
        }
      }
    } catch (err) {
      return res.status(404).json({ message: err });
    }
  }
  static async addData(req, res) {
    try {
      let pages = req.params.pages;
      let section = req.params.section;

      const dataFromDB = await IndonesiaModel.getAll();
      let idAllData = [];
      dataFromDB.forEach((doc) => {
        idAllData.push(doc.id);
      });
      const checkAvalaibleData = idAllData.filter((data) => data === pages);
      if (checkAvalaibleData.length > 0) {
        return res
          .status(400)
          .json({ message: "this pages has been registered before" });
      } else {
        const newData = {
          [section]: req.body,
        };
        const result = await IndonesiaModel.addBahasa(newData, pages);
        return res.status(201).json({ message: "success add Data" });
      }
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }

  static async updateData(req, res) {
    try {
      let pages = req.params.pages;
      let section = req.params.section;
      const updateData = {
        [section]: req.body,
      };
      const result = await IndonesiaModel.updateBahasa(updateData, pages);
      const refetchData = await IndonesiaModel.getOne(pages);

      return res.status(201).json({ message: refetchData.data() });
    } catch (err) {
      return res.status(500).json({ message: err });
    }
  }
}

module.exports = IndonesiaController;
