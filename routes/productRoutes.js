const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

// don't put this below /:id route
router
  .route('/top-10-rated')
  .get(
    productController.aliasTopRatedProducts,
    productController.getAllProducts
  );

router
  .route('/')
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
