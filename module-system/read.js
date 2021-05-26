const fs = require('fs');

fs.readFile('./test.json', (err, data) => {
  if (err) {
    return console.log(err);
  }
  const json = JSON.parse(data);
  console.log(json);
});
