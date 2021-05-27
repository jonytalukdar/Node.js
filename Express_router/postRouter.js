const postRouter = require('express').Router();
const {
  getAllPost,
  createPost,
  updatePost,
  deletePost,
} = require('./postController');

postRouter.get('/', getAllPost);

postRouter.post('/', createPost);

postRouter.put('/:postId', updatePost);

postRouter.delete('/:postId', deletePost);

module.exports = postRouter;
