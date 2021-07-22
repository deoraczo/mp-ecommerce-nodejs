const { Router } = require('express');
const ProductService = require('../services/produc.service');
const ChekoutController = require('../controllers/checkout.controller');
const MercadoPagoService = require('../services/mercadopago.service');

const productService = new ProductService();
const mercadoPagoService = new MercadoPagoService();
const chekoutController = new ChekoutController(productService, mercadoPagoService);

const checkoutRouter = Router();

checkoutRouter.post('/:slug/preferences', chekoutController.createPreferences)

module.exports = checkoutRouter;