const Floor = require('../models/Floor');

const Calls = {
  read: (req, res, next) => {
    Floor.find(
      {},
      'floor_number floor_position door_status vertical_status call_activation'
    ).exec((error, results) => {
      if (results.length == 0) {
        res.send('An error has occured, there are no results');
      } else {
        res.send(results);
        console.log(results);
      }
    });
  }
};

module.exports = Calls;
