const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seatsSechma = new Schema({
  seatNumber: {
    type: Number,
    required: true
  },
  isBooked: {
    type: Boolean,
    default: false
  },
  rowNumber: {
    type: Number,
    required: true
  },
});

const Seat = mongoose.model('seat', seatsSechma);

module.exports = Seat;
