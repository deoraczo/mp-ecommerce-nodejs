class ChekoutController {
  constructor(productService, mercadoPagoService) {
    this.productService = productService;
    this.mercadoPagoService = mercadoPagoService;
  }
  createPreferences = async (req, res, next) => {
    const { slug } = req.params
    const product = this.productService.getProductBySlug(slug);
    try {
      const preferences = await this.mercadoPagoService.createPreferences(product, 1);
      console.log(preferences, "response preferences");
      return res.redirect(preferences.init_point);
    } catch (error) {
      return res.redirect('/');
    }
  }
}

module.exports = ChekoutController;