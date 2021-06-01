const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = requir('/routes.js');
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// let Schema = mongoose.Schema;
// let testSchema = new Schema({
//   name: String,
// });

// let Test = mongoose.model('Test', testSchema);

app.use('/contact', router);

app.get('/', (req, res) => {
  //   let test = new Test({
  //     name: 'Joney Talukdar',
  //   });
  //   test
  //     .save()
  //     .then((t) => {
  //       res.send(t);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       res.status(500).json({
  //         error: 'Error Occured',
  //       });
  //     });
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
