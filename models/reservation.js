const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    startTime: Date,
    endTime: Date,
    Name: String,
    Heads: Number,
    Strangers: Number,
    Table: Number,
    Duration: Number,
    Arrived: Boolean
});

const Reservation = mongoose.model('Reservation', ReservationSchema);


module.exports = Reservation;