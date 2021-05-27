const express = require('express');
const morgan = require('morgan');

const contactsRoute = require('./contactsRouter');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/contacts', contactsRoute);

// app.get('/', (req, res) => {
//   res.send('hello world');
// });

app.get('*', (req, res) => {
  res.send('<h1>Please Enter Valid Route');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Started At ${PORT}`));
