const poetModel = require("../model/poetModel");
exports.createPoet = async (req, res) => {
  try {
    console.log(req.body);
    const data = await poetModel.create(req.body);
    res.status(201).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

exports.getPoet = async (req, res) => {
  try {
    const result = awaitPoetModel.find();
    res.status(200).json({ success: true, results });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
