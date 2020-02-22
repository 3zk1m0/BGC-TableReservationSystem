const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    Date: Date,
    Time: Date,
    Name: String,
    Heads: Number,
    Strangers: Number,
    Table: Number,
    Duration: Number
});

const Reservation = mongoose.model('Reservation', ReservationSchema);


module.exports = Reservation;