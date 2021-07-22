const PRODUCTS = [
  {
    id: 1,
    description: 'Samsung Galaxy S9',
    price: 15.00,
    image: 'samsung-galaxy-s9-xxl.jpg'
  },
  {
    id: 2,
    description: 'LG G6',
    price: 10.00,
    image: 'l6g6.jpg'
  },
  {
    id: 3,
    description: 'iPhone 8',
    price: 18.00,
    image: 'iphone-8.png'
  },
  {
    id: 4,
    description: 'Motorola G5',
    price: 9.00,
    image: 'motorola-moto-g5-plus-1.jpg'
  },
  {
    id: 5,
    description: 'Motorola G4',
    price: 8.00,
    image: 'motorola-moto-g4-3.jpg'
  },
  {
    id: 6,
    description: 'Sony Xperia XZ2',
    price: 10.000,
    image: '003.jpg'
  },
  
]

class ProductService {
  getAllProducts() {
    return PRODUCTS;
  }

  getProductBySlug(slug) {
    const product = PRODUCTS.find(product => {
      const productSlug = product.description.split(' ').join('_').toLowerCase();
      return productSlug == slug
    });

    return product;
  }
}

module.exports = ProductService;