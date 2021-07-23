
const buildImageUrl = (image) => {
  return `/assets/images/phones/${image}`
}

class GuestController {
  constructor (productService) {
    this.productService = productService;
  }
  home = async (req, res) => {
    const products = this.productService.getAllProducts().map(product => ({
      ...product,
      slug: product.name.split(' ').join('_').toLowerCase(),
      imageURL: buildImageUrl(product.image)
    }));

    return res.render('home', {products});
    console.log('pado');
  }

  getProductBySlug = async (req, res) => {
    const { slug } = req.params
    const product = this.productService.getProductBySlug(slug);
    return res.render('detail', { product: { ...product, slug: product.name.split(' ').join('_').toLowerCase() } })
  }
}


module.exports = GuestController
