const { Router } = require('express');
const checkoutRouter = require('./checkout.router');
const guestRouter = require('./guest.router');
const paymentRouter = require('./payment.router');

const router = Router();

router.use('/payments', paymentRouter);
router.use('/checkout', checkoutRouter);
router.use('/', guestRouter);

module.exports = router;
