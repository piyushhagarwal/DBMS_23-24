const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  q: {
    type: String,
    required: true,
  },
  //Ans is an array of objects
  //Each object has two keys: heading and description
  //heading is a string
  //description is a string
  ans: [
    {
      heading: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  //The category field is a reference to the Category model
  //The type is mongoose.Schema.Types.ObjectId
  //The ref is "Category"
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
