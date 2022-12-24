const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const cartItemRouter = require('./cartRoutes');
///// 3. ROUTES

const router = express.Router();
router.use('/:userId/carts', cartItemRouter);

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);
router.get('/me', userController.getMe, userController.getUser);

router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.patch('/deleteMe', userController.deleteMe);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(authController.restrictTo('admin'), userController.createUser);

router.route('/:id').get(userController.getUser);

router.use(authController.restrictTo('admin'));
router
  .route('/:id')
  .patch(
    userController.uploadUserPhoto,
    userController.resizeUserPhoto,
    userController.updateUser
  )
  .delete(userController.deleteUser);

module.exports = router;
