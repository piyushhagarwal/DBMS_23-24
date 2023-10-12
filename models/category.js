const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  // the language type should be enum of "English", "Hindi", "Marathi"
  language: {
    type: String,
    required: true,
    enum: ["English", "Hindi", "Marathi"],
  },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
