var express = require('express');
var router = express.Router();
const Calls = require('../controllers/Calls');
const Floors = require('../controllers/Floors');

router
  .route('/')
  .get(Calls.read)
  .post(Calls.create);

router.route('/api').get(Floors.read);

module.exports = router;
