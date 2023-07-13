const express = require('express');
const router = express.Router();
const { bookingController, resetSeatsController, getSeats } = require('../controller/seats.controller');

//  reset all seats
router.post('/', resetSeatsController)

//  get all seats
router.get('/', getSeats);

//  book seats
router.post('/book', bookingController);

module.exports = router;
