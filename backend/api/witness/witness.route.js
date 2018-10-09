const express = require("express");
const witnessController = require("./witness.controller");

const router = express.Router();

router.route("/").get(witnessController.listConfirmed);

module.exports = router;
