const Category = require("../models/category");

const getCategories = async (req, res) => {
  try {
    const { gender, age, occupation, disable } = req.query;
    const categories = [];

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
      categories.push("LGBTQ Rights");
    }

    if (occupation === "Student") {
      categories.push("Students' Rights");
    } else if (occupation === "Employee") {
      categories.push("Employee Rights");
    } else if (occupation === "Labour") {
      categories.push("Labour Rights");
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
