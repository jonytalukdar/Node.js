const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end('<h1>hello node.js you are awesome</h1>');
});

server.listen(1200, () => console.log('server connected successfull'));
