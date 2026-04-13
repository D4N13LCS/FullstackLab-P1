const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// route responsible for bringing all users registered
router.get('/users', userController.getAllUsers);

router.get('/users/:id', userController.getUserById);

router.post('/users/register', userController.registerUser);

router.put('/users/:id/edit', userController.updateUser);

router.delete('/users/:id/destroy', userController.deleteUserById);

// route responsible for bringing an specific user registered
// router.get('/:id');

// route responsible for registering a new user
// router.post('/');

// route responsible for updating some information of an existent user
// router.put('/');

// route responsible for deleting an specific user
// router.delete('/');

module.exports = router;