const postRouter = require('express').Router();

postRouter.get('/', (req, res) => {
  let { category, tech, filter } = req.query;
  res.send('Render some post');
});

postRouter.post('/', (req, res) => {
  res.send('Create a new post');
});

postRouter.put('/:postId', (req, res) => {
  res.send('Update existing post' + req.params.postId);
});

postRouter.delete('/:postId', (req, res) => {
  res.send('Delete existing post' + req.params.postId);
});

module.exports = postRouter;
