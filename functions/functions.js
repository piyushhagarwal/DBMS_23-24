const mongoose = require("mongoose");
const Category = require("../models/category");
const Question = require("../models/English");
const { English } = require("./englishData");
const { Hindi } = require("./hindiData");

const insertCategory = async () => {
  try {
    //Adding English Data
    const categoryDocsEnglish = English.map(({ catName, catDesc }) => ({
      name: catName,
      description: catDesc,
      language: "English",
    }));

    await Category.insertMany(categoryDocsEnglish);

    //Adding Hindi Data
    const categoryDocsHindi = Hindi.map(({ catName, catDesc }) => ({
      name: catName,
      description: catDesc,
      language: "Hindi",
    }));

    await Category.insertMany(categoryDocsHindi);

    console.log("Data Inserted Successfully");
  } catch (error) {
    console.error(error);
  }
};

const insertQuestions = async () => {
  try {
    const categoryDocs = await Category.find();
    const questionDocs = English.map(({ catName, catQues }) => {
      const category = categoryDocs.find(
        (category) => category.name === catName
      );

      return catQues.map(({ q, ans }) => ({
        q,
        ans,
        category: category._id,
      }));
    });

    const flatQuestionDocs = questionDocs.flat();

    await Question.insertMany(flatQuestionDocs);

    console.log("Data Inserted Successfully");
  } catch (error) {
    console.error(error);
  }
};

module.exports = { insertCategory, insertQuestions };
