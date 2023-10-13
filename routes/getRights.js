const { getRights } = require("../controllers/getRights");
const express = require("express");

const router = express.Router();

router.route("/:id").get(getRights);

module.exports = router;
