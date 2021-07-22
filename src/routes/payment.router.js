const { Router } = require('express');

const PaymentController = require('../controllers/payment.controller');

const paymentRouter = Router();
const paymentController = new PaymentController();


paymentRouter.get("/success", paymentController.success)
paymentRouter.get("/failure", paymentController.failure)
paymentRouter.get("/pending", paymentController.pending)

module.exports = paymentRouter;
