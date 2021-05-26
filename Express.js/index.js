const express = require('express');
const morgan = require('morgan');
const app = express();

// app.use(morgan('dev'));

const customMiddleware = (req, res, next) => {
  if (req.url === '/about') {
    res.send('<h1>This page is blocked by admin');
  }
  next();
};

const tinyLogger = () => {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
};

const middleware = [customMiddleware, tinyLogger()];

app.use(middleware);

app.get('/about', morgan('dev'), (req, res) => {
  res.send('this is about page');
});

app.get('/help', (req, res) => {
  res.send('this is help page');
});

app.get('/json', (req, res) => {
  res.json({
    name: 'joney talukdar',
    age: 21,
    profession: 'full stack web developer',
  });
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('*', (req, res) => {
  res.send('404 page not found');
});

const PORT = process.env.PORT || 1200;
app.listen(PORT, () => console.log(`Server is started at ${PORT}`));
