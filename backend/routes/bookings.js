var express = require('express');
var router = express.Router();

const Booking = require('../models/bookings');

/* GET trips sélectionnés + price quand on est dans panier*/

router.get('/', (req, res) => {
    Booking.find().then(data => {
        console.log(data);
        res.json(data);
    })
});

  /* POST des trips de panier dans booking */
  
  router.post('/', (req, res) => {

    //  const timeLeftCalculated = (Date.parse(Number(req.body.date)) - Date.now) /60000

      const newBooking = new Booking({
  
        departure: req.body.departure,
        arrival: req.body.arrival,
        date: req.body.date,
        timeLeftBeforeDeparture: req.body.timeLeftBeforeDeparture,
        price: req.body.price,
        isBooked: false

      })
      newBooking.save().then(() => {
 
      Booking.find().then(newBooking => {
        console.log(newBooking);
      });
     
      res.json({ result: true, booking: newBooking })
    })
    
  })
  /* DELETE des trips non sélectionnés ou */
  router.delete("/:id", (req, res) => {
    Booking.deleteOne({_id: req.params.id}).then(deletedDoc => {
      if (deletedDoc.deletedCount > 0) {
        // document successfully deleted
        console.log(deletedDoc)
        Booking.find().then(data => {
          res.json({ result: true, Booking: data });
        });
      } else {
        res.json({ result: false, error: "Booking not found" });
      }
    });
  });
module.exports = router;