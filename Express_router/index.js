const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
