const fs = require('fs'),
  http = require('http');

fs.readFile('./index.html', (err, html) => {
  const server = http.createServer((req, res) => {
    res.write(html);
    res.end();
  });
  server.listen(1200, () => console.log('Server Start Successfully'));
});
