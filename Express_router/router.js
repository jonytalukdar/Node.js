const router = require('express').Router();

// user router

router.get('/login', (req, res) => {
  res.send('I am login route');
});
router.get('/signup', (req, res) => {
  res.send('I am signup route');
});
router.get('/logout', (req, res) => {
  res.send('I am logout route');
});

// user router end

module.exports = router;
