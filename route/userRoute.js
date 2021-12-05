const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.patch('/updatePassword', authController.updatePassword);
router.patch('/updateUser', authController.updateUser);
router.delete('/deleteUser', authController.deleteUser);

module.exports = router;
