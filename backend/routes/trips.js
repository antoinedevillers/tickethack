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


module.exports = router;
