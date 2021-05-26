const userRouter = require('express').Router();

// user router

userRouter.get('/login', (req, res) => {
  res.send('I am login route');
});
userRouter.get('/signup', (req, res) => {
  res.send('I am signup route');
});
userRouter.get('/logout', (req, res) => {
  res.send('I am logout route');
});

// user router end

module.exports = userRouter;
