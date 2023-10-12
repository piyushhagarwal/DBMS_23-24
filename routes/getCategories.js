const { getCategories } = require("../controllers/getCategories");
const express = require("express");

const router = express.Router();

router.route("/").get(getCategories);

module.exports = router;
