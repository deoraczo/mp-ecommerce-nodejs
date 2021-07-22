class PaymentController {
  pay = async (req, res, next) => {
    console.log(req);
    res.send('hola');
  }
}

module.exports = PaymentController;