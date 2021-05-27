exports.getAllPost = (req, res) => {
  let { category, tech, filter } = req.query;
  res.send('Render some post');
};

exports.createPost = (req, res) => {
  res.send('Create a new post');
};

exports.updatePost = (req, res) => {
  res.send('Update existing post' + req.params.postId);
};

exports.deletePost = (req, res) => {
  res.send('Delete existing post' + req.params.postId);
};
