const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// route responsible for bringing all users registered
router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.post('/register', userController.registerUser);

router.put('/:id/edit', userController.updateUser);

router.delete('/:id/destroy', userController.deleteUserById);

module.exports = router;