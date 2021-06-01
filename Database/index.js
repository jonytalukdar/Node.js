const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

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

mongoose
  .connect(
    `mongodb+srv://adminTest:test123@cluster0.shsop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server Started At ${PORT}`));
  })
  .catch((err) => console.log(err));
