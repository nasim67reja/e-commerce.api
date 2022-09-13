const CartItem = require('../models/cartModel');
const factory = require('./handleFactory');

exports.setUserId = (req, res, next) => {
  if (!req.body.product) req.body.product = req.params.productId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.getAllCartItem = factory.getAll(CartItem);
exports.getcartItem = factory.getOne(CartItem);
exports.createCartItem = factory.createOne(CartItem);
exports.deleteCartItem = factory.deleteOne(CartItem);
exports.updateCartItem = factory.updateOne(CartItem);
