const Category = require("../models/category");

const getCategories = async (req, res) => {
  try {
    const { gender, age, occupation, disable, language } = req.query;
    const categories = [];

    if (language === "English") {
      if (age >= 18 && age < 60) {
        categories.push("Voting Rights");
      } else if (age >= 60) {
        categories.push("Voting Rights");
        categories.push("Senior Citizen Rights");
      }

      if (disable === "true") {
        categories.push("Disability Rights");
      }

      if (gender === "Women") {
        categories.push("Women Rights");
      } else if (gender === "Other") {
        categories.push("LQBTQ Rights");
      }

      if (occupation === "Student") {
        categories.push("Students' Rights");
      } else if (occupation === "Employee") {
        categories.push("Employee Rights");
      } else if (occupation === "Labour") {
        categories.push("Labour Rights");
      }
    } else if (language === "Hindi") {
      if (age >= 18 && age < 60) {
        categories.push("मतदान अधिकार");
      } else if (age >= 60) {
        categories.push("मतदान अधिकार");
        categories.push("वरिष्ठ नागरिक अधिकार");
      }

      if (disable === "true") {
        categories.push("दिव्यांगजन अधिकार");
      }

      if (gender === "Women") {
        categories.push("महिला अधिकार");
      } else if (gender === "Other") {
        categories.push("एल.जी.बी.टी.क्यू+ अधिकार");
      }

      if (occupation === "Student") {
        categories.push("छात्रों के अधिकार");
      } else if (occupation === "Employee") {
        categories.push("कर्मचारी अधिकार");
      } else if (occupation === "Labour") {
        categories.push("श्रमिक अधिकार");
      }
    }

    const categoriesDocs = await Category.find({ name: { $in: categories } });
    res.status(200).json({ categories: categoriesDocs });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getCategories,
};
