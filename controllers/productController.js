const Product = require('../models/productModel');
const factory = require('./handleFactory');

// middleware
exports.aliasTopRatedProducts = (req, res, next) => {
  req.query.sort = '-ratingsAverage,price';
  req.query.limit = '10';
  req.query.fields = 'name,categories,price,ratingsAverage,images';
  next();
};

exports.getAllProducts = factory.getAll(Product);
exports.getProduct = factory.getOne(Product, { path: 'reviews' });
exports.createProduct = factory.createOne(Product);
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
