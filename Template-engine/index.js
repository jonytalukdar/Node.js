const express = require('express');
const morgan = require('morgan');

const app = express();
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  let post = {
    title: 'title',
    body: 'post body',
    published: true,
  };

  let posts = [
    { title: 'title one', author: 'joney talukdar' },
    { title: 'title two', author: 'joney talukdar' },
    { title: 'title three', author: 'joney talukdar' },
    { title: 'title four', author: 'joney talukdar' },
  ];

  res.render('index', {
    title: 'EJS is an awesome template engine for express',
    post,
    posts,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`The Server Is Started At ${PORT}`));
