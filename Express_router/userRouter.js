const userRouter = require('express').Router();

userRouter.get('/login', (req, res) => {
  res.send('<h1>This is Login page </h1>');
});

userRouter.get('/signup', (req, res) => {
  res.send('<h1>This is signin page </h1>');
});

userRouter.get('/logout', (req, res) => {
  res.send('<h1>This is logout page </h1>');
});

module.exports = userRouter;
