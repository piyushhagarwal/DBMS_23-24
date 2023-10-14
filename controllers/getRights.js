const { get } = require("mongoose");
const Question = require("../models/English");

const getRights = async (req, res) => {
  try {
    const { id } = req.params;
    const selectedRights = await Question.find({ category: id });
    res.status(200).json({ selectedRights });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getRights };
