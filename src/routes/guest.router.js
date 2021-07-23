const { Router } = require('express');
const GuestController = require('../controllers/guest.controller');
const ProductService = require('../services/produc.service');

const productService = new ProductService();
const guestController = new GuestController(productService);
const guestRouter = Router();


guestRouter.get('/products/:slug', guestController.getProductBySlug);
guestRouter.get('/', guestController.home);

module.exports = guestRouter;

