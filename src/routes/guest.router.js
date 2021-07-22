const { Router } = require('express');
const GuestController = require('../controllers/guest.controller');
const ProductService = require('../services/produc.service');

const productService = new ProductService();
const guestController = new GuestController(productService);
const guestRouter = Router();


guestRouter.get('/', guestController.home);
guestRouter.get('/:slug', guestController.getProductBySlug);

module.exports = guestRouter;

