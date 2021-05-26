const express = require('express');
const morgan = require('morgan');
const userRouter = require('./userRouter');
const postRouter = require('./postRouter');
const app = express();
app.use(morgan('dev'));

app.use('/user', userRouter);
app.use('/post', postRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
