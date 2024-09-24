const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    timeLeftBeforeDeparture: Number,
    price: Number,
    isBooked: Boolean,
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;