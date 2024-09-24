var express = require('express');
var router = express.Router();

const Trip = require('../models/trip');

/* GET trips listing. */
router.get('/:departure/:arrival/:date', function(req, res) {



  res.send('respond with a resource');
});

module.exports = router;
