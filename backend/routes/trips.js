var express = require('express');
var router = express.Router();

const Trip = require('../models/trip');

/* GET trips listing. */
router.get('/:departure/:arrival/:date', (req, res) =>{
  Trip.find({departure: req.params.departure, arrival: req.params.arrival, date: req.params.date})
  .then(data=> {
      console.log('AllTrips =>', data)

    res.json(data);
  })
});



/* GET trips sélectionnés + price quand on est dans panier*/

router.get('/', (req, res) => {

  res.json();
});
/* POST des trips de panier dans booking */

/* DELETE des trips non sélectionnés ou */

module.exports = router;
