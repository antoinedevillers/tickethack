var express = require('express');
var router = express.Router();

const Trip = require('../models/trip');

/* GET trips listing. */
router.get('/', (req, res) =>{
  Trip.find().then(data=> {
    console.log('AllTrips =>', data)
  

  console.log(data)



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
