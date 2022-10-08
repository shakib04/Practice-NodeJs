// run `node index.js` in the terminal

console.log(`Hello, Node.js v${process.versions.node}!`);

const http = require('http');

const app = {};

app.config = {
  port: 3001,
};

app.createServer = () => {
  const server = http.createServer();
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

app.handleReqRes = (req, res) => {
  console.log('incoming request');
  const parsedUrl = url.parse(req.url, true);
  console.log(req);
  console.log(parsedUrl);
  res.end('Hello World');
};

app.createServer();
