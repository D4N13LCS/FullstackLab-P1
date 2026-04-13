const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get('/', postController.listPosts);

router.get('/:id', postController.getPost);

router.post('/register', postController.createPost);

router.put('/:id/edit', postController.updatePost);

router.delete('/:id/destroy', postController.deletePost);

module.exports = router;