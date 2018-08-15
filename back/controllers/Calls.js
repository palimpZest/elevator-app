const Call = require('../models/Call');

const Calls = {
  create: (req, res, next) => {
    new Call({
      name: req.body.name || req.query.name,
      floor: req.body.floor || req.query.floor,
      created_at: new Date()
    }).save(err => {
      if (err) {
        res.render(err);
      } else {
        console.log(req.body);
        console.log('Elevator called');
        res.send('New elevator call !');
      }
    });
  },
  read: (req, res, next) => {
    Call.find({}, 'name floor created_at').exec((error, results) => {
      if (results.length == 0) {
        res.send("There's been an error. No data.");
      } else {
        res.send(results);
        console.log(results);
      }
    });
  }
};

module.exports = Calls;
