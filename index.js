// run `node index.js` in the terminal

console.log(`Hello, Node.js v${process.versions.node}!`);

const http = require('http');
const url = require('url');
const { handleReqRes } = require('./helpers/handleReqRes');

const app = {};

app.config = {
  port: 3001,
};

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port}`);
  });
};

app.handleReqRes = handleReqRes;

app.createServer();
