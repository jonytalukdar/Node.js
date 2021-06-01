const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('WE are working with template engine');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`The Server Is Started At ${PORT}`));
