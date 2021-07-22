class ChekoutController {
  constructor(productService, mercadoPagoService) {
    this.productService = productService;
    this.mercadoPagoService = mercadoPagoService;
  }
  createPreferences = async (req, res, next) => {
    const { slug } = req.params
    const product = this.productService.getProductBySlug(slug);
    const preferences = await this.mercadoPagoService.createPreferences(product, 1);
    return res.redirect(preferences.init_point);
  }
}

module.exports = ChekoutController;