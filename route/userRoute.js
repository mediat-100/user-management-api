const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/sign-up', authController.signup);
router.post('/login', authController.login);
router.patch(
  '/updatePassword',
  authController.protect,
  authController.updatePassword
);
router.patch(
  '/updateUser',
  authController.protect,
  authController.uploadUserPhoto,
  authController.resizeUserPhoto,
  authController.updateUser
);
router.delete('/deleteUser', authController.protect, authController.deleteUser);

module.exports = router;
