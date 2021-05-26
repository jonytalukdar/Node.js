const express = require('express');
const app = express();

app.get('/about', (req, res) => {
  res.send('this is about page');
});

app.get('/help', (req, res) => {
  res.send('this is help page');
});

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('*', (req, res) => {
  res.send('404 page not found');
});

const PORT = process.env.PORT || 1200;
app.listen(PORT, () => console.log(`Server is started at ${PORT}`));
