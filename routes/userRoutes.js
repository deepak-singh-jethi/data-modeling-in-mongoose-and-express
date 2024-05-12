const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// ! all protected routes after this middleware

router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);

router.route('/me').get(userController.getMe, userController.getUser);

router.patch('/updateMe', userController.updateMe);

router.delete('/deleteMe', userController.deleteMe);

// ! all admin routes after this middleware
router.use(authController.restrictTo('admin'));

router.route('/').get(userController.getAllUsers);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
