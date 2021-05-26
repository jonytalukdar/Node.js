const postRouter = require('express').Router();

postRouter.get('/', (req, res) => {
  res.send('Render some post');
});

postRouter.post('/', (req, res) => {
  res.send('Create a new post');
});

postRouter.put('/', (req, res) => {
  res.send('Update existing post');
});

postRouter.delete('/', (req, res) => {
  res.send('Delete existing post');
});

module.exports = postRouter;
