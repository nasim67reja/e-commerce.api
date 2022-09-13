const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      default: 1,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'Cart Item must belong to a product'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Cart Item must belong to a user'],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const CartItem = mongoose.model('CartItem', cartItemSchema);
module.exports = CartItem;
