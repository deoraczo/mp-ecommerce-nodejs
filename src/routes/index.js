const { Router } = require('express');
const checkoutRouter = require('./checkout.router');
const guestRouter = require('./guest.router');
const paymentRouter = require('./payment.router');

const router = Router();

router.post('/hook', (req, res) => {
  let body = ""; 

  req.on("data", chunk => {  
    body += chunk.toString();
  });

  req.on("end", () => {  
    console.log(body, "response webhook"); 
    res.end("ok");
  });    

  return res.status(200);
})
router.use('/', guestRouter);
router.use('/payments', paymentRouter);
router.use('/checkout', checkoutRouter);

module.exports = router;
