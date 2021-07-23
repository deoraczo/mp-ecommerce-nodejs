const axios = require('axios');
const mercadopago = require('mercadopago');

class MercadoPagoService {
  constructor() {
    mercadopago.configure({
      access_token: process.env.MERCADOPAGO_ACCESS_TOKEN,
      integrator_id: process.env.MERCADOPAGO_INTEGRATOR_ID
    })
  }

  createPreferences = async (product, quantity = 1) => {
    const items = [
      {
        id: '1234',
        title: product.name,
        description: 'Dispositivo móvil de Tienda e-commerce',
        picture_url: `https://deoraczo-mp-commerce-nodejs.herokuapp.com/assets/images/phones/${product.image}`,
        category_id: 'cat123',
        currency_id: "PEN",
        quantity: parseInt(quantity),
        unit_price: parseFloat(product.price),
      }
    ];

    const response = await mercadopago.preferences.create({
      items,
      payer: {
        name: 'Lalo',
        surname: 'Landa',
        email: 'test_user_46542185@testuser.com',
        phone: {
          area_code: '11',
          number: 22223333
        },
        address: {
          street_name: 'False',
          street_number: 123,
          zip_code: '1111'
        }
      },
      payment_methods: {
        excluded_payment_methods: [
          {
            id: 'Diners'
          }
        ],
        excluded_payment_types: [
          {
            id: 'atm'
          }
        ],
        installments: 6,
        default_installments: 6,
      },
      back_urls: {
        success: `${process.env.APP_URL}/payments/success`,
        failure: `${process.env.APP_URL}/payments/failure`,
        pending: `${process.env.APP_URL}/payments/pending`,
      },
      notification_url: `${process.env.APP_URL}/hook`,
      external_reference: 'deoraczo@gmail.com',
      auto_return: 'approved'
    })

    return response.body
  }
}

module.exports = MercadoPagoService;