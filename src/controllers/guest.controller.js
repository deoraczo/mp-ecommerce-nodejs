
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
      price: product.price.toFixed(3),
      slug: product.description.split(' ').join('_').toLowerCase(),
      imageURL: buildImageUrl(product.image)
    }));

    res.render('home', {products});
  }

  getProductBySlug = async (req, res) => {
    const { slug } = req.params
    const product = this.productService.getProductBySlug(slug);
    console.log(product);
    res.render('detail', { product })
  }
}


module.exports = GuestController
