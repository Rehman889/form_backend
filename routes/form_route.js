const express = require("express");
const {addForm} = require("../controllers/form_controller.js");

const router = express.Router();

router.post('/addform', addForm);

module.exports = router;