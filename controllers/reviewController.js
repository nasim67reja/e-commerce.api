const catchAsync = require('../utlis/catchAsync');
const Review = require('../models/reviewModel');

exports.getAllReviews = catchAsync(async (req, res, next) => {
  const reviews = await Review.find().populate('user');

  res.status(200).json({
    status: 'success',
    results: reviews.length,
    data: {
      reviews,
    },
  });
});

exports.createReview = catchAsync(async (req, res, next) => {
  // Allow nested routes
  if (!req.body.tour) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user.id;

  const newReview = await Review.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      review: newReview,
    },
  });
});
