const express = require('express');
const userRouter = require('./userRouter');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('<h1>hello world</h1>');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The Server Started At ${PORT}`);
});
