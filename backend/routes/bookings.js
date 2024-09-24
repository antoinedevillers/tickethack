var express = require('express');
var router = express.Router();

const Booking = require('../models/bookings');

/* GET trips sélectionnés + price quand on est dans panier*/

router.get('/', (req, res) => {
    Booking.find().then(data => {
        console.log(data);
        res.json({data});
    })
});

  /* POST des trips de panier dans booking */
  
  /* DELETE des trips non sélectionnés ou */
  
module.exports = router;