const express = require('express');
const cartController = require('../controllers/cartController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(cartController.getAllCartItem)
  .post(
    authController.protect,
    cartController.setUserId,
    cartController.createCartItem
  );

router
  .route('/:id')
  .get(cartController.getcartItem)
  .delete(cartController.deleteCartItem)
  .patch(cartController.updateCartItem);

module.exports = router;
