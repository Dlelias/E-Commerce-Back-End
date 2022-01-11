const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 9.99,
    stock: 25,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 125.0,
    stock: 10,
    category_id: 5,
  },
  {
    product_name: 'MLB Baseball Hat',
    price: 29.0,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;