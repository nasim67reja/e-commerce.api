const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A Product must have name'],
      unique: true,
      trim: true,
    },
    categories: {
      type: String,
      required: [true, 'A Product must be belong to a category'],
    },
    ratingsAverage: {
      type: Number,
      default: 0,
      // min: [1, 'Rating must be above 1.0'],
      // max: [5, 'Rating must be below 5.0'],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A Product must have a price'],
    },
    priceDiscount: {
      type: Number,
    },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A Product must have a summary'],
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      // required: [true, 'A Product must have a cover image'],
    },
    sell: {
      type: Number,
      default: 0,
    },
    images: [String],
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
// Indexes
productSchema.index({ price: 1, ratingsAverage: -1 });
// productSchema.index({ slug: 1 });

productSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product',
  localField: '_id',
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
