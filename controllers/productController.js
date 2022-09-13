const Product = require('../models/productModel');
const factory = require('./handleFactory');

// middleware
exports.aliasTopRatedProducts = (req, res, next) => {
  req.query.sort = '-ratingsAverage,price';
  req.query.limit = '10';
  req.query.fields =
    'name,categories,price,ratingsAverage,images,ratingsQuantity';
  next();
};

exports.getAllProducts = factory.getAll(Product);
exports.getProduct = factory.getOne(Product, { path: 'reviews' });
exports.createProduct = factory.createOne(Product);
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);

exports.getProductCat = async (req, res) => {
  try {
    const category = await Product.aggregate([
      {
        $group: {
          _id: '$categories',
          numProducts: { $sum: 1 },
          numRatings: { $sum: '$ratingsQuantity' },
          avgRating: { $avg: '$ratingsAverage' },
        },
      },
      {
        $project: {
          _id: 1,
        },
      },
    ]);
    res.status(200).json({
      status: 'success',
      data: {
        category,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
