const Product = require('../models/productModel');
const APIFeatures = require('../utlis/apiFeatures');
const AppError = require('../utlis/appError');
const catchAsync = require('../utlis/catchAsync');

// middleware
exports.aliasTopRatedProducts = (req, res, next) => {
  req.query.sort = '-ratingsAverage,price';
  req.query.limit = '10';
  req.query.fields = 'name,categories,price,ratingsAverage,images';
  next();
};

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Product.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const products = await features.query;

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products,
    },
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate({
    path: 'reviews',
    select: 'review rating user createdAt',
  });

  if (!product) return next(new AppError('No product found with that ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      product: newProduct,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) return next(new AppError('No product found with that ID', 404));

  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);

  if (!product) return next(new AppError('No product found with that ID', 404));

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
