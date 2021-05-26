const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

const PORT = process.env.PORT || 1200;
app.listen(PORT, () => console.log(`Server is started at ${PORT}`));
