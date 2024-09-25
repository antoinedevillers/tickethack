var express = require('express');
var router = express.Router();

var moment = require('moment');

const Trip = require('../models/trip');

/* GET trips listing. */
// router.get('/:departure/:arrival/:date', (req, res) => {
//   const dateFormatted = new Date(req.params.date)
//   let newDate = moment(dateFormatted).startOf('day') && moment(dateFormatted).endOf('day');
//   console.log(newDate)
//   Trip.find({ departure: req.params.departure, arrival: req.params.arrival, date: newDate })
//     .then(data => {
//       console.log('AllTrips =>', data)

//       res.json(data);
//     })
// });

router.get('/:departure/:arrival/:date', (req, res) => {
  const dateFormatted = new Date(req.params.date)
  const dateStartAndEnd =  { $gte: [moment(dateFormatted).startOf('day') ], $lte: [ moment(dateFormatted).endOf('day') ]}
 
    Trip.find({departure: req.params.departure, arrival: req.params.arrival,  date: dateStartAndEnd })
    .then(data => {
    console.log('AllTrips =>', data)


    res.json(data);

})
});


module.exports = router;
