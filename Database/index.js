const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({
    welcome: 'Hello world',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Started At ${PORT}`));
