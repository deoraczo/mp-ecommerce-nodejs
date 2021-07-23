const PRODUCTS = [
  {
    id: 1,
    name: 'Samsung Galaxy S9',
    price: 1500,
    image: 'samsung-galaxy-s9-xxl.jpg'
  },
  {
    id: 2,
    name: 'LG G6',
    price: 500,
    image: 'l6g6.jpg'
  },
  {
    id: 3,
    name: 'iPhone 8',
    price: 2563,
    image: 'iphone-8.png'
  },
  {
    id: 4,
    name: 'Motorola G5',
    price: 4562,
    image: 'motorola-moto-g5-plus-1.jpg'
  },
  {
    id: 5,
    name: 'Motorola G4',
    price: 356,
    image: 'motorola-moto-g4-3.jpg'
  },
  {
    id: 6,
    name: 'Sony Xperia XZ2',
    price: 500,
    image: '003.jpg'
  },
  
]

class ProductService {
  getAllProducts() {
    return PRODUCTS;
  }

  getProductBySlug(slug) {
    const product = PRODUCTS.find(product => {
      const productSlug = product.name.split(' ').join('_').toLowerCase();
      return productSlug == slug
    });

    return product;
  }
}

module.exports = ProductService;