var express = require('express');
var router = express.Router();
const Calls = require("../controllers/Calls");

router
  .route("/")
  .get(Calls.read)
  .post(Calls.create);

router
  .route("/api")
  .get(function(req, res, next) {
    res.send({results});
  });

module.exports = router;

const results = [
    {
      floor_number: 9,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: 8,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: 7,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: 6,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: 5,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: 4,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: 3,
      floor_position: "yes",
      door_status: "open",
      vertical_status: "immobile",
      call_activation: "disabled"
    },
    {
      floor_number: 2,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: 1,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: 0,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: -1,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: -2,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: -3,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: -4,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    },
    {
      floor_number: -5,
      floor_position: "no",
      door_status: "closed",
      vertical_status: "immobile",
      call_activation: "possible"
    }
];