const catchAsync = require('../utlis/catchAsync');
const AppError = require('../utlis/appError');
// const APIFeatures = require('../utlis/apiFeatures');

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const tour = await Model.findByIdAndDelete(req.params.id);

    if (!tour) {
      return next(new AppError('No document found with that ID', 404));
    }
    res.status(204).json({
      status: 'success',
      data: null,
    });
  });
