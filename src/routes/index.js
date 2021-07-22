const { Router } = require('express');
const guestRouter = require('./guest.router');
const paymentRouter = require('./payment.router');

const router = Router();

router.use('/payment', paymentRouter);
router.use('/', guestRouter);

module.exports = router;
