var express = require('express');
var router = express.Router();
const Calls = require("../controllers/Calls");

router
  .route("/")
  .get(Calls.read)
  .post(Calls.create);

module.exports = router;
