class PaymentController {
  success = (req, res) => {
    console.log(req.query)
    const { payment_type, external_reference, collection_id} = req.query
    return res.render('success', { payment_type, external_reference, collection_id });
  }

  failure = (req, res) => {
    const { payment_type, external_reference, collection_id} = req.query
    return res.render('failure', { payment_type, external_reference, collection_id });
  }

  pending = (req, res) => {
    const { payment_type, external_reference, collection_id} = req.query
    return res.render('pending', { payment_type, external_reference, collection_id });
  }
}


module.exports = PaymentController