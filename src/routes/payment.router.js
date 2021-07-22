const PaymentController = require('../controllers/payment.controller');

const { Router } = require('express');

const paymentRouter = Router();
const paymentController = new PaymentController();


paymentRouter.post("/pay", paymentController.pay)

module.exports = paymentRouter;
